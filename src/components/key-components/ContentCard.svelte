<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  import type { Snippet } from 'svelte';

  interface Props {
    action: VoidFunction;
    avatar?: Snippet;
    label: string;
    sublabel?: string;
    description?: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }

  let {
    action,
    avatar,
    label = 'Label aqui',
    sublabel = 'Sublabel aqui',
    description = 'Descrição aqui',
    position = 'bottom-right',
  }: Props = $props();

  const positionsClasses = {
    'top-left': 'top-4 left-4 origin-top-left',
    'top-right': 'top-4 right-4 origin-top-right',
    'bottom-left': 'bottom-4 left-4 origin-bottom-left',
    'bottom-right': 'bottom-4 right-4 origin-bottom-right',
  };
</script>

<div
  class="fixed {positionsClasses[
    position
  ]} border-soft-200 flex w-fit items-center justify-between gap-3.5 overflow-hidden rounded-xl border p-4 text-start"
>
  <div class="flex items-center gap-3">
    {@render avatar?.()}
    <div class="flex w-full flex-col items-start gap-1">
      <div class="flex items-center gap-1">
        <p class="text-label-small text-strong-950">{label}</p>
        {#if sublabel}
          <p class="text-paragraph-x-small text-sub-600">({sublabel})</p>
        {/if}
      </div>
      {#if description}
        <p class="text-paragraph-x-small text-sub-600">{description}</p>
      {/if}
    </div>
  </div>
  <button onclick={action} class="hover:cursor-pointer">
    <Icon type="close-line" opticalSize={20} />
  </button>
</div>
