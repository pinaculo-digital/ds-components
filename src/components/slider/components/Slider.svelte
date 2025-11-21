
<script lang="ts" module>
  import { onMount } from 'svelte';

  interface Props {
    label: string;
    subLabel?: string;
    end: number;
    limit: number;
  }
</script>

<script lang="ts">
  let { label = 'Label', subLabel = '(Sublabel)', end = $bindable(5), limit = 100 }: Props = $props();

  let sliderWidth = $state<number>(0);
  let slider = $state<HTMLDivElement>();
  let dragMode = $state<'off' | 'end'>('off');

  let positionX = $derived.by(() => {
    if (!slider) return 0;
    const pct = (end * 100) / limit;
    return sliderWidth * (pct / 100);
  });

  const onEnter = () => {
    dragMode = 'end';
  };

  const onExit = () => {
    dragMode = 'off';
  };

  const onMove = (e: MouseEvent) => {
    if (dragMode === 'off') return;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const pct = (x * 100) / sliderWidth;

    if (pct < 0) {
      end = 0;
      return;
    }
    if (pct > limit) {
      end = limit;
      return;
    }

    end = pct;
  };

  onMount(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        sliderWidth = entry.contentRect.width;
      }
    });
    resizeObserver.observe(slider!);

    return () => {
      resizeObserver.disconnect();
    };
  });
</script>

<div class="flex flex-col">
  <div class="flex items-center justify-between gap-12">
    <div class="flex items-center gap-1">
      <span class="text-paragraph-x-small text-sub-600">{label}</span>
      {#if subLabel}
        <span class="text-paragraph-x-small text-soft-400">{subLabel}</span>
      {/if}
    </div>

    <span class="text-paragraph-x-small text-sub-600">
      {end.toFixed(2)}
    </span>
  </div>

  <div
    class="relative w-full grow py-3"
    bind:this={slider}
    role="slider"
    tabindex="-1"
    aria-valuenow={end}
    aria-valuemax={limit}
    aria-valuemin={0}
    aria-roledescription="Slider"
    onmousedown={onEnter}
    onmouseup={onExit}
    onmousemove={onMove}
    onmouseleave={onExit}
  >
    <div class="bg-soft-200 pointer-events-none mt-3 flex h-1.5 w-full rounded-full">
      <div class="bg-primary-base z-0 h-full rounded-full transition-none" style="width:{positionX}px"></div>

      {@render knob()}
    </div>
  </div>
</div>

{#snippet knob()}
  <div
    class="absolute top-1/2 z-[5] mt-1.5 flex aspect-square -translate-y-1/2 cursor-col-resize select-none"
    style="transform:translateX({positionX - 10}px)"
  >
    <div class="flex aspect-square w-4 items-center justify-center rounded-full bg-white shadow-md">
      <div class="bg-primary-base aspect-square w-2 rounded-full"></div>
    </div>
  </div>
{/snippet}
