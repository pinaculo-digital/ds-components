<script lang="ts" module>
  import LoaderSmooth from '../../assets/loading/LoaderSmooth.svelte';
  import Icon from '../../assets/icon/Icon.svelte';

  import { portal } from '../../lib/actions/portal.svelte.js';
  import { fade, fly } from 'svelte/transition';
  import { quadInOut } from 'svelte/easing';
  import type { Snippet } from 'svelte';

  interface Props {
    open: boolean;
    children: Snippet;
    target?: string;
    label?: string;
    loading?: boolean;
    curved?: boolean;
    withDefaultPadding?: boolean;
    withCloseButton?: boolean;
  }
</script>

<script lang="ts">
  let {
    open = $bindable(),
    withDefaultPadding = true,
    curved = false,
    children,
    label,
    loading,
    target = 'body',
    withCloseButton = true,
  }: Props = $props();
</script>

{#if open}
  <div
    class="
      fixed top-0
      left-0 z-10 flex h-svh w-screen justify-end
      {curved ? 'p-2' : ''}
      bg-static-black/30 dark:bg-static-white/10 backdrop-blur-[1px]"
    use:portal={target}
    transition:fade
  >
    <div
      class="bg-white-0 flex flex-col justify-start {curved ? 'rounded-[20px]' : ''} relative z-20 h-full max-w-[400px]
          min-w-[400px] items-start overflow-x-hidden overflow-y-auto py-4"
      transition:fly={{ x: 500, duration: 300, easing: quadInOut }}
    >
      {#if label}
        <div class="text-label-small mb-4 flex w-full items-center justify-between px-4">
          {label}
          {#if withCloseButton}
            <button class="p-2" onclick={() => (open = false)}>
              <Icon type="close-line" opticalSize={20} />
            </button>
          {/if}
        </div>
      {/if}
      {#if !loading}
        {@render children()}
      {:else}
        <div class="flex h-full w-full items-center justify-center">
          <LoaderSmooth size="w-6" cor="black" />
        </div>
      {/if}
    </div>
    <button aria-label="Sair do Modal" class=" absolute top-0 left-0 z-0 h-full w-full" onclick={() => (open = false)}>
    </button>
  </div>
{/if}
