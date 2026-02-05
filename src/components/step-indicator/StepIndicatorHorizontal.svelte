<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  interface Props {
    clickable?: boolean;
    currentStep: number;
    steps: string[];
  }

  const stepMocks = ['Step 1', 'Step 2', 'Step 3'];

  let { currentStep = $bindable(0), steps = stepMocks, clickable = false }: Props = $props();

  function checkBorderAndBg(i: number) {
    if (i === currentStep) {
      return 'border-neutral-500 border bg-neutral-500';
    } else if (i < currentStep) {
      return 'bg-transparent';
    } else {
      return 'bg-white-0 border border-soft-200';
    }
  }
</script>

<div class="flex items-center gap-4">
  {#each steps as step, i}
    {@render item(step, i)}
    {#if i < steps.length - 1}
      <Icon type="arrow-right-s-line" opticalSize={24} fillColor={'neutral-400'} />
    {/if}
  {/each}
</div>

{#snippet item(label: string, i: number)}
  <button
    class="flex items-center gap-2 {clickable ? 'cursor-pointer' : ''}"
    onclick={clickable ? () => (currentStep = i + 1) : null}
  >
    <div
      class="flex {i < currentStep
        ? ''
        : 'aspect-square w-5 shrink-0 grow-0 items-center justify-center rounded-full'} {checkBorderAndBg(i)}"
    >
      {#if i < currentStep}
        <div class="-ml-1">
          <Icon type="select-box-circle-fill" opticalSize={24} fillColor="green-500" />
        </div>
      {:else}
        <p class="text-label-x-small {i > currentStep ? 'text-sub-600' : 'text-white-0'}">{i + 1}</p>
      {/if}
    </div>
    <p class="text-strong-950 text-paragraph-small">{label}</p>
  </button>
{/snippet}
