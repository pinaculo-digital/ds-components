<script lang="ts" module>
  import Icon from '../../../assets/icon/Icon.svelte';
  import type { IconName } from '../../../lib/utils/icons/icons-type.js';

  interface Props {
    icon: IconName;
    titulo?: string;
    link?: {
      label: string;
      action: VoidFunction;
    };
    onClose: VoidFunction;
    descricao?: string;
  }
</script>

<script lang="ts">
  let {
    titulo = 'Insira seu titulo aqui',
    descricao = 'Insira sua descrição aqui',
    link,
    onClose,
    icon,
  }: Props = $props();
</script>

<div class="pointer-events-auto relative flex w-full items-center justify-center rounded-2xl px-12 py-4">
  <div class="flex items-center gap-4">
    <Icon type={icon} />
    <h2 class="ml-1 text-[14px] font-medium">{titulo}</h2>
    <div class="bg-white-0 aspect-square w-1 rounded-full"></div>
    <h3 class="text-[14px] font-normal">{descricao}</h3>
    {#if link}
      <button onclick={link.action} class="text-sub-600 text-paragraph-small font-medium underline">
        {link.label}
      </button>
    {/if}
  </div>

  <button class="absolute right-4 p-2" onclick={onClose}>
    <Icon type="close-line" opticalSize={16} fillColor={'white'} />
  </button>
</div>
