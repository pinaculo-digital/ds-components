<script lang="ts" module>
  interface Opcao {
    label: string;
    quantidade?: number | undefined;
    id: number;
  }

  interface Props {
    opcoes?: Opcao[];
    click?: VoidFunction;
  }
</script>

<script lang="ts">
  const opcoesPadrao = [
    {
      label: 'All',
      id: 1,
    },
    {
      label: 'Inbox',
      quantidade: 2,
      id: 2,
    },
    {
      label: 'Following',
      id: 3,
    },
  ];

  const onClick = () => {};

  let { opcoes = opcoesPadrao, click = onClick }: Props = $props();

  let itemAtivo: number | null = $state(0);

  function toggleAccordion(index: number) {
    itemAtivo = itemAtivo === index ? null : index;
    click();
  }

  function formatarQuantidade(qtd: number) {
    let quantidade = qtd < 10 ? '0' + qtd : qtd;

    return quantidade;
  }
</script>

<div class="flex w-full items-center justify-between">
  <div class="flex gap-3 md:gap-5">
    {#each opcoes as { label, quantidade, id }, i}
      <button
        class="flex items-center justify-center text-[14px] font-medium {itemAtivo === i
          ? 'text-strong-950'
          : 'text-sub-600'} relative gap-1"
        onclick={() => toggleAccordion(i)}
      >
        {label}
        {#if quantidade}
          <span class="bg-error-base text-static-white shrink-0 rounded-full px-1 py-0.5 text-[11px]"
            >{formatarQuantidade(quantidade)}</span
          >
        {/if}
        {#if itemAtivo === i}
          <span class="bg-primary-base absolute top-[38px] h-0.5 w-4"></span>
        {/if}
      </button>
    {/each}
    <button class="text-sub-600 border-soft-200 border-l pl-3 text-[14px] font-medium md:pl-5"> Archived </button>
  </div>
  <button>
    <!-- <SvgCompacto /> -->
  </button>
</div>
