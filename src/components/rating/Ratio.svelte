<script lang="ts" module>
  interface Props {
    checked: boolean;
    disabled?: boolean;
  }
</script>

<script lang="ts">
  let { checked, disabled = false }: Props = $props();

  const styleBox = (checked: boolean) => {
    if (checked) {
      return 'bg-primary-base border-transparent group-hover:bg-primary-darker';
    }
    return 'shadow-lg  bg-transparent border-strong-950/5 group-hover:border-primary-base';
  };
</script>

<!-- 
  @component
  Componente deve ser utilizado dentro de um botão. 
  Acople na classe no botão o nome "group", para detectar efeitos de hover
  
  Uso:
    ```tsx
  <button class="group">
    <Ratio checked={outsideChecked}/>
  </button>
-->

<div
  class="group flex aspect-square w-4 shrink-0 items-center justify-center rounded-full
border-2 {styleBox(checked)}"
>
  {#if checked}
    <div class="aspect-square w-2 rounded-full bg-white"></div>
  {/if}
</div>
