<script lang="ts">
  import ProgressBar from './ProgressBar.svelte';

  import type { Snippet } from 'svelte';

  interface Props {
    label: string;
    percentage: number;
    children?: Snippet;
    percentageInTop?: boolean;
  }

  let { percentage = $bindable(5), label = 'Label', children, percentageInTop = true }: Props = $props();
</script>

<div class="flex w-full flex-col gap-1.5">
  <div class="flex w-full justify-between">
    <p class="text-label-small text-strong-950">{label}</p>
    {#if percentageInTop}
      <p class="text-paragraph-x-small text-sub-600">{percentage}%</p>
    {/if}
  </div>
  <div class="flex w-full items-center gap-1">
    <ProgressBar bind:percentage />
    {#if !percentageInTop}
      <p class="text-paragraph-x-small text-sub-600">{percentage}%</p>
    {/if}
  </div>
  {@render children?.()}
</div>