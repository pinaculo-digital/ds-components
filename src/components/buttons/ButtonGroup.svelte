<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  import type { IconName } from '../../lib/utils/icons/icons.type.js';
  import { iconsMap } from '../../lib/utils/icons/icons.type.js';

  interface Props {
    geralDisabled?: boolean;
    size?: 36 | 32 | 24;
    buttonData: {
      leftIcon?: IconName;
      rightIcon?: IconName;
      disabled?: boolean;
      onClick: Function;
      label: string | IconName;
    }[];
  }

  const mock = {
    leftIcon: 'sun-line',
    rightIcon: 'sun-line',
    disabled: false,
    label: 'Clique aqui',
    onClick: () => {},
  };

  let { buttonData = Array(2).fill(mock), geralDisabled, size = 36 }: Props = $props();
  let isMini = $derived(size === 24);

  function isIconName(label: string | IconName) {
    const found = iconsMap[label as IconName];
    return found !== undefined;
  }

  function getDimensions() {
    switch (size) {
      case 36:
        return 'px-4 py-2';
      case 32:
        return 'px-3.5 py-1.5';
      case 24:
        return 'px-3 py-1';
    }
  }

  async function handleClick(fn: Function) {
    geralDisabled = true;
    await fn();
    geralDisabled = false;
  }
</script>

<div class="border-soft-200 flex w-fit gap-0 {isMini ? 'rounded-md' : 'rounded-lg'} border">
  {#each buttonData as { leftIcon, rightIcon, disabled, onClick, label }}
    <button
      {disabled}
      class="flex items-center {getDimensions()} border-soft-200 gap-1 not-last:border-r hover:cursor-pointer disabled:hover:cursor-not-allowed"
      onclick={() => handleClick(onClick)}
    >
      {#if leftIcon && !isIconName(label)}
        <Icon type={leftIcon} opticalSize={isMini ? 16 : 20} fillColor={'neutral-600'} />
      {/if}

      {#if !isIconName(label)}
        <p class="{isMini ? 'text-label-x-small' : 'text-label-small'} text-sub-600 font-medium">
          {label}
        </p>
      {:else}
        <Icon type={label as IconName} opticalSize={isMini ? 16 : 20} fillColor={'neutral-600'} />
      {/if}

      {#if rightIcon && !isIconName(label)}
        <Icon type={rightIcon} opticalSize={isMini ? 16 : 20} fillColor={'neutral-600'} />
      {/if}
    </button>
  {/each}
</div>
