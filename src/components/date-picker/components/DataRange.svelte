<script lang="ts" module>
  import DayMode from './DayMode.svelte';
  import { fade, fly } from 'svelte/transition';
  import { quadInOut } from 'svelte/easing';
  import { portal } from '../../../lib/actions/portal.svelte';
  import type { RangeType, RangeString } from '../../../lib/types/ordinary';

  interface Props {
    range?: RangeType | undefined | null;
    rangeString?: RangeString | undefined | null;
    isVisible: boolean;
    extraTailwind?: string;
    onlyOneDay?: boolean;
    onSelecionar: (v: RangeType) => void;
  }
</script>

<script lang="ts">
  let {
    range = $bindable(),
    rangeString = $bindable(),
    isVisible = $bindable(),
    extraTailwind = '',
    onlyOneDay = false,
    onSelecionar,
  }: Props = $props();
  let innerWidth = $state<number>(1280);

  $effect(() => {
    if (range && range.start !== null) {
      if (!rangeString) {
        rangeString = {
          start: range.start ? range.start.toISOString() : '',
          end: range.end ? range.end.toISOString() : '',
        };
      }
      rangeString.start = range.start ? range.start.toISOString() : '';
      rangeString.end = range.end ? range.end.toISOString() : '';
    }
  });
</script>

<svelte:window bind:innerWidth />
{#if isVisible}
  <div
    use:portal={'body'}
    class="fixed right-0 bottom-0 z-20 flex h-svh w-screen items-center justify-center
        bg-[rgba(0,0,0,.4)] backdrop-blur-[1px] outline-none"
    id="dataRange"
    transition:fade
  >
    <div
      class="bg-white-0 border-soft-200 relative z-10 flex max-h-[80svh]
            w-[400px] flex-grow-0 flex-col overflow-y-auto rounded-[8px] border shadow-xl xl:w-auto xl:max-w-[90vw]"
      transition:fly={{ y: 500, duration: 600, easing: quadInOut }}
    >
      <DayMode {onlyOneDay} {onSelecionar} bind:isVisible bind:range />
    </div>
    <button aria-label="Fechar modal" onclick={() => (isVisible = false)} class="absolute z-0 h-full w-full"> </button>
  </div>
{/if}
