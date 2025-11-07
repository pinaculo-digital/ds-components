<script lang="ts" module>
  import InputWrapper from '../../../assets/wrappers/InputWrapper.svelte';
  import Icon from '../../../assets/icon/Icon.svelte';

  import type { IconName } from '../../../lib/utils/icons/icons-type.js';
  import type { FieldSetup } from "../../../lib/utils/types.js";

  interface Props {
    data: FieldSetup<string>;
    label: string;
    subLabel?: string;
    placeholder?: string;
    leftIcon?: IconName;
    disabled?: boolean;
    tip?: string;
    extraTip?: string;
    onChange?: (e: Event) => void;
    sanitize?: (value: string) => string;
    onEnter?: (value: string) => void;
  }
</script>

<script lang="ts">
  let {
    data = $bindable(),
    label,
    subLabel,
    tip,
    extraTip,
    placeholder = 'Placeholder...',
    leftIcon,
    disabled,
    onChange = () => {},
    sanitize,
    onEnter,
  }: Props = $props();

  let error: string | undefined = $state(undefined);

  function onInput() {
    if (sanitize) {
      data.display = sanitize(data.display);
      data.value = data.display.replace(/[^a-zA-Z0-9]/g, '');
    } else {
      data.value = data.display;
    }
  }

  function validateValue() {
    error = data
      .validator(data.value)
      .error?.issues.map((issue) => issue.message)
      .join('');
  }
</script>

<InputWrapper {error} {label} {extraTip} value={data.display} {subLabel} required={data.required} {tip}>
  <div
    class="apply-class-focus input flex h-[40px] items-center gap-2 rounded-[10px] px-3 text-[14px] font-normal"
    data-disabled={disabled ? true : null}
    data-error={error ? true : null}
  >
    {#if leftIcon}
      <Icon type={leftIcon} />
    {/if}

    <input
      {disabled}
      type="text"
      name="input"
      bind:value={data.display}
      {placeholder}
      oninput={async (e) => {
        onChange(e);
        onInput();
      }}
      onblur={validateValue}
      onkeydown={async (e) => {
        if (e.key === 'Enter' && onEnter) {
          onEnter(data.display);
        }
      }}
      class="disabled:text-disabled-300 w-full text-[14px] outline-none"
    />
  </div>
</InputWrapper>
