<script module lang="ts">
  import InputWrapper from '../../assets/wrappers/InputWrapper.svelte';
  import Tag from '../badge/Tag.svelte';

  import type { SVGAttributes } from 'svelte/elements';
  import type { Component } from 'svelte';

  interface Props {
    tags: string[];
    label: string;
    placeholder: string;

    subLabel?: string;
    Icon?: Component<{ props?: SVGAttributes<SVGSVGElement> }>;
    required?: boolean;
    tip?: string;
    validate?: () => string;
    disabled?: boolean;
  }
</script>

<script lang="ts">
  let {
    tags = $bindable<string[]>(),
    label,
    placeholder,
    subLabel,
    Icon,
    required = false,
    tip,
    validate = () => '',
    disabled = false,
  }: Props = $props();

  let error = $state<string>('');
  let value = $state('');

  $effect(() => {
    if (value) error = '';
  });

  function removeTag(tag: string) {
    tags = tags.filter((t) => t !== tag);
  }

  function addTagFromInput() {
    const v = value.trim();
    if (!v) return;
    if (tags.includes(v)) {
      error = 'Valor já adicionado';
      return;
    }
    tags = [...tags, v];
    value = '';
  }
</script>

<InputWrapper bind:error {label} {value} {subLabel} {required} {tip}>
  <div
    class="apply-class-focus flex h-[40px] max-h-[40px] items-center gap-4 rounded-[10px] p-2 px-4 text-[14px] font-normal"
    data-disabled={disabled ? true : null}
    data-error={error && error.length > 0 ? true : null}
  >
    {#if Icon}
      <Icon props={{ class: `${disabled ? 'fill-disabled-300' : 'fill-sub-600'} h-[18px]` }} />
    {/if}

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
        if (e.key === 'Enter') addTagFromInput();
      }}
      class="w-full text-[14px] outline-none"
    />
  </div>

  <div class="mt-1 flex flex-wrap items-center gap-y-2">
    {#each tags as tag, _ (tag)}
      <Tag {tag} onClick={removeTag} />
    {/each}
  </div>
</InputWrapper>
