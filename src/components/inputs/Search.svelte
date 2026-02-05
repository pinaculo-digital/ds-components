<script lang="ts" module>
  import InputWrapper from '../../assets/wrappers/InputWrapper.svelte';

  interface Props {
    value: string;
    label: string;
    posicaoLupa?: 'esquerda' | 'direita';
    subLabel?: string;
    placeholder: string;
    required?: boolean;
    tip?: string;
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
    subLabel,
    required = false,
    posicaoLupa = 'esquerda',
    tip,
    validate = () => '',
    placeholder,
    disabled,
    onEnter,
  }: Props = $props();

  let error = $state<string>('');
</script>

<InputWrapper bind:error {label} {subLabel} {value} {required} {tip}>
  <div
    class="bg-white-0 apply-class-focus flex h-[40px] max-h-[40px] items-center gap-4 rounded-[10px] p-2 px-4 text-[14px]
      font-normal"
    data-disabled={disabled}
    data-error={error && error.length > 0 ? true : null}
  >
    <button
      onclick={() => (onEnter ? onEnter(value) : () => {})}
      class={posicaoLupa == 'direita' ? 'order-3' : 'order-1'}
    >
      <!-- <SvgSearch
        props={{
          class: `${disabled ? 'fill-disabled-300' : 'fill-sub-600'} h-[18px]`,
        }}
      /> -->
    </button>

    <input
      {disabled}
      type="text"
      name="input"
      bind:value
      {placeholder}
      onfocus={() => (error = '')}
      onblur={() => {
        if (value.length > 0) error = validate();
      }}
      onkeydown={(e) => {
        if (e.key === 'Enter' && onEnter) {
          onEnter(value);
        }
      }}
      class="text-strong-950 placeholder:text-soft-400 disabled:text-sub-300 order-2 w-full text-[14px] outline-none"
    />
  </div>
</InputWrapper>
