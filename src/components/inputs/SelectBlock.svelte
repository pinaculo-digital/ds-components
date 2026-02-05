<script lang="ts">
  import MainDefault from '../../assets/wrappers/MainDefault.svelte';
  import MainOption from '../../assets/wrappers/MainOption.svelte';
  import FocusBlock from '../dropdown/FocusBlock.svelte';
  import DropBlock from '../dropdown/DropBlock.svelte';
  
  import type { MainComponentType, Option, OptionComponentType } from '../../lib/utils/types.js';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';
  import type { Component } from 'svelte';
  
  interface Props {
    multiValue?: boolean;
    dropCss?: string;
    focusCss?: string;
    options: Option[];
    MainComponent?: Component<MainComponentType>;
    OptionComponent?: Component<OptionComponentType>;
    value?: any;
    placeholder: string;
    loading?: boolean;
    withSearch?: boolean;
    hasError?: boolean;
    removableOnClick?: boolean;
    disabled?: boolean;
    onSelect?: (op: Option) => void;
    onSearch?: (v: string) => void;
    onLostFocus?: VoidFunction;
    onGainFocus?: VoidFunction;
    icon?: IconName;
  }

  let {
    multiValue = false,
    onSearch = () => {},
    onSelect = () => {},
    dropCss = 'absolute top-[120%] left-0 w-full max-h-[200px] rounded-lg overflow-y-auto bg-transparent border border-[rgba(0,0,0,.05)] dark:border-none outline-none shadow-lg dark:shadow-none flex flex-col',
    MainComponent = MainDefault,
    OptionComponent = MainOption,
    hasError,
    options = $bindable(),
    value = $bindable(),
    focusCss = 'relative outline-none w-full',
    loading,
    onLostFocus,
    onGainFocus,
    withSearch,
    placeholder,
    removableOnClick = true,
    disabled = false,
    icon,
  }: Props = $props();

  let timeoutBuffer: number | null;
  let dropElement = $state<HTMLDivElement>();
  let isShow = $state<boolean>(false);
  let search = $state<string>('');
  let bufferKeys = $state('');

  function opSelected(s: any) {
    if (value === undefined || value === null || value.length === 0) return null;

    if (multiValue) {
      const filtro = options.filter((op) => value.some((obj: any) => obj === op.value));
      if (filtro.length > 0) return filtro;
      return null;
    }
    const op = options.find((op) => op.value === value);
    if (!op) {
      return null;
    }
    return op;
  }

  function isOptionIncluded(op: Option, v: any) {
    if (multiValue) {
      if (value.some((obj: any) => obj === op.value)) {
        return true;
      }
      return false;
    }
    return op.value === value;
  }

  function select(op: Option) {
    if (multiValue) {
      if (!value) {
        value = [...value, op.value];
      }
      if (value.some((obj: any) => obj === op.value)) {
        value = value.filter((obj: any) => obj !== op.value);
        return onSelect(op);
      }
      value = [...value, op.value];
      return onSelect(op);
    }

    if (op.value === value && removableOnClick === true) {
      value = undefined;
    } else {
      value = op.value;
    }

    isShow = false;
    return onSelect(op);
  }

  function getDataOp(index: number, v: any) {
    return {
      selected: isOptionIncluded(options[index], value),
      placeholder,
      ...options[index],
    };
  }

  function irParaOptionParecida(key: string) {
    if (!dropElement) return;
    if (key.length > 1) return;
    if (timeoutBuffer) {
      clearTimeout(timeoutBuffer);
    }
    bufferKeys += key;

    const childs = Array.from(dropElement.children);

    timeoutBuffer = setTimeout(() => {
      clearKeys();
    }, 1200);

    for (const child of childs) {
      const v = child.getAttribute('data-option');
      if (v && v.slice(0, bufferKeys.length).toUpperCase() === bufferKeys.toUpperCase()) {
        const tmp = child as HTMLButtonElement;
        const childPosition = tmp.offsetTop;
        dropElement!.scrollTo({
          top: childPosition,
          behavior: 'instant',
        });
        return;
      }
    }
  }

  const clearKeys = () => {
    bufferKeys = '';
  };

  $effect(() => {
    if (onLostFocus && isShow === false) {
    }
  });
