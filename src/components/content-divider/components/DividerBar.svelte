<script lang="ts">  
  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import { getColor } from '../../../lib/utils/colors/colors-utils.js';

  interface Props {
    color?: ColorName;
    label: string;
  }

  let { color = 'neutral-50', label }: Props = $props();
</script>

<div class="flex w-full items-start px-5 py-1" style="background-color: {getColor(color).value};">
  <p class="text-subheading-xsmall txet-start text-soft-400 text-center uppercase">{label}</p>
</div>
