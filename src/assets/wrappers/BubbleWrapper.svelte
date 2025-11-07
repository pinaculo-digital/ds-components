<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import { fly, scale } from 'svelte/transition';
  import LoaderSmooth from '../loading/LoaderSmooth.svelte';

  interface Props {
    children: Snippet;
    css?: string;
    loading?: boolean;
  }
</script>

<script lang="ts">
  let { children, css = 'w-full', loading }: Props = $props();
</script>

<div
  class="border-soft-200 flex flex-col overflow-hidden rounded-[16px] border p-4 pt-[10px] {css}"
  in:fly|global={{ duration: 800, x: 500 }}
  out:scale|global={{ duration: 800 }}
>
  {#if !loading}
    {@render children()}
  {:else}
    <div class="flex w-full items-center justify-center p-12">
      <LoaderSmooth cor="black" tamanho="24px" />
    </div>
  {/if}
</div>
