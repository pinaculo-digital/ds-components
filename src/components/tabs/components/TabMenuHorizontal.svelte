<script lang="ts" module>
  import Icon from '../../../assets/icon/Icon.svelte';

  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import type { IconName } from '../../../lib/utils/icons/icons-type.js';
  import { slide } from 'svelte/transition';

  interface Props {
    options: {
      label: string;
      snippetLeft?: IconName;
    }[];
    hasArrow?: boolean;
    labelSelected: string;
  }
  const mockOptions = [{ label: 'Home' }, { label: 'Sobre' }];
</script>

<script lang="ts">
  let { options = mockOptions, labelSelected = $bindable('Home'), hasArrow = true }: Props = $props();

  function getColorText(label: string) {
    return label === labelSelected ? 'text-strong-950' : 'text-sub-600';
  }

  function getColorIcon(label: string): ColorName {
    return label === labelSelected ? 'blue-500' : 'neutral-400';
  }
</script>

<div class="border-soft-200 flex w-full items-start gap-5 border-b px-6">
  {#each options as { label, snippetLeft }}
    <button class="flex flex-col gap-4 font-medium" onclick={() => (labelSelected = label)}>
      <div class="flex items-center gap-1.5">
        {#if snippetLeft}
          <Icon type={snippetLeft} fillColor={getColorIcon(label)} opticalSize={16} />
        {/if}
        <p class="text-label-small font-medium {getColorText(label)}">{label}</p>
        {#if hasArrow}
          <Icon type="arrow-right-s-line" fillColor={'neutral-400'} opticalSize={16} />
        {/if}
      </div>
      {#if label === labelSelected}
        <div class="bg-primary-base h-0.5 w-full" transition:slide={{ axis: 'x' }}></div>
      {/if}
    </button>
  {/each}
</div>
