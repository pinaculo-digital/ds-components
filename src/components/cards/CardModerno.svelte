<script lang="ts" module>
  import Icon from '../../assets/icon/Icon.svelte';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';

  interface Props {
    label?: string;
    icon?: IconName;
    onClick: VoidFunction;
  }
</script>

<script lang="ts">
  let { label = 'Exemplo', onClick, icon }: Props = $props();
</script>

<button
  onclick={onClick}
  class="text-sub-600 hover:text-disabled-300 bg-weak-50 hover:bg-strong-950 group flex
h-[144px] w-[144px] flex-shrink-0 flex-col items-center justify-center gap-4 rounded-md text-lg font-normal"
>
  {#if icon}
    <Icon type={icon} fillColor="white" />
  {/if}
  {label}
</button>
