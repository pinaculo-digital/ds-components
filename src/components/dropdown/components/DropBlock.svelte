<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import { slide } from 'svelte/transition';
</script>

<script lang="ts">
  interface Props {
    isDrop: boolean;
    className: string;
    children: Snippet;
    divElement?: HTMLDivElement;
  }
  let { isDrop, className = '', children, divElement = $bindable() }: Props = $props();
</script>

<!-- 
  @component
    Utilize esse componente para ter uma animação de drop 
-->

{#if isDrop}
  <div class={className} transition:slide={{ duration: 300 }} bind:this={divElement}>
    {@render children()}
  </div>
{/if}
