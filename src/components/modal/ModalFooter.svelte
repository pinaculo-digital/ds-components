<script lang="ts">
  import LoaderSmooth from '../../assets/loading/LoaderSmooth.svelte';
  import Button from '../buttons/Button.svelte';

    import type { ColorName} from '../../lib/utils/colors/colors.utils.js';
  import type { Snippet } from 'svelte';

  interface Props {
    complementarComponent?: Snippet;
    primaryButtonDetails: {
      label: string;
      action: VoidFunction;
      color: ColorName;
    };
    secoundButtonDetails?: {
      label: string;
      action: VoidFunction;
      color: ColorName;
    };
  }

  let {
    complementarComponent,
    primaryButtonDetails = {
      label: 'Continuar',
      action: close,
      color: 'blue-600',
    },
    secoundButtonDetails = {
      label: 'Cancelar',
      action: close,
      color: 'transparent',
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
        onClick={secoundButtonDetails.action}
        color={secoundButtonDetails.color}
        widthFull={true}
        label={secoundButtonDetails.label}
      />
    {/if}
    <Button
      onClick={primaryButtonDetails.action}
      color={primaryButtonDetails.color}
      widthFull={true}
      label={primaryButtonDetails.label}
    />
  {/if}
</div>
