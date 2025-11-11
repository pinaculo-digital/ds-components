<script lang="ts" module>
</script>

<script lang="ts">
  import type { MainComponentType } from '../../../lib/utils/types.js';

  let { hasSelection, optionSelected, placeholder, isActive, disabled, onClick }: MainComponentType = $props();
</script>

<button
  class="text-strong-950 flex h-full w-full max-w-[100px] flex-grow items-center justify-between gap-1 rounded-[8px] bg-transparent
px-2 text-[14px] font-normal disabled:cursor-auto"
  onclick={onClick}
  {disabled}
>
  {#if optionSelected === null}
    <span class="text-sub-600">{placeholder}</span>
  {:else if !Array.isArray(optionSelected)}
    <div class="flex items-center gap-1">
      {@render icon()}
      <b class="font-medium">{optionSelected.label}</b>
    </div>
  {/if}
  {#if !disabled}
    <!-- <SvgCaret
      props={{
        class: `${isActive ? 'rotate-[180deg]' : ''} ${hasSelection ? 'fill-sub-600' : 'fill-soft-400'}`,
        width: 14,
      }}
    /> -->
  {/if}
</button>

{#snippet icon()}
  {#if optionSelected && !Array.isArray(optionSelected) && optionSelected.icon}
    {#if typeof optionSelected.icon === 'string'}
      <div class="flex aspect-square w-6 flex-grow-0 items-center justify-center">
        <img src={optionSelected.icon} alt="Icone" class="shrink-0 object-cover" />
      </div>
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
