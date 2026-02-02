<script module>
  import { fly, scale } from 'svelte/transition';
  import type { Snippet } from 'svelte';

  interface Props {
    redirectComponent: VoidFunction;
    children?: Snippet;
  }
</script>

<script lang="ts">
  let { children, redirectComponent }: Props = $props();
</script>

<button
  class="border-soft-200 flex w-full flex-col items-start gap-2 overflow-hidden rounded-[16px] border p-4 pt-[10px] text-start hover:cursor-pointer hover:shadow-md"
  in:fly|global={{ duration: 800, x: 500 }}
  out:scale|global={{ duration: 800 }}
  onclick={redirectComponent}
>
  {@render children?.()}
</button>
