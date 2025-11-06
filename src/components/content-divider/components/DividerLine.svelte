<script lang="ts">  
  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import { getColor } from '../../../lib/utils/colors/colors-utils.js';

  interface Props {
    color?: ColorName;
  }

  let { color = 'neutral-200' }: Props = $props();
</script>

<div class="h-px w-full" style="background-color: {getColor(color).value};"></div>
