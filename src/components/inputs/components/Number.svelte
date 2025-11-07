<script lang="ts" module>
  import InputWrapper from "../../../assets/wrappers/InputWrapper.svelte";

  import s from "../../../lib/sanitizers/sanitizer.js";

  interface Props {
    value: number;
    label: string;

    subLabel?: string;
    required?: boolean;
    tip?: string;
    extraTip?: string;
    validate?: () => string;
    disabled?: boolean;
    limit: number;
    onEnter?: (value: number) => void;
  }
</script>

<script lang="ts">

  let {
    value = $bindable(),
    label,
    subLabel,
    required = false,
    tip,
    extraTip,
    limit,
    validate = () => '',
    disabled,
    onEnter,
  }: Props = $props();

  let error = $state<string>('');

  const fillIcon = () => {
    if (disabled) {
      return 'fill-disabled-300';
    }
    return 'fill-sub-600';
  };

  const add = () => {
    if (value < limit) {
      value++;
    }
  };
  const minus = () => {
    if (value > 0) {
      value--;
    }
  };

  $effect(() => {
    if (value > limit) {
      value = limit;
    }
    if (!value) {
      value = 0;
    }
    value = parseInt(s.numero(value.toString(), limit));
  });
</script>

<InputWrapper bind:error {label} {value} {extraTip} {subLabel} {required} {tip}>
  <div
    class="apply-class-focus flex h-[40px] max-h-[40px] justify-between gap-4
      overflow-hidden rounded-[10px] p-[2px] font-normal"
    data-disabled={disabled ? true : null}
    data-error={error && error.length > 0 ? true : null}
  >
    <button class="ml-1 px-4 outline-transparent" onclick={minus}>
      <!-- <SvgMinus
        props={{
          class: fillIcon(),
          width: 12,
        }}
      /> -->
    </button>
    <input
      {disabled}
      type="number"
      name="input"
      bind:value
      onfocus={() => (error = '')}
      onblur={() => {
        error = validate();
      }}
      onkeydown={(e) => {
        if (e.key === 'Enter' && onEnter) {
          onEnter(value);
        }
      }}
      class="w-full text-center text-[14px] outline-none"
    />

    <button class="mr-1 px-4 outline-transparent" onclick={add}>
      <!-- <SvgAdd
        props={{
          class: fillIcon(),
          width: 12,
        }}
      /> -->
    </button>
  </div>
</InputWrapper>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield;
  }
</style>
