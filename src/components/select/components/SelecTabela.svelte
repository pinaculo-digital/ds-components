<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import { slide } from 'svelte/transition';

  interface Props {
    titulo?: string;
    children?: Snippet;
    pesquisar?: boolean;
  }
</script>

<script lang="ts">
  let { titulo = 'Selecione', children, pesquisar = true }: Props = $props();

  let visibilidade = $state<boolean>(false);

  function click() {
    visibilidade = !visibilidade;
  }
</script>

<div class="relative flex flex-col gap-4">
  <button
    class="border-soft-200 flex items-center justify-between gap-5 rounded-[8px] border px-2.5 py-1.5"
    onclick={() => click()}
  >
    <p class="text-sub-600 text-[14px] font-normal">{titulo}</p>
    <!-- <SetaSelect props={{ class: visibilidade ? 'rotate-180' : '' }} /> -->
  </button>
  {#if visibilidade}
    <div
      class="border-soft-200 bg-white-0 absolute top-0 right-0 z-10 flex w-[300px] translate-y-11 flex-col gap-1 rounded-[8px] border p-1"
      transition:slide={{ duration: 400 }}
    >
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if}
</div>
