<script lang="ts" module>
  interface Props {
    onSelecionarPagina: VoidFunction;
    pagina: number;
    totalPaginas: number;
  }
</script>

<script lang="ts">
  let { onSelecionarPagina, pagina, totalPaginas }: Props = $props();

  const proxima = () => {
    if (pagina < totalPaginas) {
      irPara(pagina + 1);
    }
  };
  const anterior = () => {
    if (pagina > 1) {
      irPara(pagina - 1);
    }
  };

  const primeiraPagina = () => {
    irPara(1);
  };

  const ultimaPagina = () => {
    irPara(totalPaginas);
  };

  const irPara = (p: number) => {
    pagina = p;
    onSelecionarPagina();
  };
</script>

<div class="flex items-center gap-4">
  <button onclick={primeiraPagina}>
    <!-- <DuplaSetaPaginacaoSvg /> -->
  </button>

  <button onclick={anterior}>
    <!-- <SetaPaginacaoSvg /> -->
  </button>

  <div class="flex items-center gap-4">
    {@render paginas()}
  </div>

  <button class="rotate-180" onclick={proxima}>
    <!-- <SetaPaginacaoSvg /> -->
  </button>

  <button class="rotate-180" onclick={ultimaPagina}>
    <!-- <DuplaSetaPaginacaoSvg /> -->
  </button>
</div>

{#snippet paginas()}
  {@const limite = 1}

  {#each { length: totalPaginas } as _, i}
    {@const paginaAtual = i + 1}
    {#if paginaAtual >= pagina - limite && paginaAtual <= pagina + limite}
      <button
        onclick={() => {
          pagina = paginaAtual;
          onSelecionarPagina();
        }}
        class="not-data-[ativo]:border-soft-200 data-[ativo]:bg-weak-50 data-[ativo]:border-weak-50 text-sub-600 rounded-[8px] border p-1.5 text-[14px] font-medium"
        data-ativo={pagina == paginaAtual ? true : null}
      >
        <span class="inline-block h-5 w-5">{paginaAtual}</span>
      </button>
    {/if}
  {/each}

  {#if totalPaginas > pagina + limite}
    <div
      class="border-soft-200 text-sub-600 aspect-square w-[34px] shrink-0 rounded-[8px] border p-1.5 text-center text-[14px] font-medium"
    >
      ...
    </div>
    <button
      onclick={() => {
        pagina = totalPaginas;
        onSelecionarPagina();
      }}
      class="not-data-[ativo]:border-soft-200 data-[ativo]:bg-weak-50 data-[ativo]:border-weak-50 text-sub-600 rounded-[8px] border p-1.5 text-[14px] font-medium"
      data-ativo={pagina == totalPaginas ? true : null}
    >
      <span class="inline-block h-5 w-5">{totalPaginas}</span>
    </button>
  {/if}
{/snippet}
