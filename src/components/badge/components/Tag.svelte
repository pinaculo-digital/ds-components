<script lang="ts" module>
  import { slide } from 'svelte/transition';

  interface Props {
    tag: string;
    onClick: (tag: string) => void;
    dismissIcon?: boolean;
  }
</script>

<script lang="ts">
  let { tag = $bindable(), onClick, dismissIcon = true }: Props = $props();
</script>

<span
  class="text-sub-600 label-xs ring-soft-200 hover:bg-weak-50 mr-2 flex
         items-center gap-1 overflow-hidden rounded-md py-1 pr-1 pl-2
         leading-5 whitespace-nowrap ring-1 transition ring-inset hover:ring-0"
  transition:slide={{ axis: 'x' }}
>
  {tag}
  {#if dismissIcon}
    <button class="p-1" onclick={() => onClick(tag)}>
      <!-- <SvgX props={{ class: 'fill-sub-600' }} /> -->
    </button>
  {/if}
</span>
