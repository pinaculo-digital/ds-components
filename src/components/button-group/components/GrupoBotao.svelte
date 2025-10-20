<script lang="ts">
  import Icon from '$components/assets/icon/Icon.svelte';

   import { getColor, type ColorName } from '../../../lib/utils/colors/colors.utils'
  import type { IconName } from '$components/assets/icon/icons.type';

  interface Props {
    borderColor: ColorName;
    textColor: ColorName;
    buttons: {
      label: string | IconName;
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
