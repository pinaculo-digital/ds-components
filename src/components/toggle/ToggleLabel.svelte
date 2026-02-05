<script lang="ts">
  import LinkButton from '../buttons/LinkButton.svelte';
  import Toggle from './Toggle.svelte';

  import type { Snippet } from 'svelte';

  interface Props {
    avatar?: Snippet;
    label: string;
    togglePosition?: 'left' | 'right';
    sublabel?: string;
    description?: string;
    active: boolean;
    linkBtn?: {
      label: string;
      action: VoidFunction;
    };
  }

  let {
    avatar,
    label = 'Label aqui',
    sublabel = 'Sublabel aqui',
    description = 'Descrição aqui',
    togglePosition = 'right',
    active = $bindable(false),
    linkBtn,
  }: Props = $props();
</script>

<div class="flex items-center gap-3">
  {#if togglePosition === 'left'}
    <Toggle bind:active />
  {/if}
  {@render avatar?.()}
  <div class="flex w-full flex-col items-start gap-1">
    <div class="flex items-center gap-1">
      <p class="text-label-small text-strong-950">{label}</p>
      {#if sublabel}
        <p class="text-paragraph-x-small text-sub-600">({sublabel})</p>
      {/if}
    </div>
    {#if description}
      <p class="text-paragraph-x-small text-sub-600">{description}</p>
    {/if}
    {#if linkBtn}
      <LinkButton label={linkBtn.label} onClick={linkBtn.action} />
    {/if}
  </div>
  {#if togglePosition === 'right'}
    <Toggle bind:active />
  {/if}
</div>
