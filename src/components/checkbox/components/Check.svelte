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
      return 'bg-primary-base border-transparent';
    }
    return 'bg-transparent border-soft-200';
  };
</script>

<div class="flex aspect-square w-4 items-center justify-center rounded-sm border-2 {styleBox(checked)}">
  {#if checked}
    <!-- <SvgCheckMin /> -->
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
