<script lang="ts" module>
  import InputWrapper from '../../../assets/wrappers/InputWrapper.svelte';
  import toast from '../../../lib/utils/toast.svelte.js';

  import type { FieldSetup } from "../../../lib/utils/types.js";
  import type { SVGAttributes } from 'svelte/elements';
  import type { Component } from 'svelte';

  interface Props {
    data: FieldSetup<string>;
    label: string;

    subLabel?: string;
    placeholder: string;
    Icon?: Component<{ props?: SVGAttributes<SVGSVGElement> }>;
    tip?: string;
    validate?: () => string;
    disabled?: boolean;
    sanitize?: (value: string) => string;
    onEnter?: (value: string) => void;
  }
</script>

<script lang="ts">
  let {
    data = $bindable(),
    label,
    tip,
    subLabel,
    validate = () => '',
    placeholder,
    Icon,
    disabled,
    sanitize,
    onEnter,
  }: Props = $props();

  let error: string | undefined = $state(undefined);

  const fillIcon = () => {
    if (error) {
      return 'fill-error-base';
    }
    if (disabled) {
      return 'fill-disabled-300';
    }
    return 'fill-sub-600';
  };

  const copy = () => {
    navigator.clipboard.writeText(data.value).then(() => {
      toast.success('Texto copiado na clipboard', '');
    });
  };
</script>

<InputWrapper bind:error {label} value={data.display} {subLabel} required={data.required} {tip}>
  <div
    class="apply-class-focus flex h-[40px] max-h-[40px] items-center gap-4 overflow-hidden rounded-[10px] text-[14px] font-normal"
    data-disabled={disabled ? true : null}
    data-error={error && error.length > 0 ? true : null}
  >
    <!-- <SvgShare
      props={{
        class: `${fillIcon()} h-[18px]   ml-4`,
      }}
    /> -->
    <input
      {disabled}
      type="text"
      name="input"
      bind:value={data}
      {placeholder}
      onfocus={() => (error = '')}
      onblur={() => {
        if (data.value.length > 0) error = validate();
      }}
      onkeydown={(e) => {
        if (e.key === 'Enter' && onEnter) {
          onEnter(data.value);
        }
      }}
      class=" my-2 w-full text-[14px] outline-none"
    />
    <button class="border-soft-200 relative h-full border-l px-4 disabled:cursor-default" {disabled} onclick={copy}>
      <!-- <SvgCopy
        props={{
          class: `${disabled ? 'fill-disabled-300' : 'fill-sub-600'} h-[18px]`,
        }}
      /> -->
    </button>
  </div>
</InputWrapper>
