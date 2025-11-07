<script lang="ts">
  import type { MainComponentType } from '../../lib/utils/types.js';


  let { optionSelected, placeholder, isActive, disabled, onClick, hasError }: MainComponentType =
    $props();
</script>

<button
  class="outline-soft-200 data-[active]:border-strong-950 data-[error]:border-error-base focus:border-strong-950 text-sub-600 disabled:text-disabled-300 disabled:bg-weak-50 bg-white-0 flex h-full w-full
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
      {@render icon()}
      <b class="truncate font-medium">{optionSelected.label}</b>
    </div>
  {/if}

  <!-- <SvgCaret
    props={{
      class: `${isActive ? 'rotate-[180deg]' : ''} ${hasSelection ? 'fill-sub-600' : 'fill-soft-400'}`,
      width: 16,
      height: 6,
    }}
  /> -->
</button>

{#snippet icon()}
  {#if optionSelected && !Array.isArray(optionSelected) && optionSelected.icon}
    {#if typeof optionSelected.icon === 'string'}
      <img src={optionSelected.icon} alt="Icone" class="w-[20px]" />
    {:else}
      {@const Componente = optionSelected.icon}
      {@const size = 20}
      <Componente
        props={{
          width: size,
          height: size,
        }}
      />
    {/if}
  {/if}
{/snippet}
