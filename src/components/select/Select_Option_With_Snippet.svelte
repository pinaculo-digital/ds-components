<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';
  import type { OptionComponentType } from '../../lib/utils/types.js';

  let { data, isSelected, onClick }: OptionComponentType = $props();
</script>

<button
  onclick={onClick}
  class="bg-white-0 text-strong-950 flex items-center justify-between border-none p-3 px-2
text-[14px] hover:bg-slate-100 dark:hover:bg-gray-900"
  data-option={data.value}
>
  <div class="flex w-full items-center gap-4 text-center">
    {@render snip()}
    {data.label}
  </div>

  {#if isSelected}
    <Icon type="check-line" fillColor="black" />
  {/if}
</button>

{#snippet snip()}
  {#if data.snippet}
    {@render data.snippet()}
  {/if}
{/snippet}
