<script lang="ts" module>
  import InputWrapper from '../../../assets/wrappers/InputWrapper.svelte';
  import sinalizador from '../../../lib/utils/signal.svelte.js';

  interface Props {
    value: number | null;
    label: string;
    placeholder?: string;
    required?: boolean;
    tip?: string;
    disabled?: boolean;
    validate?: (v?: string) => string;
  }
</script>

<script lang="ts">
  let {
    value = $bindable(0),
    label,
    required = false,
    tip,
    validate = () => '',
    placeholder = 'R$ 0.00',
    disabled,
  }: Props = $props();

  let error = $state('');

  $effect(() => {
    if (sinalizador.signal.tipo === 'validarInputs') {
      error = validate();
    }
  });

  const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const raw = input.value.replace(/\D/g, '');

    if (raw.length <= 2) {
      input.value = raw;
      value = parseInt(raw) || 0;
    } else {
      const inteiro = raw.slice(0, -2);
      const decimal = raw.slice(-2);
      const formatted = `${parseInt(inteiro)}.${decimal}`;

      input.value = formatted;
      value = parseFloat(formatted);
    }
  };
</script>

<InputWrapper {label} {value} {error} {required} {tip}>
  <div
    class="apply-class-focus input flex h-[40px] max-h-[40px] items-center gap-4 rounded-[10px] px-6 pr-1 text-[14px] font-normal"
  >
    R$
    <input
      type="number"
      bind:value
      {placeholder}
      {disabled}
      oninput={handleInput}
      onfocus={() => (error = '')}
      onblur={() => {
        error = validate();
      }}
      class="disabled:text-disabled-300 w-full text-[14px] outline-none"
    />
    <div class="border-soft-200 flex items-center gap-4 border-l p-2.5">
      <!-- <SvgBandeiraBrasil /> -->
      <span class="text-14 text-strong-950 font-medium">BRL</span>
    </div>
  </div>
</InputWrapper>

<style>
  /* Remove spin buttons em todos os navegadores */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
</style>
