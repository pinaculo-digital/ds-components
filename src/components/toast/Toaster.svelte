<script lang="ts" module>
  import toast from '../../lib/utils/toast.svelte.js';
  import Icon from '../../assets/icon/Icon.svelte';

  import { flySlide } from '../../lib/animations/transitions.js';
  import { quadInOut } from 'svelte/easing';
</script>

<script lang="ts">
  let isStandart = $derived(toast.tema === 'standart');
  const getColor = (status: string) => {
    if (isStandart) {
      return 'bg-white-0';
    }
    if (status === 'neutral') {
      return 'bg-information-base';
    }
    if (status === 'error') {
      return 'bg-error-base';
    }
    if (status === 'alert') {
      return 'bg-warning-base';
    }
    if (status === 'success') {
      return 'bg-success-base';
    }
  };
</script>

<div
  class="pointer-events-none fixed left-0 top-0 z-50 flex h-svh
    w-screen flex-col items-end justify-end overflow-hidden p-3 xl:p-12"
>
  {#each toast.toasts as t, i (t.id)}
    {@const easing = quadInOut}
    {@const tamanho = 20}
    <div
      class="text-body-lg text-static-white pointer-events-auto relative mb-2 flex flex-shrink-0 flex-row
        items-center gap-3 rounded-[12px] px-4 py-4 font-semibold shadow-xl
        {getColor(t.status)} overflow-hidden"
      in:flySlide={{ y: 20, duration: 800, easing }}
      out:flySlide={{ x: 1600, duration: 800, easing }}
    >
      <div class="flex h-full items-start">
        {@render iconToast(tamanho, t)}
      </div>

      <div class="flex max-w-[280px] flex-col gap-1 overflow-hidden">
        <h2 class="text-[14px] leading-4 {isStandart ? 'text-strong-950' : 'text-white'} font-semibold">
          {@html t.titulo}
        </h2>
        <p class="text-[14px] font-normal {isStandart ? 'text-sub-600' : 'text-white'} leading-4.5 break-words">
          {@html t.conteudo}
        </p>
      </div>

      <div class="pointer-events-auto relative flex h-full flex-shrink-0 items-start justify-start">
        <button class="pointer-events-auto flex-grow-0 hover:cursor-pointer" onclick={() => toast.remove(t.id)}>
          <Icon type="close-line" fillColor={isStandart ? 'black' : 'white'} opticalSize={20} />
        </button>
      </div>

      <div
        class="progress-animation absolute h-1 w-full origin-left
          {isStandart ? 'bg-static-black dark:bg-static-white' : 'bg-static-white'}
           bottom-0 left-0"
        style="animation-duration:{t.duracao}ms"
      ></div>
    </div>
  {/each}
</div>

{#snippet iconToast(tamanho: 20, t: (typeof toast.toasts)[0])}
  {#if t.status === 'neutral'}
    <Icon type="information-fill" fillColor={isStandart ? 'blue-500' : 'white'} opticalSize={tamanho} />
  {:else if t.status === 'success'}
    <Icon type="select-box-circle-fill" fillColor={isStandart ? 'green-500' : 'white'} opticalSize={tamanho} />
  {:else if t.status === 'alert'}
    <Icon type="alert-fill" fillColor={isStandart ? 'yellow-500' : 'white'} opticalSize={tamanho} />
  {:else if t.status === 'error'}
    <Icon type="error-warning-fill" fillColor={isStandart ? 'red-500' : 'white'} opticalSize={tamanho} />
  {/if}
{/snippet}

<style>
  .progress-animation {
    animation: progresso linear normal forwards;
  }

  @keyframes progresso {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
</style>
