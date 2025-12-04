<script module>
  import Icon from '../../assets/icon/Icon.svelte';

  import type { IconName } from '../../../lib/utils/icons/icons.type';
  import { slide } from 'svelte/transition';

  interface Props {
    onlyOneOpen?: boolean;
    items?: {
      flipIcon?: boolean;
      leftIcon?: IconName;
      label?: string;
      description?: string;
    }[];
  }

  const mock = {
    flipIcon: false,
    label: 'Clique aqui',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  };
</script>

<script lang="ts">
  let { items = Array(10).fill(mock), onlyOneOpen = false }: Props = $props();
  let openItems: number[] = $state([]);

  function toggleAccordion(index: number) {
    if (onlyOneOpen) {
      openItems = openItems[0] === index ? [] : [index];
      return;
    }
    openItems = openItems.includes(index) ? openItems.filter((i) => i !== index) : [...openItems, index];
  }
</script>

<div class="flex w-full flex-col gap-2.5 md:w-96">
  {#each items as { label, leftIcon, description, flipIcon }, i}
    {@const isOpen = openItems.includes(i)}

    <button
      class="border-soft-200 hover:bg-weak-50 hover:border-weak-50 flex w-full cursor-pointer gap-2.5 rounded-[10px] border p-3.5 text-start {isOpen
        ? 'bg-weak-50 border-weak-50'
        : 'bg-white-0'}"
      onclick={() => toggleAccordion(i)}
    >
      {@render handleLeft(isOpen, flipIcon, leftIcon)}
      <div class="flex w-full flex-col gap-1">
        <p class="text-label-small text-strong-950 font-medium">{label}</p>
        {#if isOpen}
          <p class="text-paragraph-small text-sub-600" in:slide={{ duration: 200 }} out:slide={{ duration: 150 }}>
            {description}
          </p>
        {/if}
      </div>
      {#if !flipIcon}
        <Icon
          type={isOpen ? 'subtract-line' : 'add-line'}
          opticalSize={20}
          fillColor={isOpen ? 'neutral-600' : 'neutral-400'}
        />
      {/if}
    </button>
  {/each}
</div>

{#snippet handleLeft(open: boolean, flipIcon?: boolean, leftIcon?: IconName)}
  {#if flipIcon}
    <Icon
      type={open ? 'subtract-line' : 'add-line'}
      opticalSize={20}
      fillColor={open ? 'neutral-600' : 'neutral-400'}
    />
  {:else if leftIcon}
    <Icon type={leftIcon} opticalSize={20} fillColor={'neutral-600'} />
  {/if}
{/snippet}
