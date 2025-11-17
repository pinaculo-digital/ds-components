<script lang="ts" module>
  import Icon from '../../../assets/icon/Icon.svelte';

  import type { IconName } from '../../../lib/utils/icons/icons-type.js';
  import type { Snippet } from 'svelte';

  interface Props {
    label?: string;
    descricao?: string;
    icon?: IconName;
    children?: Snippet;
    click?: VoidFunction;
  }
</script>

<script lang="ts">
  let {
    label = 'Label',
    descricao = '8 min ago ∙ Description insert here.',
    icon='user-3-line',
    children,
    click,
  }: Props = $props();
</script>

<div class="group hover:bg-weak-50 flex w-full items-start justify-between rounded-2xl p-3">
  <div class="flex items-start gap-4">
    <Icon type={icon} opticalSize={24} />
    <div class="flex flex-col">
      <div class="flex flex-col">
        <p class="text-strong-950 text-[14px] font-medium">{label}</p>
        <p class="text-sub-600 text-[12px] font-normal">{descricao}</p>
      </div>
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
  <button onclick={click} class="hidden group-hover:flex">
    <Icon type='more-line' />
  </button>
</div>
