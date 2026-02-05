<script lang="ts" module>
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    gridCols: string;
    header: {
      label: string;
      colSpan: string;
    }[];
  }
</script>

<script lang="ts">
  let { children, gridCols, header }: Props = $props();
</script>

<div class="flex flex-col gap-4">
  <div class="bg-weak-50 text-sub-600 grid w-full gap-8 rounded-[8px] px-6 py-2 text-[14px] font-light {gridCols}">
    {#each header as h}
      <div class="flex {h.colSpan}">
        {h.label}
      </div>
    {/each}
  </div>
  <div class="flex flex-col text-[14px]">
    {@render children()}
  </div>
</div>
