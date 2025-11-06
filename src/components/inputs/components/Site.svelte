<script lang="ts" module>
  import InputWrapper from '../../../assets/wrappers/InputWrapper.svelte';
  import sinalizador from '../../../lib/utils/signal.svelte.js';

  import type { SVGAttributes } from 'svelte/elements';
  import type { Component } from 'svelte';

  interface Props {
    value: string;
    label: string;
    dominio: string;
    comPrefixo?: boolean;
    subLabel?: string;
    viewOnly?: boolean;
    placeholder: string;
    Icon?: Component<{ props?: SVGAttributes<SVGSVGElement> }>;
    required?: boolean;
    tip?: string;
    extraTip?: string;
    validate?: () => string;
    disabled?: boolean;
    sanitize?: (value: string) => string;
    onEnter?: (value: string) => void;
  }
</script>

<script lang="ts">
  let {
    value = $bindable(),
    label,
    viewOnly,
    comPrefixo = true,
    extraTip,
    dominio = '',
    required = false,
    tip,
    validate = () => '',
    placeholder,
    Icon,
    disabled,
    sanitize,
    subLabel,
    onEnter,
  }: Props = $props();

  let error = $state<string>('');

  $effect(() => {
    if (sinalizador.signal.tipo === 'validarInputs') {
      error = validate();
    }
  });
  $effect(() => {
    if (sanitize) {
      value = sanitize(value);
    }
  });
</script>

<InputWrapper bind:error {label} {extraTip} {subLabel} {value} {required} {tip}>
  <div
    class="apply-class-focus input flex h-[40px] max-h-[40px] items-center gap-4 overflow-hidden rounded-[10px] text-[14px] font-normal"
    data-disabled={disabled}
    data-error={error && error.length > 0 ? true : null}
  >
    {#if comPrefixo}
      <div
        class="in-focus-within:text-sub-600 text-soft-400 border-soft-200 relative flex h-full items-center border-r px-4"
      >
        https://
      </div>
    {/if}
    <input
      {disabled}
      type="text"
      name="input"
      bind:value
      {placeholder}
      onfocus={() => (error = '')}
      onblur={async () => {
        if (value.length > 0) error = await validate();
      }}
      onkeydown={(e) => {
        if (e.key === 'Enter' && onEnter) {
          onEnter(value);
        }
      }}
      class=" my-2 w-full pl-3 outline-none {viewOnly ? 'pointer-events-none' : ''} text-[14px]"
    />

    {#if dominio}
      <div
        class="in-focus-within:text-sub-600 text-strong-950 border-soft-200 relative flex h-full items-center border-l px-4"
      >
        {dominio}
      </div>
    {/if}
  </div>
</InputWrapper>
