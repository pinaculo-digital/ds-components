<script lang="ts">
  import type { ColorName } from "../../lib/utils/colors/colors-utils.js";
  import { getColor } from "../../lib/utils/colors/colors-utils.js";


  interface Props {
    color: ColorName;
    label?: string;
  }

  let { color = 'red-500', label = 'Legenda' }: Props = $props();

  const selectedColor = getColor(color).value;
</script>

<div class="flex items-center gap-1">
  <div
    class="aspect-square w-3 rounded-full border-2 border-white shadow"
    style="background-color: {selectedColor};"
  ></div>
  {#if label}
    <p class="text-paragraph-small text-strong-950">{label}</p>
  {/if}
</div>