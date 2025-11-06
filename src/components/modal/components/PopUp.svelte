<script lang="ts" module>
  import { portal } from '../../../lib/actions/portal.svelte.js';
  import type { Snippet } from 'svelte';
  import { quadInOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';

  interface Props {
    open: boolean;
    children: Snippet;
    target?: string;
    withCloseButton?: boolean;
    withDefaultPadding?: boolean;
    clickOutside?: VoidFunction;
  }
</script>

<script lang="ts">
  let {
    open = $bindable(),
    children,
    clickOutside = () => {},
    target = 'body',
    withCloseButton = true,
    withDefaultPadding = true,
  }: Props = $props();
</script>

{#if open}
  <div
    class="bg-static-black/30 dark:bg-static-white/10 fixed top-0 left-0 z-10 flex h-svh w-screen items-center justify-center p-4
	backdrop-blur-[1px] xl:p-16"
    use:portal={target}
    transition:fade
  >
    <div
      class="bg-white-0 flex flex-col items-start justify-start overflow-x-hidden overflow-y-auto
		xl:max-w-[700px] {withDefaultPadding && 'p-4 px-5'} relative z-20 rounded-2xl"
      transition:fly={{ y: 500, duration: 600, easing: quadInOut }}
    >
      {#if withCloseButton}
        <button class="absolute top-0 right-0 m-4 p-2" onclick={() => (open = false)}>
          <!-- <SvgX props={{ class: 'fill-black dark:fill-white' }} /> -->
        </button>
      {/if}
      {@render children()}
    </div>
    <button
      aria-label="Sair do Modal"
      class=" absolute top-0 left-0 z-0 h-full w-full"
      onclick={() => ((open = false), clickOutside())}
    >
    </button>
  </div>
{/if}
