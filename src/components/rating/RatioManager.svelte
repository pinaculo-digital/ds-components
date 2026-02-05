<script lang="ts" module>
  import Icon from '../../assets/icon/Icon.svelte';
  import Ratio from './Ratio.svelte';

  import type { IconName } from '../../lib/utils/icons/icons.type.js';
  import type { Snippet } from 'svelte';

  type AnyPrimitive = number | boolean | string | undefined;

  interface Props {
    options: {
      label: string;
      subLabel?: string;
      descricao: string;
      value: AnyPrimitive;
      tag?: string;
      icon?: IconName;
      LeftSnippet?: Snippet;
    }[];
    value: AnyPrimitive;
  }
</script>

<script lang="ts">
  let { options, value = $bindable() }: Props = $props();

  const select = (v: AnyPrimitive) => {
    value = v;
  };
</script>

<div class="flex w-full flex-wrap gap-4">
  {#each options as op}
    {@render checkbox(op.label, op.icon, op.subLabel ?? '', op.descricao, op.tag ?? null, op.value, op.LeftSnippet)}
  {/each}
</div>

{#snippet checkbox(
  label: string,
  icon: IconName | undefined,
  subLabel: string,
  descricao: string,
  tag: string | null,
  v: AnyPrimitive,
  leftSnippet: Snippet | undefined
)}
  {@const checked = v === value}
  {@const styleBtn = checked === true ? 'border-primary-base' : 'border-soft-200'}
  <button
    class="bg-white-0 hover:bg-weak-50 flex w-full items-start justify-between rounded-[12px] border
	p-4 py-3 {styleBtn} group hover:border-transparent"
    onclick={() => select(v)}
  >
    <div class="flex flex-wrap items-center gap-4 gap-y-1">
      <div class="flex items-start gap-4 gap-y-1">
        {#if leftSnippet}
          {@render leftSnippet()}
        {/if}
        {#if icon}
          <Icon type={icon} opticalSize={24} />
        {/if}
        <div class="flex flex-col">
          <div class="flex items-center">
            <b class="text-strong-950 text-[14px] font-medium">{label}</b>
            {#if subLabel}
              <span class="text-sub-600 text-[12px] font-normal">{subLabel}</span>
            {/if}
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
      </div>
    </div>
    <Ratio {checked} />
  </button>
{/snippet}
