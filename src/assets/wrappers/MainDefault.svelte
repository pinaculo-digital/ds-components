<script lang="ts">
  import { is } from 'zod/v4/locales';
  import Icon from '../icon/Icon.svelte';
  import type { MainComponentType } from '../../lib/utils/types.js';

  let { hasSelection, optionSelected, placeholder, isActive, disabled, hasError, onClick, icon }: MainComponentType =
    $props();
</script>

<button
  class="text-label-small outline-soft-200 data-[active]:border-strong-950 data-[error]:border-error-base focus:border-strong-950 text-sub-600 disabled:text-disabled-300 disabled:bg-weak-50
  bg-white-0 flex
  h-9.5 w-full min-w-[110px]
  grow items-center justify-between
  gap-2 overflow-hidden rounded-lg
  border border-transparent not-disabled:outline disabled:pointer-events-none lg:min-w-30"
  data-error={hasError ? true : null}
  onclick={onClick}
  {disabled}
  data-active={isActive ? true : null}
>
  {#if icon}
    <div class="pl-2">
      <Icon type={icon} fillColor="neutral-400" opticalSize={20} />
    </div>
  {/if}
  {#if optionSelected === null}
    <span class="px-3 py-2.5">{placeholder}</span>
  {:else if !Array.isArray(optionSelected)}
    <div class="flex w-2 grow items-center gap-2 overflow-hidden">
      {@render iconSnippet()}
      <b class="truncate px-3 py-2.5 font-medium">{optionSelected.label}</b>
    </div>
  {/if}
  <div class="px-3 py-2.5">
    <Icon
      type={isActive ? 'arrow-up-s-line' : 'arrow-down-s-line'}
      opticalSize={16}
      fillColor={hasSelection ? 'neutral-600' : 'neutral-400'}
    />
  </div>
</button>

{#snippet iconSnippet()}
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
