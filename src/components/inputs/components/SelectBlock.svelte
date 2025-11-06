<script lang="ts" module>
  import FocusBlock from '../../dropdown/components/FocusBlock.svelte';
  import DropBlock from '../../dropdown/components/DropBlock.svelte';

  import type { MainComponentType, Option, OptionComponentType } from '../../../lib/utils/types.js';
  import type { Component } from 'svelte';
  import MainDefault from '../../../assets/wrappers/MainDefault.svelte';
  import MainOption from '../../../assets/wrappers/MainOption.svelte';

  interface Props {
    options: Option[];
    placeholder: string;

    // comportamentos
    multiValue?: boolean;
    removableOnClick?: boolean;
    disabled?: boolean;
    withSearch?: boolean;
    loading?: boolean;
    hasError?: boolean;

    // aparência
    focusCss?: string;
    dropCss?: string;

    // composição
    MainComponent?: Component<MainComponentType>;
    OptionComponent?: Component<OptionComponentType>;

    // estado/controladores
    value?: unknown;
    onSelect?: (op: Option) => void;
    onSearch?: (v: string) => void;
    onLostFocus?: VoidFunction;
    onGainFocus?: VoidFunction;
  }
</script>

<script lang="ts">
  let {
    options = $bindable(),
    value = $bindable(),
    placeholder,
    // comportamentos
    multiValue = false,
    removableOnClick = true,
    disabled = false,
    withSearch = false,
    loading = false,
    hasError = false,
    // aparência
    focusCss = 'relative outline-none',
    dropCss = 'absolute top-[120%] left-0 w-full max-h-[200px] rounded-lg overflow-y-auto bg-transparent border border-[rgba(0,0,0,.05)] dark:border-none outline-none shadow-lg dark:shadow-none flex flex-col',
    // composição
    MainComponent = MainDefault,
    OptionComponent = MainOption,
    // callbacks
    onSelect = () => {},
    onSearch = () => {},
    onLostFocus,
    onGainFocus,
  }: Props = $props();

  // estado interno
  let isShow = $state(false);
  let search = $state('');
  let dropElement = $state<HTMLDivElement | undefined>();
  let bufferKeys = $state('');
  let timeoutBuffer: number | undefined;

  // utilitários -----------------------------

  // seleção atual (single: Option | null, multi: Option[] | null)
  function currentSelection() {
    if (value == null) return null;

    return multiValue
      ? options.filter((op) => Array.isArray(value) && value.includes(op.value))
      : (options.find((op) => op.value === value) ?? null);
  }

  function isSelected(op: Option): boolean {
    return multiValue ? Array.isArray(value) && value.includes(op.value) : value === op.value;
  }

  function toggleSelect(op: Option) {
    if (disabled) return;

    if (multiValue) {
      const arr: unknown[] = Array.isArray(value) ? [...value] : [];
      const i = arr.findIndex((v) => v === op.value);
      if (i >= 0) arr.splice(i, 1);
      else arr.push(op.value);
      value = arr;
      onSelect?.(op);
      return;
    }

    value = removableOnClick && value === op.value ? undefined : op.value;
    isShow = false;
    onSelect?.(op);
  }

  function dataForOption(op: Option) {
    return { selected: isSelected(op), placeholder, ...op };
  }

  // navegação por teclado no dropdown (typeahead)
  function typeahead(key: string) {
    if (!dropElement || key.length !== 1) return;

    if (timeoutBuffer) clearTimeout(timeoutBuffer);
    bufferKeys += key;

    const children = Array.from(dropElement.children) as HTMLElement[];
    timeoutBuffer = window.setTimeout(() => (bufferKeys = ''), 1200);

    for (const el of children) {
      const v = el.getAttribute('data-option');
      if (v && v.slice(0, bufferKeys.length).toUpperCase() === bufferKeys.toUpperCase()) {
        dropElement.scrollTo({ top: el.offsetTop, behavior: 'instant' as ScrollBehavior });
        return;
      }
    }
  }
</script>

<FocusBlock
  onLostFocus={() => onLostFocus?.()}
  onGainFocus={() => onGainFocus?.()}
  onKeyDown={typeahead}
  className={focusCss}
  bind:isFocus={isShow}
>
  <MainComponent
    {placeholder}
    {disabled}
    isActive={isShow}
    hasSelection={value !== null && value !== undefined}
    optionSelected={currentSelection()}
    onClick={() => {
      isShow = !isShow;
    }}
  />

  <DropBlock isDrop={isShow} bind:divElement={dropElement} className="{dropCss} z-10 bg-white">
    {#if withSearch}
      <div
        class="my-2 flex w-[95%] flex-grow items-center justify-between self-center rounded-[4px] border border-[#D1D1D1] p-2"
      >
        <input
          bind:value={search}
          onkeydown={(e) => {
            if (e.key === 'Enter') onSearch(search);
          }}
          class="text-black-50 placeholder:text-black-900 text-body-md w-full border-none bg-transparent outline-none"
          placeholder="Pesquise por..."
        />
        <button type="button" onclick={() => onSearch(search)}>
          <img class="h-6 w-6" src="/icons/icon-pesquisa.svg" alt="Pesquisar" />
        </button>
      </div>
    {/if}

    {#if loading}
      <div class="px4 flex w-full justify-center"></div>
    {:else}
      <div class="flex flex-col gap-1 p-2">
        {#each options as op}
          <OptionComponent onClick={() => toggleSelect(op)} isSelected={isSelected(op)} data={dataForOption(op)} />
        {/each}
      </div>

      {#if options.length === 0}
        <span class="bg-white-0 p-1 text-center text-[11px] text-black dark:text-white">
          Nenhum resultado encontrado
        </span>
      {/if}
    {/if}
  </DropBlock>
</FocusBlock>
