<script lang="ts">
  import LinkButton from '../../button/components/LinkButton.svelte';


  interface Props {
    onChange?: (r: number) => void;
    ratingCard?: {
      position: 'bottom' | 'right';
      action: VoidFunction;
      totalRating: number;
      reviews: number;
      ratings: number;
    };
    maxRating?: number;
    rating: number;
    size?: number;
  }

  let {
    rating = $bindable(0),
    size = 20,
    onChange,
    maxRating = 5,
    ratingCard = {
      position: 'right',
      action: () => {},
      totalRating: 0,
      reviews: 0,
      ratings: 0,
    },
  }: Props = $props();

  function setRating(starIndex: number, half: boolean) {
    const newRating = starIndex + (half ? 0.5 : 1);
    rating = newRating;
    onChange?.(newRating);
  }
</script>

<div class="flex flex-col gap-2">
  <div class="flex items-center select-none">
    {@render stars()}
    {#if ratingCard && ratingCard.position === 'right'}
      <div class="ml-3">
        {@render ratingInfo()}
      </div>
    {/if}
  </div>
  {#if ratingCard && ratingCard.position === 'bottom'}
    {@render ratingInfo()}
  {/if}
</div>

{#snippet stars()}
  {#each Array(maxRating) as _, i}
    {@const starValue = i + 1}
    {@const filled = rating >= starValue}
    {@const half = rating >= starValue - 0.5 && rating < starValue}

    <div class="relative" style="width:{size}px; height:{size}px;">
      <svg viewBox="0 0 24 24" width={size} height={size} class="text-yellow-500">
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 18.56l-6.18 3.44L7 14.14l-5-4.87 6.91-1.01L12 2z"
        />
      </svg>

      {#if i < rating}
        <div class="absolute inset-0 overflow-hidden" style="width: {filled ? 100 : half ? 50 : (rating - i) * 100}%;">
          <svg viewBox="0 0 24 24" width={size} height={size} class="text-yellow-500">
            <path
              fill="currentColor"
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 18.56l-6.18 3.44L7 14.14l-5-4.87 6.91-1.01L12 2z"
            />
          </svg>
        </div>
      {/if}

      <div class="absolute inset-0 flex">
        <button class="h-full w-1/2" onclick={() => setRating(i, true)} aria-label={`${i + 0.5} estrelas`}></button>
        <button
          class="h-full w-1/2"
          onclick={() => setRating(i, false)}
          aria-label={`${i + 1} estrela${i + 1 > 1 ? 's' : ''}`}
        ></button>
      </div>
    </div>
  {/each}
{/snippet}

{#snippet ratingInfo()}
  {#if ratingCard}
    {@const { totalRating, reviews, ratings, action } = ratingCard}
    <div class="flex items-center gap-2">
      <p class="text-strong-950 text-paragraph-small">{totalRating} ∙ {ratings} avaliações</p>
      <LinkButton label="{reviews} avaliações" click={action} underline={true} />
    </div>
  {/if}
{/snippet}
