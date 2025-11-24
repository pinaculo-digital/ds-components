<script lang="ts" module>
  import Badge from '../../badge/components/Badge.svelte';
  import Check from './Check.svelte';

  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import type { AnyPrimitive } from '../../../lib/utils/types.js';
  import LinkButton from '../../button/components/LinkButton.svelte';

  interface Option {
    img?: string;
    label: string;
    subLabel: string;
    description: string;
    value: AnyPrimitive;
    tag?: string;
    tagColor?: ColorName;
    linkBtn?: {
      label: string;
      action: VoidFunction;
    };
  }

  interface Props {
    options: {
      img?: string;
      label: string;
      subLabel: string;
      description: string;
      value: AnyPrimitive;
      tag?: string;
      tagColor?: ColorName;
      linkBtn?: {
        label: string;
        action: VoidFunction;
      };
    }[];
    values: AnyPrimitive[];
  }
</script>

<script lang="ts">
  const opt = [
    {
      img: 'https://via.placeholder.com/150',
      label: 'Check 1',
      subLabel: 'Sublabel 1',
      description: 'Descrição 1',
      value: 'check1',
      tag: 'Tag 1',
    },
    {
      label: 'Check 2',
      subLabel: 'Sublabel 2',
      description: 'Descrição 2',
      value: 'check2',
    },
    {
      label: 'Check 3',
      subLabel: 'Sublabel 3',
      description: 'Descrição 3',
      value: 'check3',
    },
  ];
  let { options = opt, values = $bindable([]) }: Props = $props();

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
    {@render checkbox(op)}
  {/each}
</div>

{#snippet checkbox(option: Option)}
  {@const { img, label, subLabel, description, value, tag, tagColor, linkBtn } = option}
  {@const checked = values.some((obj) => obj === value)}

  <button
    class="group bg-white-0 hover:bg-weak-50 flex w-full items-start justify-between rounded-[12px]
	p-4 py-3"
    onclick={() => select(value)}
  >
    <div class="flex items-center gap-3">
      {#if img}
        <div class="bg-weak-50 aspect-square w-10 overflow-hidden">
          <img src={img} alt="" />
        </div>
      {/if}
      <div class="flex flex-col gap-1">
        <div class="flex flex-wrap items-center gap-4 gap-y-1">
          <b class="text-strong-950 text-label-small">{label}</b>
          <span class="text-sub-600 text-paragraph-x-small">{subLabel}</span>
          {#if tag}
            <Badge theme={tagColor ?? 'blue-200'} label={tag}/>
          {/if}
        </div>
        {#if description}
          <p class="text-sub-600 text-paragraph-x-small text-left">{description}</p>
        {/if}
        {#if linkBtn}
          <LinkButton textColor="blue-200" label={linkBtn.label} click={linkBtn.action} />
        {/if}
      </div>
    </div>
    <Check {checked} />
  </button>
{/snippet}
