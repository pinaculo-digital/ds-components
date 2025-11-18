<script lang="ts">
  import type { Component, Snippet } from 'svelte';

  interface Props {
    label: string;
    desc: string;
    lateralPadding?: boolean;
    snippetRight?: Component | Snippet;
  }

  let { label, desc, snippetRight: Snip, lateralPadding = false }: Props = $props();
</script>

<div class="border-b border-soft-200 pb-5 flex items-center justify-between bg-white-0 {lateralPadding ? 'px-5' : ''}">
  <div class="flex flex-col">
    <span class="text-[18px] font-medium">
      {label}
    </span>
    <p class="text-14 text-sub-600">
      {desc}
    </p>
  </div>
  {#if Snip}
    <Snip />
  {/if}
</div>