</script>

<!-- 
  @component
  Componente contém todas as logicas possiveis que um select pode ter
  para usa-lo.  
  
  Você deve criar dois componentes.

  - MainComponent: Ele vai ser a face do seu select, aquele botão que você clica para abrir o dropdown
  
  - OptionComponent: Ele vai ser o componente que representa uma OPTION dentro do dropdown.

  Para cada componente, pegue como exemplo a pasta /assets/selects, nele vocÊ vai encontrar dois arquivos exemplos e tipados desses componentes,
  estude com calma, vai valer a pena reaproveitar a lógica disso aqui.
   
  Para o OptionComponent, ele representa cada item da array de "options" passado no SelectBlock, você obrigatoriamente precisa de uma label e um value em cada
  item da array, porem pode passar qualquer outra propriedade adicional para customizar esse componente.
  
    ```tsx
  Ex: [{label:"texto",value:1,xyz:"adicional"}].
    ```
  Usos:
    - Você pode dar um bind:value para rastrear a opção selecionada até o momento, lembrando que dentro do array de opções, a key "value" deve ser um valor unico, como um
    id por exemplo
    - Caso não queira usar bind, por motivos de logica, você pode usar o props onSelect que vai enviar a opção que você acabou de selecionar

    Propriedades:
    - multivalue: Caso seja possivel selecionar multiplos valores do select, habilite esse props
    - removableOnClick: Caso você queira que a opção seja desmarcada ao clicar nela, habilite esse props
    - disabled: Para desabilitar o select, lembre de usar essa mesma variavel no MainComponent!
    - dropCss: Por default, temos uma div absoluta que fica logo abaixo do MainComponent, caso queira alterar o css dela para mudar a posição ou outras
    propriedades, sinta-se livre para usa-la.
    - focusCss: Por default essa classe só é relativa, ela engloba todos os componentes dentro de uma div


  
  Uso:
    ```tsx
    <SelectBlock placeholder="Selecione" options={ArrayOfOptions} MainComponent={c} OptionComponent={d} />

-->
<FocusBlock
  onLostFocus={() => {
    if (onLostFocus) {
      onLostFocus();
    }
  }}
  onGainFocus={() => {
    if (onGainFocus) {
      onGainFocus();
    }
  }}
  onKeyDown={irParaOptionParecida}
  className={focusCss ?? ''}
  bind:isFocus={isShow}
>
  <MainComponent
    {hasError}
    hasSelection={value !== null && value !== undefined ? true : false}
    {icon}
    {placeholder}
    {disabled}
    isActive={isShow}
    optionSelected={opSelected(value)}
    onClick={() => {
      isShow = !isShow;
    }}
  />

  <DropBlock isDrop={isShow} bind:divElement={dropElement} className="{dropCss} z-10 bg-white-0 min-w-[110px]">
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
        <button onclick={() => onSearch(search)}>
          <img class="h-6 w-6" src="/icons/icon-pesquisa.svg" alt="" />
        </button>
      </div>
    {/if}
    {#if loading}
      <div class="flex w-full justify-center p-4"></div>
    {:else}
      {#each options as op, i}
        <OptionComponent
          onClick={() => {
            select(op);
          }}
          isSelected={isOptionIncluded(op, value)}
          data={getDataOp(i, value)}
        />
      {/each}
      {#if options.length === 0}
        <span class="bg-white-0 p-1 text-center text-[11px] text-black dark:text-white"
          >Nenhum resultado encontrado</span
        >
      {/if}
    {/if}
  </DropBlock>
</FocusBlock>
