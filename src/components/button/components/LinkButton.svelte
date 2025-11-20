<script lang="ts">
  import LoaderSmooth from '../../../assets/loading/LoaderSmooth.svelte';
  import Icon from '../../../assets/icon/Icon.svelte';
  
  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import type { IconName } from '../../../lib/utils/icons/icons-type.js';
  import { getColor } from '../../../lib/utils/colors/colors-utils.js';

  interface Props {
    rightIcon?: IconName;
    leftIcon?: IconName;
    label?: string;
    click: VoidFunction;
    loading?: boolean;
    disabled?: boolean;
    textColor?: ColorName;
    textColorHover?: ColorName;
    underline?: boolean;
    textColorDisabled?: ColorName;
  }

  let {
    rightIcon,
    leftIcon,
    label = 'Clique aqui',
    click,
    loading,
    disabled = $bindable(),
    textColor = 'black',
    textColorHover,
    underline = false,
    textColorDisabled,
  }: Props = $props();

  function handleMouseEnter() {
    if (!disabled) {
      textColor = textColorHover ?? textColor;
    }
  }
  function handleMouseLeave() {
    if (!disabled) {
      textColor = textColorHover ?? textColor;
    }
  }
</script>

<button
  onclick={click}
  class="flex items-center justify-center gap-1 rounded-[0.625rem] underline-offset-2 hover:underline {underline
    ? 'underline'
    : ''}"
  {disabled}
  style="color: {disabled ? getColor(textColorDisabled ?? textColor).value : getColor(textColor).value}"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  {#if leftIcon && !loading}
    <div class="-ml-1">
      <Icon type={leftIcon} fillColor={textColor} />
    </div>
  {/if}
  {#if loading}
    <LoaderSmooth size="w-4" />
  {:else if label}
    <p class="text-label-small font-medium">
      {label}
    </p>
  {/if}
  {#if rightIcon && !loading}
    <div class="-mr-1">
      <Icon type={rightIcon} fillColor={textColor} />
    </div>
  {/if}
</button>