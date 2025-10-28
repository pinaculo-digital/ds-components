<script lang="ts" module>
  interface Props {
    rating: number;
  }
</script>

<script lang="ts">
  let { rating = $bindable(2) }: Props = $props();

  let ratingHover = $state<number>(-1);

  const mouseOver = (e: MouseEvent, i: number) => {
    const target = e.target as HTMLButtonElement;
    if (e.offsetX > target.getBoundingClientRect().width / 2) {
      ratingHover = i;
    } else {
      ratingHover = i - 0.5;
    }
  };

  const onClick = (e: MouseEvent) => {
    rating = ratingHover;
  };
</script>

<div class="flex flex-col">
  <div
    role="complementary"
    class="flex items-center"
    onmouseleave={() => {
      ratingHover = -1;
    }}
  >
    {#each { length: 5 } as _, i}
      <button
        class="px-1"
        role="menuitem"
        onfocus={() => {}}
        onclick={onClick}
        onmousemove={(e) => mouseOver(e, i + 1)}
      >
        {#if ratingHover !== -1 ? ratingHover >= i + 1 : rating >= i + 1}
          <!-- <SvgStar /> -->
        {:else if ratingHover !== -1 ? ratingHover === i + 0.5 : rating === i + 0.5}
          <!-- <SvgHalfStart /> -->
        {:else}
          <!-- <SvgStar
            props={{
              fill: 'none',
              stroke: '#F6B51E',
            }}
          /> -->
        {/if}
      </button>
    {/each}
  </div>
</div>
