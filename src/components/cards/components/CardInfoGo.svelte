<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import Icon from '../../../assets/icon/Icon.svelte';

  interface Props {
    children?: Snippet;
    label: string;
    desc: string;
    action: VoidFunction;
  }
</script>

<script lang="ts">
  let { children, label, desc, action }: Props = $props();
</script>

<div class="border-soft-200 flex w-full items-center justify-between rounded-[16px] border p-4">
  <div class="flex items-center gap-3">
    {@render children?.()}
    <div class="flex flex-col">
      <b class="text-[14px] font-medium">{label}</b>
      <span class="text-[11px]">{desc}</span>
    </div>
  </div>

  <button class="p-3" onclick={action}>
    <Icon type="arrow-right-s-line" opticalSize={16} />
  </button>
</div>
