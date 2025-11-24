<script lang="ts">
  import LoaderSmooth from '../../../assets/loading/LoaderSmooth.svelte';
  import Button from '../../button/components/Button.svelte';
  import Icon from '../../../assets/icon/Icon.svelte';

  import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
  import type { IconName } from '../../../lib/utils/icons/icons-type.js';
  import { getColor } from '../../../lib/utils/colors/colors-utils.js';


  interface Props {
    type?: 'alert' | 'error' | 'success' | 'information';
    iconUpContent?: boolean;
    title: string;
    description: string;
    close: VoidFunction;
    proceed: boolean;
    primaryButtonDetails: {
      label: string;
      action: VoidFunction;
      bgColor: ColorName;
      borderColor: ColorName;
      textColor: ColorName;
    };
    secoundButtonDetails?: {
      label: string;
      action?: VoidFunction;
      bgColor: ColorName;
      borderColor: ColorName;
      textColor: ColorName;
    };
  }

  let {
    close,
    proceed = $bindable(false),
    primaryButtonDetails = {
      label: 'Continuar',
      action: close,
      bgColor: 'blue-600',
      borderColor: 'blue-600',
      textColor: 'white',
    },
    secoundButtonDetails = {
      label: 'Cancelar',
      action: close,
      bgColor: 'transparent',
      borderColor: 'neutral-200',
      textColor: 'neutral-600',
    },
    title = 'Informação',
    description = 'Informação',
    iconUpContent = false,
    type = 'information',
  }: Props = $props();

  let loading = $state(false);

  function getBg(): ColorName {
    switch (type) {
      case 'alert':
        return 'yellow-50';
      case 'error':
        return 'red-50';
      case 'success':
        return 'green-50';
      case 'information':
        return 'blue-50';
      default:
        return 'yellow-50';
    }
  }

  function getIcon(): IconName {
    switch (type) {
      case 'alert':
        return 'alert-fill';
      case 'error':
        return 'error-warning-fill';
      case 'success':
        return 'select-box-circle-fill';
      case 'information':
        return 'information-fill';
      default:
        return 'alert-fill';
    }
  }

  function getIconColor(): ColorName {
    switch (type) {
      case 'alert':
        return 'yellow-500';
      case 'error':
        return 'red-500';
      case 'success':
        return 'yellow-500';
      case 'information':
        return 'blue-500';
      default:
        return 'yellow-500';
    }
  }
</script>

<div class="border-soft-200 bg-white-0 absolute right-2 bottom-0 left-2 z-30 rounded-[1.375rem] border">
  {#if type && iconUpContent}
    <div class="flex w-full items-center justify-center pt-5">
      {@render icon()}
    </div>
  {/if}
  <div class="border-soft-200 flex w-full items-start gap-4 border-b p-5">
    {#if type && !iconUpContent}
      {@render icon()}
    {/if}
    <span class="flex flex-col gap-1">
      <p class="text-label-medium text-strong-950">{title}</p>
      <p class="text-paragraph-small text-sub-600">{description}</p>
    </span>
  </div>
  <div class="flex w-full gap-[.625rem] p-5">
    {#if loading}
      <div class="flex w-full items-center justify-center">
        <LoaderSmooth size={'w-full'} />
      </div>
    {:else}
      {#if secoundButtonDetails}
        <Button
          click={secoundButtonDetails.action ?? close}
          bgColor={secoundButtonDetails.bgColor}
          wfull={true}
          borderColor={secoundButtonDetails.borderColor}
          textColor={secoundButtonDetails.textColor}
          label={secoundButtonDetails.label}
        />
      {/if}
      <Button
        click={primaryButtonDetails.action}
        bgColor={primaryButtonDetails.bgColor}
        wfull={true}
        borderColor={primaryButtonDetails.borderColor}
        textColor={primaryButtonDetails.textColor}
        label={primaryButtonDetails.label}
      />
    {/if}
  </div>
</div>

{#snippet icon()}
  {@const color = getColor(getBg()).value}
  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style="background-color: {color};">
    <Icon type={getIcon()} opticalSize={24} fillColor={getIconColor()} />
  </div>
{/snippet}