<script lang="ts">
  import LoaderSmooth from "../../../assets/loading/LoaderSmooth.svelte";
  import Button from "../../button/components/Button.svelte";

  import type { ColorName } from "../../../lib/utils/colors/colors-utils.js";
  import type { Snippet } from "svelte";


  interface Props {
    complementarComponent?: Snippet;
    primaryButtonDetails: {
      label: string;
      action: VoidFunction;
      bgColor: ColorName;
      borderColor: ColorName;
      textColor: ColorName;
    };
    secoundButtonDetails?: {
      label: string;
      action: VoidFunction;
      bgColor: ColorName;
      borderColor: ColorName;
      textColor: ColorName;
    };
  }

  let {
    complementarComponent,
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
  }: Props = $props();

  let loading = $state(false);
</script>

<div class="border-soft-200 flex w-full gap-[.625rem] border-t p-5">
    {#if complementarComponent}
    <div class="flex w-full">
      {@render complementarComponent()}
    </div>
  {/if}
  {#if loading}
    <div class="flex w-full items-center justify-center">
      <LoaderSmooth size={'w-full'} />
    </div>
  {:else}
    {#if secoundButtonDetails}
      <Button
        click={secoundButtonDetails.action}
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
