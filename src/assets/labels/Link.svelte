<script lang="ts" module>
  import type { Snippet } from 'svelte';

  interface Props {
    action: VoidFunction;
    children: Snippet;
  }
</script>

<script lang="ts">
  let { action, children }: Props = $props();
</script>

<button class="text-sub-600 text-[14px] font-medium underline" onclick={action}>
  {@render children()}
</button>
