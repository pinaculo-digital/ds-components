<script lang="ts">
  import LoaderSmooth from '../../../assets/loading/LoaderSmooth.svelte';
  import Icon from '../../../assets/icon/Icon.svelte';
  
  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import type { IconName } from '../../../lib/utils/icons/icons-type.js';
  import { getColor } from '../../../lib/utils/colors/colors-utils.js';
  import LoaderSmooth from '../../../assets/loading/LoaderSmooth.svelte';

  interface Props {
    rightIcon?: IconName;
    leftIcon?: IconName;
    label?: string;
    click: VoidFunction;
    loading?: boolean;
    disabled?: boolean;
    textColor: ColorName;
    bgColor: ColorName;
    bgColorHover?: ColorName;
    bgColorDisabled?: ColorName;
    wfull?: boolean;
    borderColor?: ColorName;
  }

  let {
    rightIcon,
    leftIcon,
    label,
    click,
    loading,
    disabled = $bindable(),
    textColor,
    bgColor,
    bgColorHover,
    bgColorDisabled,
    borderColor = 'transparent',
    wfull,
  }: Props = $props();

  function handleMouseEnter() {
    if (!disabled) {
      bgColor = bgColorHover ?? bgColor;
    }
  }
  function handleMouseLeave() {
    if (!disabled) {
      bgColor = bgColorHover ?? bgColor;
    }
  }
</script>

<button
  onclick={click}
  class="flex items-center justify-center gap-1 rounded-[0.625rem] border p-2.5 {wfull ? 'w-full' : ''}"
  {disabled}
  style="background-color: {disabled
    ? getColor(bgColorDisabled ?? bgColor).value
    : getColor(bgColor).value}; border-color: {getColor(borderColor).value};"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
>
  {#if leftIcon && !loading}
    <div class="-mt-0.5 -ml-1.5">
      <Icon type={leftIcon} fillColor={textColor} />
    </div>
  {/if}
  {#if loading}
    <LoaderSmooth tamanho="w-4" />
  {:else if label}
    <p class="text-label-small font-medium" style="color: {getColor(textColor).value};">
      {label}
    </p>
  {/if}
  {#if rightIcon && !loading}
    <div class="-mt-0.5 -mr-1.5">
      <Icon type={rightIcon} fillColor={textColor} />
    </div>
  {/if}
</button>
