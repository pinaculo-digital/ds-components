<script lang="ts" module>
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    status: string;
  }
</script>

<script lang="ts">
  let { children, status }: Props = $props();
</script>

<button class="text-12 text-sub-600 border-soft-200 flex items-center gap-1 rounded-[6px] border px-2 py-1 font-medium">
  {@render children()}
  {status}
</button>
