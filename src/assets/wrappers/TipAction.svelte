<script lang="ts" module>
  import { resize } from 'svelte-resize-observer-action';
  import { expoInOut } from 'svelte/easing';
  import { scale } from 'svelte/transition';

  interface Props {
    tip: string;
    visible?: boolean;
    father: Element;
    posTri?: 'top-middle' | 'top-left' | 'top-right' | 'bottom-middle' | 'bottom-left' | 'bottom-right';
  }
</script>

<script lang="ts">
  let { tip, visible, father, posTri = 'top-right' }: Props = $props();

  let x = $state<number>(0);
  let y = $state<number>(0);

  let containerSize = $state({
    width: 0,
    height: 0,
  });

  $effect(() => {
    if (visible) getPos();
  });

  function getPos() {
    if (!father && containerSize.width === 0) return;

    const rect = father.getBoundingClientRect();

    if (posTri.includes('top')) {
      x = rect.left + rect.width / 2 - containerSize.width / 2;
      y = rect.top + rect.height + 15;
    }

    if (posTri.includes('bottom')) {
      x = rect.left + rect.width / 2 - containerSize.width / 2;
      y = rect.top - containerSize.height - 15;
    }
  }

  const trianguloPosition = () => {
    const middleTriangle = 4;
    const heightTriangle = 8;

    if (posTri === 'top-middle') {
      return {
        top: -heightTriangle + 'px',
        left: containerSize.width / 2 + middleTriangle + 'px',
      };
    }
    if (posTri === 'top-left') {
      return {
        top: -heightTriangle + 'px',
        left: middleTriangle * 2 + 'px',
      };
    }
    if (posTri === 'top-right') {
      return {
        top: -heightTriangle + 'px',
        left: containerSize.width - middleTriangle * 2 + 'px',
      };
    }
    if (posTri === 'bottom-middle') {
      return {
        top: containerSize.height + heightTriangle - 6 + 'px',
        left: containerSize.width / 2 + middleTriangle + 'px',
      };
    }
    if (posTri === 'bottom-left') {
      return {
        top: containerSize.height + heightTriangle - 6 + 'px',
        left: middleTriangle * 2 + 'px',
      };
    }
    if (posTri === 'bottom-right') {
      return {
        top: containerSize.height + heightTriangle - 6 + 'px',
        left: containerSize.width + 'px',
      };
    }
  };
</script>

{#if visible && window.innerWidth > 600}
  <div
    class="pointer-events-none absolute z-50 origin-bottom"
    transition:scale={{ duration: 500, easing: expoInOut }}
    style="left:{x}px; top:{y}px;"
  >
    <div
      use:resize={(entry) => {
        containerSize.width = entry.contentRect.width;
        containerSize.height = entry.contentRect.height;
      }}
      class="
        bg-strong-950 text-white-0 not-dark:border-soft-200 relative max-w-[300px] rounded-[8px] border p-[2px] px-2 text-center
        text-[12px] font-semibold dark:border-transparent
        "
    >
      {@render triangulo()}
      {tip}
    </div>
  </div>
{/if}

{#snippet triangulo()}
  {@const top = trianguloPosition()?.top}
  {@const left = trianguloPosition()?.left}
  <div
    class="triangle bg-strong-950 absolute {posTri.includes('bottom') && 'rotate-180'} "
    style="top:{top};left:{left};"
  ></div>
{/snippet}

<style>
  /**
 * How to make 3-corner-rounded triangle in CSS (SO)
 * http://stackoverflow.com/q/14446677/1397351
 */
  .triangle {
    text-align: left;
  }
  .triangle:before,
  .triangle:after {
    content: '';
    position: absolute;
    background-color: inherit;
  }
  .triangle,
  .triangle:before,
  .triangle:after {
    width: 8px;
    height: 8px;
    border-top-right-radius: 30%;
  }

  .triangle {
    transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
  }
  .triangle:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
  }
  .triangle:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
</style>
