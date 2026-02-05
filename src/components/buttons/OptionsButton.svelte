<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  import { onDestroy, onMount, type Snippet } from 'svelte';

  interface Props {
    options?: { label: string; action?: VoidFunction }[];
    children?: Snippet;
    position?: string;
    onClick?: VoidFunction;
    width?: string;
  }

  const mock: Props['options'] = [{ label: 'Option 1' }, { label: 'Option 2' }];

  let { options = mock, children, onClick, position = 'top-7 right-0', width = 'min-w-[6rem]' }: Props = $props();
  let showOptions = $state<boolean>(false);
  let menuRef: HTMLDivElement;

  function clickOutside(event: MouseEvent) {
    if (!menuRef?.contains(event.target as Node)) {
      showOptions = false;
    }
  }
  function toggleView() {
    onClick?.();
    showOptions = !showOptions;
  }
  function callAction(callback?: VoidFunction) {
    toggleView();
    callback?.();
  }

  onMount(() => document.addEventListener('click', clickOutside));

  onDestroy(() => document.removeEventListener('click', clickOutside));
</script>

<div class="relative h-6 w-6" bind:this={menuRef}>
  <button
    class="flex h-6 w-6 items-center justify-center rounded-sm {showOptions ? 'bg-sub-300' : ''}"
    onclick={toggleView}
  >
    {#if children}
      {@render children()}
    {:else}
      <Icon type="more-2-line" opticalSize={20} />
    {/if}
  </button>
  {#if showOptions}
    <div class="absolute {position} bg-white-0 border-soft-200 z-10 flex flex-col rounded-md border p-1">
      {#each options as { label, action }}
        <button
          class="text-strong-950 flex items-start rounded-sm p-2 text-start text-xs {width} hover:bg-weak-50 shrink-0 transition-colors"
          onclick={() => callAction(action)}
        >
          {label}
        </button>
      {/each}
    </div>
  {/if}
</div>
