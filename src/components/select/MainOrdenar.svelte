<script lang="ts">
  import type { MainComponentType } from '../../lib/utils/types.js';


  let { hasSelection, optionSelected, placeholder, isActive, disabled, onClick }: MainComponentType = $props();
</script>

<button
  class="outline-soft-200 data-[active]:border-strong-950 focus:border-strong-950 text-sub-600 disabled:text-sub-300 disabled:bg-weak-50 bg-white-0 flex h-full w-full grow
items-center justify-between
gap-1 rounded-[8px] border border-transparent
px-2 text-[14px]
font-normal not-disabled:outline
disabled:pointer-events-none"
  onclick={onClick}
  {disabled}
  data-active={isActive ? true : null}
>
  {#if optionSelected === null}
    <span class="flex items-center gap-1 pl-1">
      <!-- <SvgOrdenar /> -->
      Ordenar
    </span>
  {:else if !Array.isArray(optionSelected)}
    <div class="flex items-center gap-4">
      {@render icon()}
      <b class="font-medium">{optionSelected.label}</b>
    </div>
  {/if}

  <!-- <SvgCaret
    props={{
      class: `${isActive ? 'rotate-[180deg]' : ''} ${hasSelection ? 'fill-sub-600' : 'fill-soft-400'}`,
      width: 12,
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
