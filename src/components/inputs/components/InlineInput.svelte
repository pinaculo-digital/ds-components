<script lang="ts" module>
  import type { SVGAttributes } from 'svelte/elements';
  import type { Component } from 'svelte';

  interface Props {
    value: string;
    placeholder: string;
    Icon?: Component<{ props?: SVGAttributes<SVGSVGElement> }>;
    validate?: () => string;
    disabled?: boolean;
    onDone: (value: string) => void;
  }
</script>

<script lang="ts">
  let { value = $bindable(), validate = () => '', placeholder, Icon, disabled, onDone }: Props = $props();

  let error = $state<string>('');

  const fillIcon = () => {
    if (disabled) {
      return 'fill-disabled-300';
    }
    return 'fill-sub-600';
  };

  let editMode = $state<boolean>(false);
  let tmpValue = $state<string>(value);
</script>

<div
  class="apply-class-focus flex h-[40px] max-h-[40px] items-center gap-4 rounded-[10px] p-2 px-4 pr-2 text-[14px] font-normal"
  data-disabled={disabled ? true : null}
  data-error={error && error.length > 0 ? true : null}
>
  {#if Icon}
    <Icon
      props={{
        class: `${fillIcon()} h-[18px]`,
      }}
    />
  {/if}
  <input
    disabled={disabled || !editMode}
    type="text"
    name="input"
    bind:value={tmpValue}
    {placeholder}
    onfocus={() => (error = '')}
    onblur={() => {
      if (value.length > 0) error = validate();
    }}
    class="text-strong-950 placeholder:text-soft-400 disabled:text-disabled-300 w-full text-[14px] outline-none"
  />

  <div class="flex items-center gap-1">
    {#if editMode}
      <button
        class="p-2"
        onclick={() => {
          editMode = false;
          tmpValue = value;
        }}
      >
        <!-- <SvgX
          props={{
            class: fillIcon() + ' hover:fill-strong-950',
          }}
        /> -->
      </button>

      <button
        class="p-2"
        onclick={() => {
          onDone(value);
          value = tmpValue;
          editMode = false;
        }}
      >
        <!-- <SvgCheckMin
          props={{
            class: fillIcon() + ' hover:fill-strong-950',
            width: 12,
            height: 12,
          }}
        /> -->
      </button>
    {:else}
      <button {disabled} onclick={() => (editMode = true)} class="p-2">
        <!-- <SvgLapis
          props={{
            class: fillIcon(),
          }}
        /> -->
      </button>
    {/if}
  </div>
</div>
