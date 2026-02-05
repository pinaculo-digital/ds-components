<script lang="ts">
  import banner from '../../lib/utils/banner.svelte.js';
  import Banner from '../banner/Banner.svelte';
  
  import { flySlide } from '../../lib/animations/transitions.js';
  import { quadInOut } from 'svelte/easing';
</script>

<div
  class="pointer-events-none fixed top-0 left-0 z-50 flex h-svh
    w-screen flex-col items-start justify-end overflow-hidden p-3 xl:p-12"
>
  {#each banner.banners as b, i (b.id)}
    {@const easing = quadInOut}
    {@const tema = b.status + '-' + banner.tema}

    <div
      class="my-2 w-full"
      in:flySlide={{ y: 20, duration: 800, easing }}
      out:flySlide={{ x: 1600, duration: 800, easing }}
    >
      <Banner titulo={b.titulo} descricao={b.conteudo} link={b.link} onClose={() => banner.remove(b.id)} {tema} />
    </div>
  {/each}
</div>
