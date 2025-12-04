<script lang="ts" module>
  interface Props {
    checked: boolean;
    disabled?: boolean;
  }
</script>

<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  let { checked, disabled = false }: Props = $props();

  const styleBox = (checked: boolean) => {
    if (checked) {
      return 'bg-primary-base border-transparent';
    }
    return 'bg-transparent border-soft-200';
  };
</script>

<div
  class="{disabled
    ? 'pointer-events-none opacity-50'
    : ''} flex aspect-square h-4 shrink-0 grow-0 items-center justify-center overflow-hidden rounded-sm border-2 {styleBox(
    checked
  )}"
>
  {#if checked}
    <Icon type="check-line" fillColor="white" />
  {/if}
</div>

<!-- 
  @component
  Componente deve ser utilizado dentro de um botão. 
  Acople na classe no botão o nome "group", para detectar efeitos de hover
  
  Uso:
    ```tsx
  <button class="group">
    <Check checked={outsideChecked}/>
  </button>
-->
