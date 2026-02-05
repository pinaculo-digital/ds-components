<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: Snippet;
  }

  let { text, position, children }: Props = $props();

  let show = $state(false);
</script>

<div
  role="tooltip"
  class="relative inline-block"
  onmouseenter={() => (show = true)}
  onmouseleave={() => (show = false)}
  onfocus={() => (show = true)}
  onblur={() => (show = false)}>
  {@render children()}

  {#if show}
    <div
      class="absolute z-99 px-2 py-1 text-label-x-small rounded bg-black text-white whitespace-nowrap pointer-events-none transition-opacity duration-150"
      style={position === 'top'
        ? 'bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 6px;'
        : position === 'bottom'
          ? 'top: 100%; left: 50%; transform: translateX(-50%); margin-top: 6px;'
          : position === 'left'
            ? 'right: 100%; top: 50%; transform: translateY(-50%); margin-right: 6px;'
            : 'left: 100%; top: 50%; transform: translateY(-50%); margin-left: 6px;'}>
      {@html text}
    </div>
  {/if}
</div>
