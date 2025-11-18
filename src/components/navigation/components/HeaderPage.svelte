<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    label: string;
    description: string;
    children?: Snippet;
  }

  let { label, description, children }: Props = $props();
</script>

<div
  class="border-soft-200 sticky top-0 z-99 flex w-full justify-between gap-4 border-b bg-white shadow-[0_4px_6px_1px_rgba(255,255,255,1)]"
>
  <div class="flex flex-col gap-1 py-5">
    <p class="text-label-large text-strong-950">{label}</p>
    <p class="text-label-small text-sub-600">{description}</p>
  </div>
  {#if children}
    <div class="flex h-full w-fit py-5">
      {@render children()}
    </div>
  {/if}
</div>
