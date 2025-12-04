<script lang="ts" module>
  import Icon from '../../assets/icon/Icon.svelte';
    import type { ColorName} from '../../lib/utils/colors/colors.utils.js';
  import { getColor } from '../../lib/utils/colors/colors.utils.js';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';

  interface Props {
    urls: {
      icon?: IconName;
      path: string;
      label: string;
      divider: string;
      textColor: ColorName;
      action: Function;
    }[];
  }
</script>

<script lang="ts">
  let { urls }: Props = $props();
  const url = new URL(window.location.href);
</script>

<div class="text-sub-600 text-14 flex items-center gap-4 font-medium">
  <div class="flex items-center gap-1.5">
    {#each urls as { path, label, action, divider, icon, textColor }, i}
      {#if icon}
        <Icon type={icon} opticalSize={16} />
      {/if}

      <button
        class={path === url.pathname ? 'text-strong-950 cursor-pointer' : ''}
        style="color: {getColor(textColor).value};"
        onclick={() => action()}
      >
        {label}
      </button>

      {#if i < urls.length - 1}
        {divider}
      {/if}
    {/each}
  </div>
</div>
