<script lang="ts">
  import Icon from './Icon.svelte';

  import type { IconName } from '../../../lib/utils/icons/icons.type';

  interface Props {
    icon: IconName;
    gradientFrom?: string;
    gradientTo?: string;
  }

  let {
    icon = '24-hours-line',
    gradientFrom = 'rgba(113,119,132,0.10)',
    gradientTo = 'rgba(113,119,132,0)',
  }: Props = $props();
</script>

<div
  class="inline-flex rounded-full p-[1px]"
  style="background: linear-gradient(180deg, {gradientFrom}, {gradientTo});"
>
  <div
    class="inline-flex items-center gap-4 rounded-full bg-gradient-to-b p-4"
    style="background: linear-gradient(180deg, {gradientFrom}, {gradientTo});"
  >
    <div class="border-soft-200 flex aspect-square w-16 items-center justify-center rounded-full border bg-white">
      <div class="-ml-1.5">
        <Icon type={icon} opticalSize={32} fillColor="neutral-600" />
      </div>
    </div>
  </div>
</div>

<!-- <div
  class="border-soft-200 inline-flex items-center gap-4 rounded-full border bg-gradient-to-b from-[{gradientFrom}] to-[{gradientTo}] p-4"
>
  <div class="border-soft-200 flex aspect-square w-16 items-center justify-center rounded-full border bg-white">
    <Icon type={icon} opticalSize={32} fillColor={'neutral-600'} />
  </div>
</div> -->
