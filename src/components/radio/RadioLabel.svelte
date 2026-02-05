<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    selectStyle: 'circle' | 'square';
    selectPosition?: 'left' | 'right';
    description?: string;
    component?: Snippet;
    disabled?: boolean;
    sublabel?: string;
    action?: Function;
    selected: boolean;
    label: string;
  }

  let {
    description = 'Descrição aqui',
    selected = $bindable(false),
    sublabel,
    selectPosition = 'right',
    selectStyle = 'square',
    label = 'Label aqui',
    disabled = false,
    component,
    action,
  }: Props = $props();

  async function select() {
    await action?.();
  }
</script>

<div class="flex flex-col gap-1">
  <button
    onclick={select}
    class="{disabled
      ? 'pointer-events-none opacity-50'
      : ''} hover:bg-weak-50 border-soft-200 flex w-full items-start justify-between gap-3.5 overflow-hidden rounded-xl border p-4 text-start hover:cursor-pointer hover:border-transparent"
  >
    <div class="flex items-start gap-3.5">
      {#if selectPosition === 'left'}
        {@render check()}
      {/if}
      <div class="flex w-full flex-col items-start gap-1">
        <div class="flex items-center gap-1">
          <p class="text-label-small text-strong-950 sk">{label}</p>
          {#if sublabel}
            <p class="text-paragraph-x-small text-sub-600 sk">({sublabel})</p>
          {/if}
        </div>
        {#if description}
          <p class="text-paragraph-x-small text-sub-600 sk">{description}</p>
        {/if}
      </div>
    </div>
    {#if selectPosition === 'right'}
      {@render check()}
    {/if}
  </button>
  {@render component?.()}
</div>

{#snippet check()}
  <div class="mt-1.25 hover:cursor-pointer">
    {#if selectStyle === 'circle'}
      {#if selected}
        <div class="bg-white-0 sk border-primary-darker aspect-square w-3 rounded-full border-3"></div>
      {:else}
        <div class="bg-white-0 sk aspect-square w-3 rounded-full border-1 border-neutral-500"></div>
      {/if}
    {:else}
      <div class="relative">
        <input
          type="checkbox"
          checked={selected}
          {disabled}
          class="bg-white-0 sk checked:bg-primary-base border-soft-200 [&:checked::after]:text-white-0 [&:checked::after]:text-label-x-small h-3.5 w-3.5 appearance-none rounded border
    shadow [&:checked::after]:absolute [&:checked::after]:top-1/2 [&:checked::after]:left-1/2 [&:checked::after]:-translate-x-1/2 [&:checked::after]:-translate-y-1/2 [&:checked::after]:text-[0.55rem] [&:checked::after]:content-['✔']"
        />
      </div>
    {/if}
  </div>
{/snippet}
