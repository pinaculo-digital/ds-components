<script lang="ts">
  import ColorPicker from 'svelte-awesome-color-picker';

  interface Props {
    value: string;
  }

  let { value = $bindable() }: Props = $props();
</script>

<div class="border-soft-200 text-14 items-center gap-4 rounded-lg border p-2 px-2 leading-0">
  <ColorPicker
    label="Selecione uma cor"
    onInput={(op) => {
      if (op && op?.hex) value = op.hex;
    }}
    hex={value}
    --input-rounded="2px"
    --input-size="10px"
  />
</div>
