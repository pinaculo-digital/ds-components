<script lang="ts" module>
  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import type { IconName } from '../../../lib/utils/icons/icons-type.js';
  import { getColor } from '../../../lib/utils/colors/colors-utils.js';

  import Icon from '../../../assets/icon/Icon.svelte';


  interface Props {
    theme: ColorName;
    leftIcon?: IconName;
    rightIcon?: IconName;
    label: string;
  }
</script>

<script lang="ts">
  let { theme, label, leftIcon, rightIcon }: Props = $props();
  // const { corBg, corTexto } = classesFromTheme(theme);
</script>

<div
  class="flex w-fit items-center justify-center gap-0.5 rounded-full px-1 py-0.5"
  style="background-color: {getColor(theme).value};"
>
  {#if leftIcon}
      <Icon type={leftIcon} opticalSize={16} />
  {/if}
  <p class="text-subheading-2xsmall font-medium uppercase">{label}</p>
  {#if rightIcon}
      <Icon type={rightIcon} opticalSize={16} />
  {/if}
</div>
