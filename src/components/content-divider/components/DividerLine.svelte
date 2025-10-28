<script lang="ts">
  import { getColor, type ColorName } from '../../../lib/utils/colors/colors.utils';

  interface Props {
    color?: ColorName;
  }

  let { color = 'neutral-200' }: Props = $props();
</script>

<div class="h-px w-full" style="background-color: {getColor(color).value};"></div>
