<script lang="ts" module>
  import Icon from '../../../assets/icon/Icon.svelte';
  
  import type { Component } from 'svelte';

  type Step = {
    label: string;
    icon?: Component;
    [key: string]: any;
  };
  interface Props {
    steps: Step[];
    currentStep: number;
    format: 'inline' | 'col';
    indicator?: 'number' | 'icon';
    click?: boolean;
  }
</script>

<script lang="ts">
  let { steps, indicator = 'number', currentStep = $bindable(), format = 'col', click = false }: Props = $props();

  function changeStep(i: number) {
    if (!click) return;
    currentStep = i + 1;
  }
</script>

{#if format === 'inline'}
  <div class="text-soft-400 flex items-center gap-6">
    {#each steps as st, i}
      {@render step(st, i)}
      {#if i < steps.length - 1}
        <Icon type="arrow-right-s-line" />
      {/if}
    {/each}
  </div>
{:else}
  <div class="text-soft-400 flex flex-col items-center gap-3">
    {#each steps as st, i}
      <button
        onclick={() => changeStep(i)}
        class="data-[current]:bg-weak-50 flex w-full items-center justify-between rounded-[10px] p-2 pr-4"
        data-passed={currentStep > i + 1 ? true : null}
        data-futher={i + 1 > currentStep ? true : null}
        data-current={currentStep === i + 1 ? true : null}
      >
        {#if indicator === 'icon'}
          {@render stepIcon(st, i)}
        {:else}
          {@render step(st, i)}
        {/if}
        {#if i + 1 === currentStep}
          <!-- <SvgCaret
            props={{
              class: 'rotate-[-90deg]',
            }}
          /> -->
        {/if}
      </button>
    {/each}
  </div>
{/if}

{#snippet stepIcon(step: Step, i: number)}
  {@const Icon = step.icon}
  <div
    class="text-strong-950 data-[futher]:text-sub-600 flex items-center gap-4 text-[14px] font-normal"
    data-futher={i + 1 > currentStep ? true : null}
  >
    <div
      class="flex aspect-square w-[20px] items-center justify-center rounded-full text-[12px]"
      data-passed={currentStep > i + 1 ? true : null}
      data-futher={i + 1 > currentStep ? true : null}
      data-current={currentStep === i + 1 ? true : null}
    >
      <Icon />
    </div>

    {step.label}
  </div>
{/snippet}

{#snippet step(step: Step, i: number)}
  <div
    class="text-strong-950 data-[futher]:text-sub-600 flex items-center gap-4 text-[14px] font-normal"
    data-futher={i + 1 > currentStep ? true : null}
  >
    <div
      class="bg-white-0 data-[futher]:text-sub-600 data-[current]:bg-primary-base data-[futher]:border-soft-200 data-[passed]:bg-primary-base flex aspect-square
    w-[20px] items-center justify-center rounded-full border
    border-transparent text-[12px] data-[current]:text-white"
      data-passed={currentStep > i + 1 ? true : null}
      data-futher={i + 1 > currentStep ? true : null}
      data-current={currentStep === i + 1 ? true : null}
    >
      {#if currentStep > i + 1}
        <!-- <SvgCheckMin
          props={{
            width: 11,
            height: 11,
          }}
        /> -->
      {:else}
        {i + 1}
      {/if}
    </div>

    {step.label}
  </div>
{/snippet}
