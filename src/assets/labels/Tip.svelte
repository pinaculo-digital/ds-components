<script lang="ts">
  let { label, type }: { label: string; type: 'tip' | 'error' } = $props();
  import { slide } from 'svelte/transition';

</script>

<div
  transition:slide|global={{ axis: 'y' }}
  class="flex shrink-0 items-center gap-1 text-[12px] {type === 'tip' ? 'text-sub-600' : 'text-error-base'}"
>
  <!-- <SvgAlerta
    props={{
      class: `${type === 'tip' ? 'fill-soft-400' : 'fill-error-base'} shrink-0`,
      width: 14,
      height: 14,
    }}
  /> -->
  {label}
</div>
