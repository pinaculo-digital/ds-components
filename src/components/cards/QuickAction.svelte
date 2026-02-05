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

<button
  class="border-soft-200 hover:bg-weak-50 flex w-full items-center justify-between gap-2 overflow-hidden rounded-xl border p-4 pt-2.5 text-start hover:cursor-pointer"
  onclick={action}
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
  <div class="border-soft-200 bg-white-0 flex aspect-square items-center justify-center rounded-lg border">
    <Icon type="arrow-right-s-line" />
  </div>
</button>
