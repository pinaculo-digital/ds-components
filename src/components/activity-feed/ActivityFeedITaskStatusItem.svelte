<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

    import type { ColorName} from '../../lib/utils/colors/colors.utils.js';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';
  import { onMount } from 'svelte';

  interface Props {
    status?: 'success' | 'pending' | 'error' | 'warning';
    label?: string;
  }

  let { status = 'success', label = 'Exemplo' }: Props = $props();
  let iconData = $state<{ color: ColorName; icon: IconName }>({
    color: 'primary-dark',
    icon: 'select-box-circle-fill',
  });

  function getIcon() {
    switch (status) {
      case 'success':
        iconData.icon = 'select-box-circle-fill';
        iconData.color = 'green-500';
        break;
      case 'pending':
        iconData.icon = 'time-fill';
        iconData.color = 'yellow-500';
        break;
      case 'error':
        iconData.icon = 'error-warning-fill';
        iconData.color = 'red-500';
        break;
      case 'warning':
        iconData.icon = 'alert-fill';
        iconData.color = 'orange-500';
        break;
      default:
        iconData.icon = 'select-box-circle-fill';
        iconData.color = 'primary-dark';
        break;
    }
  }

  onMount(getIcon);
</script>

<div class="border-soft-200 flex w-fit items-center gap-1.5 rounded-lg border px-1.5 pr-2.5 pl-1">
  <Icon type={iconData.icon} fillColor={iconData.color} opticalSize={16} />
  <p class="text-label-small text-sub-600">{label}</p>
</div>
