<script lang="ts" module>
  import { onMount } from 'svelte';

  interface Props {
    label: string;
    subLabel?: string;
    value: number;
    limit: number;
  }
</script>

<script lang="ts">
  let { label, subLabel, value = $bindable(), limit }: Props = $props();

  let sliderWidth = $state<number>(0);
  let slider = $state<HTMLDivElement>();
  let dragMode = $state<boolean>(false);

  let positionX = $derived.by(() => {
    if (!slider) return 0;
    const porcentagem = (value * 100) / limit;
    const xpos = sliderWidth * (porcentagem / 100);
    return xpos;
  });

  const onEnter = (e: MouseEvent) => {
    dragMode = true;
    const porcentagem = (e.offsetX * 100) / sliderWidth;
    value = porcentagem;
  };

  const onExit = () => {
    dragMode = false;
  };

  const onMove = (e: MouseEvent) => {
    if (!dragMode) return;
    const porcentagem = (e.offsetX * 100) / sliderWidth;
    value = porcentagem;
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
      {value.toFixed(2)}
    </span>
  </div>
  {@render slide()}
</div>

{#snippet slide()}
  <div
    role="slider"
    tabindex="-1"
    aria-valuenow={value}
    aria-valuemax={limit}
    aria-valuemin={0}
    aria-roledescription="Slider"
    class="relative flex w-full grow cursor-col-resize items-center py-3"
    onmousedown={onEnter}
    onmouseup={onExit}
    onmousemove={onMove}
    onmouseleave={onExit}
    bind:this={slider}
  >
    <div
      class="bg-soft-200 pointer-events-none relative flex h-[6px] w-full grow justify-start overflow-hidden rounded-full"
    >
      <div
        class="bg-primary-base relative left-[-100%] h-full w-full transition-none"
        style="transform: translateX({positionX}px)"
      ></div>
    </div>

    <div
      class="pointer-events-none absolute left-0 mr-1 flex aspect-square w-[16px] shrink-0 items-center justify-center rounded-full bg-white shadow-md transition-none"
      style="transform:translateX({positionX}px)"
    >
      <div class="bg-primary-base aspect-square w-2 rounded-full"></div>
    </div>
  </div>
{/snippet}
