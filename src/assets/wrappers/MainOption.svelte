<script lang="ts">
  import type { OptionComponentType } from '../../lib/utils/types.js';
  import Icon from '../icon/Icon.svelte';
  import themeManager from '../settings/theme.svelte.js';

  let { data, isSelected, onClick }: OptionComponentType = $props();
</script>

<button
  onclick={onClick}
  class="bg-white-0 text-strong-950 flex items-center justify-between border-none p-3 px-2
text-[14px] not-dark:hover:bg-slate-100 dark:hover:bg-gray-900"
  data-option={data.value}
>
  <div class="flex w-full items-center gap-2 text-start">
    {@render icon()}
    {data.label}
  </div>

  {#if isSelected}
    <Icon type="check-line" opticalSize={20} fillColor={themeManager.theme === 'dark' ? 'white' : 'black'} />
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
