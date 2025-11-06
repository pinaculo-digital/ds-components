<script lang="ts">
  import { tooltip } from "../../lib/actions/title.svelte.js";

  let {
    label,
    required,
    subLabel,
    extraTip,
  }: { label: string; required?: boolean; subLabel?: string; extraTip?: string } = $props();
</script>

<div class="flex items-center">
  <b class="text-strong-950 text-[14px] font-medium">
    {label}
  </b>
  {#if required}
    <span class="text-primary-base text-[14px]">*</span>
  {/if}
  {#if subLabel}
    <span class="text-sub-600 mr-1 ml-1 text-[14px] font-normal">
      {subLabel}
    </span>
  {/if}

  {#if extraTip}
    <div
      class="text-primary-base translate-x-1 text-[14px]"
      use:tooltip={{
        text: extraTip,
        posTriangulo: 'bottom-middle',
      }}
    >
      <!-- <SvgItalic /> -->
    </div>
  {/if}
</div>
