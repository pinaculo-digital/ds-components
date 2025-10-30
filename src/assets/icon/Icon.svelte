<script lang="ts">
  // 1) valores
  import { getColor } from '../../lib/utils/colors/colors-utils.js';
  import { getIcon } from '../../lib/utils/icons/icons-type.js';

  // 2) tipos  ← AQUI entra o ColorName também
  import type { ColorName } from '../../lib/utils/colors/colors-utils.js';
  import type { IconName } from '../../lib/utils/icons/icons-type.js';
  import type { SVGAttributes } from 'svelte/elements';

  type OpticalSize = 16 | 18 | 20 | 24 | 32 | 40;

  interface Props {
    opticalSize?: OpticalSize;
    fillColor?: ColorName;
    type: IconName;
    svgAtributes?: SVGAttributes<SVGSVGElement>;
  }

  let {
    opticalSize = 20,
    fillColor = 'neutral-950',
    type,
    svgAtributes
  }: Props = $props();

  const [width, height] = Array(2).fill(opticalSize);

  function renderIcon<N extends IconName>(name: N): string {
    return getIcon(name).path;
  }

  function renderColor<N extends ColorName>(name: N): string {
    return getColor(name).value;
  }
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox="0 0 22 22"
  fill={renderColor(fillColor)}
  {...svgAtributes}
>
  <path d={renderIcon(type)} />
</svg>
