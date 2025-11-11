<script lang="ts" module>
</script>

<script lang="ts">
  import type { OptionComponentType } from '../../../lib/utils/types.js';

  let { data, isSelected, onClick }: OptionComponentType = $props();
</script>

<button
  onclick={onClick}
  class="bg-white-0 text-strong-950 flex items-center justify-between gap-8 border-none p-3 px-4 text-[12px] outline-none hover:bg-slate-100 dark:hover:bg-gray-900"
>
  <div class="flex items-center gap-4 font-medium">
    {@render icon()}
    {data.label}
  </div>

  {#if isSelected}
    <!-- <SvgCheckMin props={{ class: 'fill-sub-600 w-[20px]' }} /> -->
  {/if}
</button>

{#snippet icon()}
  {#if data.icon}
    {#if typeof data.icon === 'string'}
      <div class=" flex w-5 flex-grow-0 items-center justify-center overflow-hidden">
        <img src={data.icon} alt="Icone" class="shrink-0 object-cover" />
      </div>
    {:else}
      {@const Componente = data.icon}
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
