<script lang="ts" module>
  import Icon from '../../assets/icon/Icon.svelte';
    import type { ColorName} from '../../lib/utils/colors/colors.utils.js';
  import { getColor } from '../../lib/utils/colors/colors.utils.js';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';

  type Temas =
    | 'error-base'
    | 'error-light'
    | 'error-lighter'
    | 'information-base'
    | 'information-light'
    | 'information-lighter'
    | 'success-base'
    | 'success-light'
    | 'success-lighter'
    | 'faded-base'
    | 'faded-light'
    | 'faded-lighter'
    | 'warning-base'
    | 'warning-light'
    | 'warning-lighter'
    | 'error-transparent'
    | 'success-transparent'
    | 'information-transparent'
    | 'warning-transparent'
    | string;

  interface Props {
    tema?: Temas;
    icon?: IconName;
    titulo?: string;
    link?: {
      label: string;
      action: VoidFunction;
    };
    onClose: Function;
    descricao?: string;
    bgColor?: ColorName;
    fillColor?: ColorName;
    textColor?: ColorName;
  }
</script>

<script lang="ts">
  const defaultProps = {
    icon: 'error-warning-fill',
    titulo: 'Insira seu titulo aqui',
    descricao: 'Insira sua descrição aqui',
    link: {
      label: 'Ir para o link',
      action: () => {},
    },
    onClose: () => {},
  };

  let {
    titulo = defaultProps.titulo,
    descricao = defaultProps.descricao,
    link = defaultProps.link,
    onClose = defaultProps.onClose,
    icon = 'error-warning-fill',
    bgColor = 'red-600',
    fillColor = 'white',
    textColor = 'white',
    tema,
  }: Props = $props();
</script>

<div
  class="pointer-events-auto relative flex w-full items-center justify-center rounded-2xl px-12 py-3"
  style="background-color: {getColor(bgColor).value};"
>
  <div class="flex items-center gap-3">
    <Icon type={icon} {fillColor} />
    <div class="flex items-center gap-2" style="color: {getColor(textColor).value};">
      <h2 class="text-14 ml-1 font-medium">{titulo}</h2>
      <div class="bg-white-0 aspect-square w-1 rounded-full"></div>
      <h3 class="text-14 font-normal">{descricao}</h3>
    </div>

    {#if link}
      <button
        onclick={link.action}
        class="text-sub-600 text-paragraph-small cursor-pointer font-medium underline"
        style="color: {getColor(textColor).value};"
      >
        {link.label}
      </button>
    {/if}
  </div>

  <button class="absolute right-4 cursor-pointer p-2" onclick={() => onClose()}>
    <Icon type="close-line" opticalSize={16} {fillColor} />
  </button>
</div>
