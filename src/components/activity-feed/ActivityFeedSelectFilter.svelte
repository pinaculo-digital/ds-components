<script lang="ts" module>
  import Icon from '../../assets/icon/Icon.svelte';

  import type { IconName } from '../../lib/utils/icons/icons.type.js';

  interface Props {
    items?: {
      label: string;
      value: string;
      icon?: IconName;
    }[];
    selected?: string;
    onSelect?: (value: string) => Function;
  }

  const mock: Props['items'] = [
    { label: 'All', value: 'value1' },
    { label: 'Data', value: 'value2', icon: 'calendar-line' },
    { label: 'Pessoas', value: 'value3', icon: 'user-line' },
  ];
</script>

<script lang="ts">
  let { items = mock, selected = $bindable('value1'), onSelect }: Props = $props();

  async function handleSelect(value: string) {
    await onSelect?.(value);
    selected = value;
  }
</script>

<div class="flex items-center gap-2.5">
  {#each items as { label, value, icon }}
    {@const active = value === selected}
    <button
      onclick={() => handleSelect(value)}
      class="flex items-center gap-1.5 rounded-lg border px-2.5 py-1 {active
        ? 'border-primary-base bg-primary-lighter'
        : 'hover:bg-weak-50 hover:border-weak-50 border-neutral-200'}"
    >
      {#if icon}
        <Icon type={icon} opticalSize={18} fillColor={active ? 'primary-dark' : 'neutral-600'} />
      {/if}
      <p class="text-label-small {active ? 'text-primary-dark' : 'text-sub-600'}">{label}</p>
    </button>
  {/each}
</div>
