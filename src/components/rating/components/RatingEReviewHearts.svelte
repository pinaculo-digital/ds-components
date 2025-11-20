<script lang="ts">
  import LinkButton from '../../button/components/LinkButton.svelte';


  interface Props {
    onChange?: (r: number) => void;
    ratingCard?: {
      totalRating: number;
      position: 'bottom' | 'right';
      action: VoidFunction;
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
      totalRating: 0,
      action: () => {},
      reviews: 0,
      ratings: 0,
    },
  }: Props = $props();

  function setRating(heartIndex: number, half: boolean) {
    const newRating = heartIndex + (half ? 0.5 : 1);
    rating = newRating;
    onChange?.(newRating);
  }
</script>

<div class="flex flex-col gap-2">
  <div class="flex items-center select-none">
    {@render hearts()}
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

{#snippet hearts()}
  {#each Array(maxRating) as _, i}
    {@const heartValue = i + 1}
    {@const filled = rating >= heartValue}
    {@const half = rating >= heartValue - 0.5 && rating < heartValue}

    <div class="relative" style="width:{size}px; height:{size}px;">
      <!-- Coração vazio (contorno) -->
      <svg viewBox="0 0 24 24" width={size} height={size} class="text-red-500">
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        />
      </svg>

      <!-- Coração preenchido (clipado para meia nota) -->
      {#if rating > i}
        <div class="absolute inset-0 overflow-hidden" style="width: {filled ? 100 : half ? 50 : (rating - i) * 100}%;">
          <svg viewBox="0 0 24 24" width={size} height={size} class="text-red-500">
            <path
              fill="currentColor"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
        </div>
      {/if}

      <!-- Botões invisíveis para clique (metade esquerda = +0.5, direita = +1) -->
      <div class="absolute inset-0 flex">
        <button class="h-full w-1/2" onclick={() => setRating(i, true)} aria-label={`${i + 0.5} corações`}></button>
        <button
          class="h-full w-1/2"
          onclick={() => setRating(i, false)}
          aria-label={`${i + 1} coração${i + 1 > 1 ? 'es' : ''}`}
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
