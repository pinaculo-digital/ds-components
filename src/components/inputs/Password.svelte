<script lang="ts" module>
  import InputWrapper from '../../assets/wrappers/InputWrapper.svelte';
  import Icon from '../../assets/icon/Icon.svelte';

  import { BuildedInput } from '../../lib/utils/reflector.svelte.js';

  interface Props {
    data: BuildedInput<string>;
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

  const reveal = () => {
    return showPass ? 'text' : 'password';
  };

  let error: string | null = $state(null);
  let showPass = $state<boolean>(false);

  function validateValue() {
    const validatorResult = data.validate();
    error = validatorResult;
  }
</script>

<InputWrapper {error} {label} value={data.value} {subLabel} {required} {tip}>
  <div
    class="apply-class-focus text-14 flex h-10 max-h-10 items-center gap-2 rounded-[10px] px-3 font-normal"
    data-disabled={disabled ? true : null}
    data-error={error && error.length > 0 ? true : null}
  >
    <Icon type="lock-2-line" />

    {@render input()}

    <button class="absolute right-4" tabindex="-1" onclick={() => (showPass = !showPass)}>
      <Icon type={showPass ? 'eye-line' : 'eye-off-line'} fillColor={'neutral-400'} />
    </button>
  </div>
</InputWrapper>

<!-- {#snippet input(tipo: string)} -->
{#snippet input()}
  <input
    {disabled}
    type={reveal()}
    name="input"
    bind:value={data.value}
    placeholder={data.placeholder.length > 0 ? data.placeholder : placeholder}
    onfocus={() => {
      error = '';
    }}
    onblur={validateValue}
    onkeydown={(e) => {
      if (e.key === 'Enter') onEnter();
    }}
    class="text-14 w-full outline-none"
  />
{/snippet}
