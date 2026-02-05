<script lang="ts" module>
  import sinalizador from '../../lib/utils/signal.svelte.js';
  import Label from '../labels/Label.svelte';
  import Tip from '../labels/Tip.svelte';

  import type { Snippet } from 'svelte';

  interface Props {
    value: string | number | null | undefined;
    label: string;
    subLabel?: string;
    required?: boolean;
    tip?: string;
    extraTip?: string;
    error?: string | null;
    children: Snippet;
    rightSide?: Snippet;
    validateFunc?: (err?: string) => string | Promise<string>;
  }
</script>

<script lang="ts">
  let {
    value,
    label,
    subLabel,
    rightSide,
    required = false,
    tip,
    validateFunc,
    extraTip,
    error = $bindable(),
    children,
  }: Props = $props();

  $effect(() => {
    if (value) {
      error = '';
    }
  });

  async function validarAll() {
    if (validateFunc) {
      error = await validateFunc();
      setTimeout(() => {
        error = '';
      }, 2000);
    }
  }

  $effect(() => {
    if (sinalizador.signal.tipo === 'validarInputs') {
      validarAll();
    }
  });
</script>

<div class="relative flex w-full flex-col gap-1">
  <div class="flex items-center justify-between">
    <Label {label} {extraTip} {subLabel} {required} />
    {#if rightSide}
      {@render rightSide()}
    {/if}
  </div>

  {@render children()}

  <div class="">
    {#if error}
      <Tip label={error} type="error" />
    {/if}
    {#if (!error || error.length === 0) && tip}
      <Tip label={tip} type="tip" />
    {/if}
  </div>
</div>
