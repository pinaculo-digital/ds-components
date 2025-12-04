<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import { fly, scale } from 'svelte/transition';
  import LoaderSmooth from '../loading/LoaderSmooth.svelte';

  interface Props {
    children: Snippet;
    css?: string;
    loading?: boolean;
    padding?: string;
  }
</script>

<script lang="ts">
  let { children, css = 'w-full', loading, padding = 'p-6' }: Props = $props();
</script>

<div
  class="border-soft-200 bg-white-0 flex flex-col overflow-hidden rounded-2xl border {padding} {css}"
  style="shadow: rgba(23, 23, 23, 0.06)"
>
  {#if !loading}
    {@render children()}
  {:else}
    <div class="flex w-full items-center justify-center p-12">
      <LoaderSmooth cor="black" size="w-6" />
    </div>
  {/if}
</div>
