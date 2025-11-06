<script lang="ts" module>
  import type { AnyPrimitive } from '../../../lib/utils/types.js';
  import Check from './Check.svelte';

  interface Props {
    options: {
      label: string;
      subLabel: string;
      descricao: string;
      value: AnyPrimitive;
      tag?: string;
    }[];
    values: AnyPrimitive[];
  }
</script>

<script lang="ts">
  let { options, values = $bindable() }: Props = $props();

  const select = (value: AnyPrimitive) => {
    const jaMarcado = values.some((obj) => obj === value);
    if (jaMarcado) {
      values = values.filter((obj) => obj !== value);
      return;
    }
    values.push(value);
  };
</script>

<div class="flex w-full flex-wrap gap-4">
  {#each options as op}
    {@render checkbox(op.label, op.subLabel, op.descricao, op.tag ?? null, op.value)}
  {/each}
</div>

{#snippet checkbox(label: string, subLabel: string, descricao: string, tag: string | null, value: AnyPrimitive)}
  {@const checked = values.some((obj) => obj === value)}
  {@const styleBtn = checked === true ? 'border-primary-base' : 'border-soft-200'}

  <button
    class="group bg-white-0 hover:bg-weak-50 flex w-full items-start justify-between rounded-[12px] border
	p-4 py-3 {styleBtn} hover:border-transparent"
    onclick={() => select(value)}
  >
    <div class="flex flex-col gap-1">
      <div class="flex flex-wrap items-center gap-4 gap-y-1">
        <b class="text-strong-950 text-[14px] font-medium">{label}</b>
        <span class="text-sub-600 text-[12px] font-normal">{subLabel}</span>
        {#if tag}
          <div
            class="bg-information-light text-information-dark flex rounded-full px-2 py-[2px] text-[11px] leading-3.5"
          >
            {tag}
          </div>
        {/if}
      </div>
      <p class="text-sub-600 text-left text-[12px]">{descricao}</p>
    </div>
    <Check {checked} />
  </button>
{/snippet}
