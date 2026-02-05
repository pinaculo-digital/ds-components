<script lang="ts">
  import Tooltip from '../wrappers/Tooltip.svelte';
  import Icon from '../icon/Icon.svelte';

  let {
    label,
    required,
    subLabel,
    extraTip,
  }: { label: string; required?: boolean; subLabel?: string; extraTip?: string } = $props();
</script>

<div class="flex items-center">
  <p class="text-sub-600 text-14 font-medium">
    {label}
  </p>
  {#if required}
    <span class="text-primary-base text-14">*</span>
  {/if}
  {#if subLabel}
    <span class="text-sub-600 text-14 mr-1 ml-1 font-normal">
      {subLabel}
    </span>
  {/if}

  {#if extraTip}
    <Tooltip text={extraTip}>
      <Icon type="information-2-fill" opticalSize={16} fillColor="neutral-600" />
    </Tooltip>
  {/if}
</div>
