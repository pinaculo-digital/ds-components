<script lang="ts" module>
  import { onMount } from 'svelte';

  interface Props {
    label: string;
    subLabel?: string;
    start: number;
    end: number;
    limit: number;
  }
</script>

<script lang="ts">
  let { label, subLabel, start = $bindable(), end = $bindable(), limit }: Props = $props();

  let sliderWidth = $state<number>(0);
  let slider = $state<HTMLDivElement>();

  let dragMode = $state<'off' | 'start' | 'end'>('off');

  let positionXMin = $derived.by(() => {
    if (!slider) return 0;
    const porcentagem = (start * 100) / limit;
    const xpos = sliderWidth * (porcentagem / 100);

    return xpos;
  });

  let positionXMax = $derived.by(() => {
    if (!slider) return 0;
    const porcentagem = (end * 100) / limit;
    const xpos = sliderWidth * (porcentagem / 100);
    return xpos;
  });

  const onEnter = (e: MouseEvent) => {
    const porcentagem = (e.offsetX * 100) / sliderWidth;
    if (Math.abs(porcentagem - end) > Math.abs(porcentagem - start)) {
      dragMode = 'start';
      return;
    }
    dragMode = 'end';
  };

  const onExit = () => {
    dragMode = 'off';
  };

  const onMove = (e: MouseEvent) => {
    if (dragMode === 'off') return;
    const offset = dragMode === 'start' ? -35 : 15;
    const porcentagem = ((e.offsetX + offset) * 100) / sliderWidth;
    if (dragMode === 'start') {
      if (porcentagem <= 0) {
        start = 0;
        return;
      }
      if (porcentagem >= end) {
        start = end - 1;
        return;
      }

      start = porcentagem;
    }
    if (dragMode === 'end') {
      if (porcentagem >= limit) {
        end = limit;
        return;
      }
      if (porcentagem <= start) {
        end = start + 1;
        return;
      }

      end = porcentagem;
    }
  };

  onMount(() => {
    const resizeObserver = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        sliderWidth = width;
      }
    });
    resizeObserver.observe(slider!);
    return () => {
      resizeObserver.unobserve(slider!);
      resizeObserver.disconnect();
    };
  });
</script>

<div class="flex flex-col">
  <div class="text-sub-600 flex items-center justify-between gap-12 text-[12px]">
    <div class="flex items-center gap-1">
      <span>{label}</span>
      {#if subLabel}
        <span class="text-soft-400">{subLabel}</span>
      {/if}
    </div>
    <span>
      {start.toFixed(2)} - {end.toFixed(2)}
    </span>
  </div>

  <div
    class="relative w-full grow py-3"
    bind:this={slider}
    role="slider"
    tabindex="-1"
    aria-valuenow={limit}
    aria-valuemax={limit}
    aria-valuemin={0}
    aria-roledescription="Slider"
    onmousedown={onEnter}
    onmouseup={onExit}
    onmousemove={onMove}
    onmouseleave={onExit}
  >
    <div class="bg-soft-200 pointer-events-none mt-3 flex h-[6px] w-full grow items-center rounded-full select-none">
      {@render slide('start')}
      {@render slide('end')}

      <div
        class="bg-primary-base z-0 h-full rounded-full transition-none"
        style="
            transform:translateX({positionXMin + 2}px);
            width:{positionXMax - positionXMin}px;
            "
      ></div>
    </div>
  </div>
</div>

{#snippet slide(mode: 'start' | 'end')}
  <div
    role="button"
    tabindex="-1"
    onmousedown={(e) => {
      e.preventDefault();
    }}
    class="absolute left-0 z-[5] flex aspect-square shrink-0 cursor-col-resize items-center justify-center
      rounded-full transition-none select-none"
    style="transform:translateX({mode === 'start' ? positionXMin : positionXMax - 10}px)"
  >
    <div class="flex aspect-square w-4 items-center justify-center rounded-full bg-white shadow-md">
      <div class="bg-primary-base aspect-square w-2 rounded-full"></div>
    </div>
  </div>
{/snippet}
