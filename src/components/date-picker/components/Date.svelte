<script lang="ts" module>
  import DataRange from '$components/assets/calendar/DataRange.svelte';
  import InputWrapper from '$components/elements/wrappers/InputWrapper.svelte';
  import s from '$lib/sanitizers/sanitizer';
  import handleDate from '$lib/sanitizers/time';
  import sinalizador from '$lib/utils/signal.svelte';

  interface Props {
    value: string;
    label: string;
    range?: { start: Date | null; end: Date | null };
    valueFormat?: (v: { start: Date | null; end: Date | null }) => void;
    placeholder: string;
    required?: boolean;

    validate?: () => string;
    subLabel?: string;
    tip?: string;
    error?: string;
    disabled?: boolean;
    onlyOneDay?: boolean;
  }
</script>

<script lang="ts">
  let {
    value = $bindable(),
    subLabel,
    range = $bindable(),
    validate = () => '',
    label,
    required = false,
    tip,
    error = $bindable(),
    placeholder,
    disabled,
    valueFormat = () => {},
    onlyOneDay = true,
  }: Props = $props();

  let isVisible = $state<boolean>(false);

  const toggleCalendar = () => {
    isVisible = !isVisible;
  };
  const select = (v: { start: Date | null; end: Date | null }) => {
    if (v.start && v.end) {
      range = v;
      if (!onlyOneDay) {
        value = handleDate.formatDate(v.start) + ' - ' + handleDate.formatDate(v.end);
        isVisible = false;
        return;
      }
      value = handleDate.formatDate(v.start);
      isVisible = false;
      return;
    }
  };

  $effect(() => {
    if (range?.start || range?.end) {
      valueFormat(range);
    }
  });

  $effect(() => {
    if (sinalizador.signal.tipo === 'validarInputs') {
      error = validate();
    }
  });
</script>

<InputWrapper bind:error {label} {subLabel} {value} {required} {tip}>
  <button
    class="apply-class-focus input flex h-[40px] max-h-[40px] items-center gap-4 rounded-[10px] px-6 text-[14px] font-normal"
    data-disabled={disabled}
    data-error={error && error.length > 0 ? true : null}
    onclick={toggleCalendar}
  >
    <!-- <SvgCalendar
      props={{
        class: '',
      }}
    /> -->

    <input
      {disabled}
      data-onlyOneDay={onlyOneDay === true ? true : null}
      oninput={(e) => (value = s.data((e.target as HTMLInputElement).value))}
      type="text"
      name="input"
      bind:value
      {placeholder}
      class="disabled:text-disabled-300 w-full text-[14px] outline-none"
    />
  </button>
  <div class="absolute top-[70px]">
    <DataRange onSelecionar={(v: { start: Date | null; end: Date | null }) => select(v)} {onlyOneDay} bind:isVisible />
  </div>
</InputWrapper>
