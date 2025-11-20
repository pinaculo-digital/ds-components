<script lang="ts">
  import Icon from '../../../assets/icon/Icon.svelte';
  
  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import type { IconName } from '../../../lib/utils/icons/icons-type.js';
  import { getColor } from '../../../lib/utils/colors/colors-utils.js';

  interface Props {
    borderColor: ColorName;
    textColor: ColorName;
    buttons: {
      label: string;
      iconLeft?: IconName;
      iconRight?: IconName;
      disabled?: boolean;
      onClick?: () => void;
    }[];
  }

  let { borderColor, textColor, buttons }: Props = $props();
</script>

<div class="flex w-fit gap-0 overflow-hidden rounded-lg border" style="border-color: {getColor(borderColor).value};">
  {#each buttons as button}
    <button
      class=" flex items-center justify-center gap-2 border border-y-0 px-4 py-2 text-[14px] font-medium {button.disabled
        ? 'text-sub-600'
        : 'text-sub-600 hover:bg-weak-50 hover:text-strong-950'}"
      style="border-color: {getColor(borderColor).value}"
      disabled={button.disabled}
      onclick={button.onClick}
    >
      {#if button.iconLeft}
        <Icon type={button.iconLeft} fillColor={textColor} />
      {/if}
      {button.label}
      {#if button.iconRight}
        <Icon type={button.iconRight} fillColor={textColor} />
      {/if}
    </button>
  {/each}
</div>
