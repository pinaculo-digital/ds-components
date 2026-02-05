<script lang="ts" module>
  import InputWrapper from '../../assets/wrappers/InputWrapper.svelte';
  import Icon from '../../assets/icon/Icon.svelte';
  import { IconName } from '../../../lib/utils/icons/icons-type.js';
  import { BuildedInput } from '../../../lib/types/reflector.svelte.js';

  interface Props {
    sanitize?: (value: string) => string;
    onEnter?: (value: string) => void;
    data: BuildedInput<string>;
    placeholder?: string;
    onChange?: Function;
    leftIcon?: IconName;
    disabled?: boolean;
    subLabel?: string;
    extraTip?: string;
    label: string;
    tip?: string;
  }
</script>

<script lang="ts">
  let {
    placeholder = 'Placeholder...',
    onChange = () => {},
    data = $bindable(),
    extraTip,
    subLabel,
    leftIcon,
    disabled,
    sanitize,
    onEnter,
    label,
    tip,
  }: Props = $props();

  let error: string | null = $state(null);

  async function onInput(e: Event) {
    data.display = (e.currentTarget as HTMLInputElement).value;
    if (sanitize) {
      data.display = sanitize(data.display);
    } else {
      data.value = data.display;
    }
    await onChange?.(e);
  }

  function validateValue() {
    error = data.validate();
  }
</script>

<InputWrapper {error} {label} {extraTip} value={data.display} {subLabel} required={data.required} {tip}>
  <div
    class="apply-class-focus input flex h-[40px] items-center gap-2 rounded-[10px] px-3 text-[14px] font-normal"
    data-disabled={disabled ? true : null}
    data-error={error ? true : null}
  >
    {#if leftIcon}
      <Icon type={leftIcon} fillColor={'neutral-400'} opticalSize={20} />
    {/if}

    <input
      {disabled}
      type="text"
      name="input"
      bind:value={data.display}
      placeholder={data.placeholder.length > 0 ? data.placeholder : placeholder}
      oninput={async (e) => {
        onInput(e);
      }}
      onblur={validateValue}
      onkeydown={async (e) => {
        if (e.key === 'Enter' && onEnter) {
          onEnter(data.value);
        }
      }}
      class="disabled:text-sub-300 w-full text-[14px] outline-none"
    />
  </div>
</InputWrapper>
