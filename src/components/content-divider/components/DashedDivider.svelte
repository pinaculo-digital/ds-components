<script lang="ts">  
  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import { getColor } from '../../../lib/utils/colors/colors-utils.js';

  interface Props {
    color: ColorName;
    orientation: 'horizontal' | 'vertical';
    middleDot?: boolean;
    padding?: string;
  }

  let { padding = 'pr-6', color = 'neutral-200', orientation, middleDot = false }: Props = $props();
</script>

{#if orientation === 'vertical'}
  <div class="relative h-full">
    <div class="h-full border-r border-dashed" style="border-color: {getColor(color).value};"></div>
    {#if middleDot}
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1.5">
        <div class="bg-sub-300 h-1.5 w-1.5 shrink-0 rounded-full"></div>
      </div>
    {/if}
  </div>
{:else}
  <div class="relative w-full">
    <div class="{padding} my-4">
      <div class="w-full border-b border-dashed" style="border-color: {getColor(color).value};"></div>
    </div>
    {#if middleDot}
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1">
        <div class="bg-sub-300 h-1.5 w-1.5 shrink-0 rounded-full"></div>
      </div>
    {/if}
  </div>
{/if}
