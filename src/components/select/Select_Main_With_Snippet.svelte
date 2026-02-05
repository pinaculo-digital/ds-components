<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';
  import type { MainComponentType } from '../../lib/utils/types.js';

  let { optionSelected, placeholder, isActive, disabled, hasError, onClick }: MainComponentType = $props();
</script>

<button
  class="outline-soft-200 data-[active]:border-strong-950 data-[error]:border-error-base focus:border-strong-950 text-sub-600 disabled:text-sub-300 disabled:bg-weak-50 bg-white-0 flex h-full w-full
grow items-center
justify-between gap-4 overflow-hidden rounded-[10px] border
border-transparent px-6 py-2.5
text-[14px] font-normal not-disabled:outline
disabled:pointer-events-none"
  data-error={hasError ? true : null}
  onclick={onClick}
  {disabled}
  data-active={isActive ? true : null}
>
  {#if optionSelected === null}
    <span class="">{placeholder}</span>
  {:else if !Array.isArray(optionSelected)}
    <div class="flex w-2 grow items-center gap-4 overflow-hidden">
      {@render snip()}
      <b class="truncate font-medium">{optionSelected.label}</b>
    </div>
  {/if}

  <Icon type="arrow-down-s-line" fillColor="neutral-600" />
</button>

{#snippet snip()}
  {#if optionSelected && !Array.isArray(optionSelected) && optionSelected.snippet}
    {@render optionSelected.snippet()}
  {/if}
{/snippet}
