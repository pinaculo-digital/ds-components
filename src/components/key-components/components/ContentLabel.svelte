<script lang="ts">
  import type { Snippet } from 'svelte';
  import LinkButton from '../../button/components/LinkButton.svelte';

  interface Props {
    avatar?: Snippet;
    label: string;
    sublabel?: string;
    description?: string;
    linkBtn?: {
      label: string;
      action: VoidFunction;
    };
  }

  let { avatar, label = 'Label aqui', sublabel = 'Sublabel aqui', description = 'Descrição aqui', linkBtn }: Props = $props();
</script>

<div class="flex items-center gap-3">
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
      <LinkButton textColor="blue-200" label={linkBtn.label} click={linkBtn.action} />
    {/if}
  </div>
</div>