<script lang="ts" module>

  interface Props {
    value?: string;
    valueWithCountry?: string;
    label: string;

    subLabel?: string;
    placeholder?: string;
    required?: boolean;
    tip?: string;
    validate?: () => string;
    disabled?: boolean;
    lockedIn?: string;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";

  import s from "../../../lib/sanitizers/sanitizer.js";
  import sinalizador from "../../../lib/utils/signal.svelte.js";
  import InputWrapper from "../../../assets/wrappers/InputWrapper.svelte";
  import { countrysInfo } from "../../../lib/utils/values/country.js";
  import SelectBlock from "./SelectBlock.svelte";
  import MainPhone from "../../dropdown/components/MainPhone.svelte";
  import OptionPhone from "../../dropdown/components/OptionPhone.svelte";

  let {
    value = $bindable(),
    valueWithCountry = $bindable(),
    label,
    required = false,
    subLabel,
    tip,
    lockedIn = '+55', //Por padrão vamos deixar sempre travado para aceitar apenas numeros brasileiros
    validate = () => '',
    placeholder = '(555) 0000-0000',
    disabled,
  }: Props = $props();

  let countryCode = $state<string>('+55');
  let disableSelect = $state<boolean>(false);
  let error = $state('');

  $effect(() => {
    if (value) {
      value = s.telefone(value, false);
      valueWithCountry = countryCode + value;
    }
  });
  $effect(() => {
    if (sinalizador.signal.tipo === 'validarInputs') {
      error = validate();
    }
  });

  onMount(() => {
    if (lockedIn) {
      disableSelect = true;
      countryCode = lockedIn;
    }
  });
</script>

<InputWrapper bind:error {label} {subLabel} value={value ?? ''} {required} {tip}>
  <div
    class="apply-class-focus flex h-[40px] max-h-[40px] items-center rounded-[10px] text-[14px] font-normal"
    data-disabled={disabled ? true : null}
    data-error={error && error.length > 0 ? true : null}
  >
    <div class="flex h-full shrink-0 items-center">
      <SelectBlock
        placeholder="+55"
        focusCss="relative h-full w-full"
        options={countrysInfo.map((obj) => {
          return {
            label: obj.code,
            value: obj.code,
            icon: obj.icon,
          };
        })}
        MainComponent={MainPhone}
        OptionComponent={OptionPhone}
        bind:value={countryCode}
        removableOnClick={false}
        disabled={disableSelect}
        dropCss="absolute top-[125%] left-0 w-full max-h-[200px] rounded-lg overflow-y-auto bg-transparent border border-[rgba(0,0,0,.05)]  dark:border-none shadow-lg dark:shadow-none flex flex-col"
      />
    </div>
    <div class="bg-soft-200 h-full w-[1px]"></div>
    <input
      {disabled}
      type="tel"
      name="input"
      bind:value
      {placeholder}
      class="ml-3 w-full text-[14px] outline-none"
      onfocus={() => (error = '')}
      onblur={() => {
        if (value) error = validate();
      }}
    />
  </div>
</InputWrapper>
