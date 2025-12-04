<script lang="ts" module>
  import InputWrapper from '../../assets/wrappers/InputWrapper.svelte';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';
  import { BuildedInput } from '../../lib/utils/reflector.svelte.js';
  import type { Option } from '../../lib/utils/types.js';
  import SelectBlock from '../inputs/SelectBlock.svelte';

  import { onMount } from 'svelte';

  interface Props {
    data: BuildedInput<string> | undefined;
    options?: Option[];
    icon?: IconName;
    label: string;
  }
</script>

<script lang="ts">
  let { data = $bindable(), icon, label, options = [] }: Props = $props();

  let value = $state<string>('');
  let loading = $state(false);

  function handleSelection() {
    if (!data) return;
    data.value = value;
    data.display = value;
  }

  onMount(() => {
    if (!data) return;
    if (typeof data.value === 'string') {
      value = data.value;
    }
  });
</script>

<InputWrapper {label} required={true} {value}>
  <SelectBlock
    {icon}
    removableOnClick={false}
    bind:options
    bind:value
    onSelect={handleSelection}
    placeholder="Selecione"
    {loading}
  />
</InputWrapper>
