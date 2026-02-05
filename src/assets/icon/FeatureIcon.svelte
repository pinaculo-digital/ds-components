<script lang="ts">
  import type { IconName } from '../../lib/utils/icons/icons.type.js';
  import Icon from './Icon.svelte';

  interface Props {
    icon: IconName;
  }
  let { icon }: Props = $props();
</script>

<div class="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 not-md:hidden">
  <div class="-ml-1">
    <Icon type={icon} fillColor="neutral-600" opticalSize={20} />
  </div>
</div>
