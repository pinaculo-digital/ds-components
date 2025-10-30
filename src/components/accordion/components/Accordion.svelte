<script lang="ts" module>
  import Icon from '../../../assets/icon/Icon.svelte';
  import { IconName } from '../../../lib/utils/icons/icons-type.js';

  interface Props {
    leftIcon?: IconName;
    opcoes: {
      closeIcon?: IconName;
      openIcon?: IconName;
      label: string;
      texto: string;
    }[];
    onClick?: VoidFunction;
  }
</script>

<script lang="ts">
  let { opcoes, onClick, leftIcon }: Props = $props();

  let itemAberto: number | null = $state(null);

  function toggleAccordion(index: number) {
    itemAberto = itemAberto === index ? null : index;
    onClick?.();
  }
</script>

<!-- <div class="flex w-full flex-col gap-4.5 md:w-96">
  {#each opcoes as { icon, label, texto }, i}
    {@const isOpen = itemAberto === i}
    <button
      class="flex w-full items-center rounded-xl p-3.5 text-left {isOpen
        ? 'bg-weak-50 border-none'
        : 'border-soft-200 bg-white-0 border'}"
      onclick={() => toggleAccordion(i)}
    >
      <div class="flex w-full items-center justify-between gap-4.5">
        <div class="flex {isOpen ? 'items-start' : 'items-center'} gap-4.5">
          <div class={isOpen ? 'mt-1' : ''}>
            <Icon type={leftIcon || 'question-line'} opticalSize={16} />
          </div>
          <div class="flex flex-col gap-1.5">
            <p class="text-strong-950 text-[14px] font-medium">{label}</p>
            {#if isOpen}
              <span class="text-sub-600 text-[14px] font-normal">{texto}</span>
            {/if}
          </div>
        </div>
        {#if icon}
          <div class="flex items-start justify-start {isOpen ? 'mt-1' : ''}">
            <Icon type={icon} opticalSize={16} />
          </div>
        {/if}
      </div>
    </button>
  {/each}
</div> -->

<div class="flex w-full flex-col gap-4.5 md:w-96">
  {#each opcoes as { closeIcon, openIcon, label, texto }, i}
    {@const isOpen = itemAberto === i}
    <button
      class="flex flex-col gap-3 rounded-xl p-3.5 {isOpen
        ? 'bg-weak-50 border-none'
        : 'border-soft-200 bg-white-0 border'}"
      onclick={() => toggleAccordion(i)}
    >
      <div class="flex justify-between">
        <div class="flex items-center gap-3">
          <Icon type={leftIcon || 'question-line'} opticalSize={16} />
          <p class="text-label-small text-strong-950 font-medium">{label}</p>
        </div>
        {#if closeIcon && !isOpen}
          <Icon type={closeIcon} opticalSize={16} />
        {:else if openIcon && isOpen}
          <Icon type={openIcon} opticalSize={16} />
        {/if}
      </div>
      {#if isOpen}
        <div class="ml-7 flex items-start">
          <p class="text-paragraph-small text-sub-600">{texto}</p>
        </div>
      {/if}
    </button>
  {/each}
</div>
