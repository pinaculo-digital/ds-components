<script lang="ts">
  import type { OptionComponentType } from '../../../lib/utils/types.js';

  let { data, isSelected, onClick }: OptionComponentType = $props();
</script>

<button
  onclick={onClick}
  class="bg-white-0 text-strong-950 sk flex items-center justify-between rounded-lg
border-none p-2 text-[14px] hover:bg-slate-100 dark:hover:bg-gray-900"
  data-option={data.value}
>
  <div class="flex w-full items-center gap-4 text-center">
    {@render icon()}
    {data.label}
  </div>

  {#if isSelected}
    <!-- <SvgCheckMin
      props={{
        class: 'fill-black w-[20px]',
        fill: 'black',
      }}
    /> -->
  {/if}
</button>

{#snippet icon()}
  {#if data.icon}
    {#if typeof data.icon === 'string'}
      <img src={data.icon} alt="Icone" class="w-[20px]" />
    {:else}
      {@const Componente = data.icon}
      {@const size = 16}
      <Componente
        props={{
          width: size,
          height: size,
        }}
      />
    {/if}
  {/if}
{/snippet}
