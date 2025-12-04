<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

    import type { ColorName} from '../../lib/utils/colors/colors.utils.js';
  import { getColor } from '../../lib/utils/colors/colors.utils.js';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';

  interface Props {
    leftIcon?: IconName;
    rightIcon?: IconName;
    underline?: boolean;
    disabled?: boolean;
    onClick: Function;
    color?: ColorName;
    size?: 16 | 20;
    label: string;
  }

  let {
    label,
    leftIcon,
    rightIcon,
    underline = true,
    color = 'primary',
    size = 20,
    onClick,
    disabled = false,
  }: Props = $props();

  let fillColor = $derived(disabled ? getColor('neutral-400').value : getColor(color).value);
  let usedColor = $derived(disabled ? 'neutral-400' : color);

  async function handleClick() {
    disabled = true;
    await onClick();
    disabled = false;
  }
</script>

<button
  {disabled}
  class="sk flex items-center gap-1 hover:cursor-pointer disabled:hover:cursor-not-allowed"
  onclick={handleClick}
>
  {#if leftIcon}
    <Icon type={leftIcon} opticalSize={size} fillColor={usedColor} />
  {/if}

  <p
    class="text-label-small font-medium {underline ? 'underline underline-offset-2' : ''}"
    style="color: {fillColor}; hover:color: {fillColor}/90;"
  >
    {label}
  </p>

  {#if rightIcon}
    <Icon type={rightIcon} opticalSize={size} fillColor={usedColor} />
  {/if}
</button>
