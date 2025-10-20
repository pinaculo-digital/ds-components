<!-- <script lang="ts" module>
  import Icon from '$components/assets/icon/Icon.svelte';
  import type { IconName } from '$components/assets/icon/icons.type';

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
</div> -->
