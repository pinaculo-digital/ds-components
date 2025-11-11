<script lang="ts" module>
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }
</script>

<script lang="ts">
  let { children }: Props = $props();
</script>

<tbody class="w-full">
  {#if children}
    {@render children()}
  {/if}
</tbody>
