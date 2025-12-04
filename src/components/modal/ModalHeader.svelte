<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  import type { Snippet } from 'svelte';

  interface Props {
    action: VoidFunction;
    avatar?: Snippet;
    label: string;
    description?: string;
  }

  let { action, avatar, label = 'Label aqui', description = 'Descrição aqui' }: Props = $props();
</script>

<div
  class="border-soft-200 flex w-full items-start justify-between gap-3.5 overflow-hidden border-b px-5 py-4 text-start"
>
  <div class="flex items-center gap-3">
    {@render avatar?.()}
    <div class="flex w-full flex-col items-start gap-1">
      <p class="text-label-small text-strong-950">{label}</p>
      {#if description}
        <p class="text-paragraph-x-small text-sub-600">{description}</p>
      {/if}
    </div>
  </div>
  <button onclick={action} class="hover:cursor-pointer">
    <Icon type="close-line" opticalSize={20} />
  </button>
</div>
