<script lang="ts" module>
  interface Props {
    description: 'Este componente mostra o caminho de navegação, como o page ele busca o caminho da página atual. E com o goto ele redireciona para a página desejada.';
  }
</script>

<script lang="ts">
  const url = new URL(window.location.href);
  let rotas = $derived.by(() => {
    const pagina = url.href;
    const tmp = pagina.split('/').slice(1, 99999);
    let rotasTmp = tmp.map((obj) => {
      return {
        link: obj,
        rota: obj,
      };
    });
    let cumulador = '';
    for (let i in rotasTmp) {
      cumulador += '/' + rotasTmp[i].link;

      rotasTmp[i].link = cumulador;
    }
    return rotasTmp;
  });
</script>

<div class="text-sub-600 flex items-center gap-4 text-[14px] font-medium">
  <div class="flex items-center gap-3">
    {#each rotas as rota, i}
      <button class={rota.link === url.pathname ? 'text-strong-950' : ''} onclick={() => window.location.replace(rota.link)}>
        {rota.rota}
      </button>
      {#if i < rotas.length - 1}
        /
      {/if}
    {/each}
  </div>
</div>
