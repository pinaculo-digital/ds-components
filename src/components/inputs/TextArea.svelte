<script lang="ts" module>
  import Label from "../../assets/labels/Label.svelte";
  import Tip from "../../assets/labels/Tip.svelte";
  import sinalizador from "../../lib/utils/signal.svelte.js";


  interface Props {
    value: string;
    label: string;
    placeholder: string;

    validate?: (v?: string) => string;
    subLabel?: string;
    required?: boolean;
    tip?: string;
    error?: string;
    disabled?: boolean;
    limit: number;
  }
</script>

<script lang="ts">

  let {
    value = $bindable(),
    validate = () => '',
    label,
    subLabel,
    required = false,
    tip,
    error = $bindable(),
    placeholder,
    disabled,
    limit,
  }: Props = $props();

  $effect(() => {
    if (sinalizador.signal.tipo === 'validarInputs') {
      error = validate();
    }
  });

  $effect(() => {
    if (value) {
      error = '';
    }
  });
</script>

<div
  class="flex w-full flex-col gap-1
"
>
  <Label {label} {subLabel} {required} />

  <div
    class="apply-class-focus flex items-center gap-4 rounded-[10px] p-2 text-[14px] font-normal"
    data-disabled={disabled ? true : null}
    data-error={error && error.length > 0 ? true : null}
  >
    <textarea
      {disabled}
      onfocus={() => (error = '')}
      onblur={() => {
        if (value.length > 0) error = validate();
      }}
      maxlength={limit}
      name="input"
      bind:value
      {placeholder}
      class="h-[80px] min-h-[80px] w-full p-1 text-[14px] transition-none outline-none"
    ></textarea>
    <!-- <SvgResize
      props={{
        class: 'absolute right-3 bottom-2',
      }}
    /> -->
    <span class="text-soft-400 absolute right-7 bottom-1 text-[11px] font-medium">
      {value ? value.length : 0}/{limit}
    </span>
  </div>

  {#if error}
    <Tip label={error} type="error" />
  {/if}
  {#if (!error || error.length === 0) && tip}
    <Tip label={tip} type="tip" />
  {/if}
</div>

<style>
  ::-webkit-resizer {
    opacity: 0;
  }
</style>
