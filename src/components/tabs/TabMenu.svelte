<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';


  interface Props {
    menuItems: {
      label: string;
      icon: IconName;
    }[];
    menuName: string;
    currentMenu: string;
  }

  const mockItems: {
    label: string;
    icon: IconName;
  }[] = [
    {
      label: 'Dashboard',
      icon: '24-hours-fill',
    },
    {
      label: 'Configurações',
      icon: 'settings-3-fill',
    },
    {
      label: 'Sair',
      icon: 'account-box-line',
    },
  ];

  let { menuItems = mockItems, menuName = 'Menu', currentMenu = $bindable(mockItems[0].label) }: Props = $props();

  function changeRoute(label: string) {
    currentMenu = label;
  }
</script>

<div class="border-soft-200 flex min-w-[238px] flex-col gap-2 rounded-2xl border p-2.5">
  <p class="text-subheading-xsmall text-soft-400 px-2 py-1 uppercase">{menuName}</p>
  {#each menuItems as { label, icon }, i}
    <button
      class="text-label-small flex items-center justify-between gap-1.5 p-2 font-medium hover:shadow {currentMenu ===
      label
        ? 'bg-weak-50 text-strong-950'
        : 'text-sub-600 bg-transparent'} rounded-lg"
      onclick={() => changeRoute(label)}
    >
      <div class="flex items-center gap-1.5">
        <Icon fillColor="neutral-600" opticalSize={20} type={icon} />
        {label}
      </div>
    </button>
  {/each}
</div>
