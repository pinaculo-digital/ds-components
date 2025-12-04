<script lang="ts">
  import Badge from '../badge/Badge.svelte';
  import Toggle from './Toggle.svelte';

  import type { Snippet } from 'svelte';

  interface Props {
    action: VoidFunction;
    avatar?: Snippet;
    label: string;
    sublabel?: string;
    tag?: string;
    description?: string;
    checked?: boolean;
  }

  let {
    action,
    avatar,
    checked = false,
    label = 'Label aqui',
    sublabel = 'Sublabel aqui',
    tag = 'New',
    description = 'Descrição aqui',
  }: Props = $props();
</script>

<div
  class="border-soft-200 flex w-full items-start justify-between gap-3.5 overflow-hidden rounded-xl border p-4 text-start"
>
  <div class="flex items-center gap-3">
    {@render avatar?.()}
    <div class="flex w-full flex-col items-start gap-1">
      <div class="flex items-center gap-1">
        <p class="text-label-small text-strong-950">{label}</p>
        {#if sublabel}
          <p class="text-paragraph-x-small text-sub-600">({sublabel})</p>
        {/if}
        {#if tag}
          <Badge label={tag} theme="blue-300" />
        {/if}
      </div>
      {#if description}
        <p class="text-paragraph-x-small text-sub-600">{description}</p>
      {/if}
    </div>
  </div>
  <Toggle onClick={action} active={checked} />
</div>
