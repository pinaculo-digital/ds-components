<script lang="ts">
  import CompactButton from '../buttons/CompactButton.svelte';
  import Label from '../../assets/labels/Label.svelte';

  interface Props {
    form: string[];
  }

  let { form = $bindable() }: Props = $props();
  let inputValue = $state('');

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addToForm();
    }
  }

  function addToForm() {
    if (inputValue.trim()) {
      form = [...form, inputValue.trim()];
      inputValue = '';
    }
  }

  function removeFromForm(index: number) {
    form = form.filter((_, i) => i !== index);
  }
</script>

<div class="flex flex-col gap-1">
  <Label label={'Variações do atributo'} required={true} extraTip={'String'} />
  <input
    class="border-soft-200 apply-class-focus input text-14 flex rounded-[10px] border p-2.5 font-normal outline-none"
    placeholder="Ex: vermelho"
    type="text"
    bind:value={inputValue}
    onkeydown={handleKeyDown}
    onblur={addToForm}
  />

  {#if form.length > 0}
    <div class="mt-2 flex flex-wrap gap-4">
      {#each form as item, i}
        <div class="border-soft-200 flex items-center rounded-[10px] border px-2 py-1">
          <span class="text-sub-600 text-12 font-medium">{item}</span>
          <CompactButton icon="close-line" onClick={() => removeFromForm(i)} />
        </div>
      {/each}
    </div>
  {/if}
</div>
