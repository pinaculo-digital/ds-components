<script lang="ts" module>
  import InputWrapper from '../../../assets/wrappers/InputWrapper.svelte';
  import Icon from '../../../assets/icon/Icon.svelte';

  import type { FieldSetup } from '../../../lib/utils/types.js';


  interface Props {
    data: FieldSetup<string>;
    label: string;
    subLabel?: string;
    placeholder?: string;
    required?: boolean;
    tip?: string;
    onEnter?: VoidFunction;
    disabled?: boolean;
  }
</script>

<script lang="ts">
  let {
    data = $bindable(),
    label,
    required = true,
    tip,
    onEnter = () => {},
    placeholder = '• • • • • • • • • •',
    disabled,
    subLabel,
  }: Props = $props();

  let error: string | undefined = $state(undefined);
  let showPass = $state<boolean>(false);

  function validateValue() {
    error = data
      .validator(data.value)
      .error?.issues.map((issue) => issue.message)
      .join('');
  }
</script>

<InputWrapper {error} {label} value={data.value} {subLabel} {required} {tip}>
  <div
    class="apply-class-focus flex h-[40px] max-h-[40px] items-center gap-2 rounded-[10px] px-3 text-[14px] font-normal"
    data-disabled={disabled ? true : null}
    data-error={error && error.length > 0 ? true : null}
  >
    <Icon type="lock-2-line" />
    {#if showPass}
      {@render input('text')}
    {:else}
      {@render input('password')}
    {/if}
    <button class="absolute right-4" tabindex="-1" onclick={() => (showPass = !showPass)}>
      {#if !showPass}
        <Icon type="eye-off-line" />
      {:else}
        <Icon type="eye-line" />
      {/if}
    </button>
  </div>
</InputWrapper>

{#snippet input(tipo: string)}
  <input
    {disabled}
    type={tipo}
    name="input"
    bind:value={data.value}
    {placeholder}
    onfocus={() => {
      error = '';
    }}
    onblur={validateValue}
    onkeydown={(e) => {
      if (e.key === 'Enter') onEnter();
    }}
    class="w-full text-[14px] outline-none"
  />
{/snippet}
