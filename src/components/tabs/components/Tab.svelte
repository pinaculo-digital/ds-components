<script lang="ts" module>
    import { slide } from 'svelte/transition';
  import type { Snippet } from 'svelte';

  interface Props {
    options: {
      label: string;
      snippetLeft?: Snippet;
    }[];
    labelSelected: string;
  }
</script>

<script lang="ts">
  let { options, labelSelected = $bindable() }: Props = $props();
</script>

<div class="border-soft-200 flex w-full items-start gap-5 border-b px-6">
  {#each options as op}
    <button
      class="flex flex-col gap-4 text-[14px] {op.label === labelSelected
        ? 'text-strong-950'
        : 'text-sub-600'} font-medium"
      onclick={() => (labelSelected = op.label)}
    >
      {op.label}
      {#if op.label === labelSelected}
        <div class="bg-primary-base h-0.5 w-full" transition:slide={{ axis: 'x' }}></div>
      {/if}
    </button>
  {/each}
</div>
