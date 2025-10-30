<script lang="ts" module>
  import Label from '$components/assets/labels/Label.svelte';
  import { fileManager } from '../../../lib/actions/file.svelte.js';

  interface Props {
    formImage: {
      file: File | null;
      data64: string;
    };
    label?: string;
    required?: boolean;
    size?: string;
  }
</script>

<script lang="ts">
  let { formImage = $bindable(), label = 'Imagem da Variável', required, size = 'max-h-52 min-h-52' }: Props = $props();
</script>

<div class="flex flex-col gap-4 rounded-xl object-cover object-center">
  <div class="flex items-center justify-between">
    <Label {label} {required} />
    {#if formImage.data64}
      <button onclick={() => (formImage.data64 = '')} class="text-12 text-error-base font-medium underline">
        Excluir
      </button>
    {/if}
  </div>

  {#if formImage.data64}
    <img
      src={formImage.data64}
      alt="Imagem selecionada"
      class="w-full self-start rounded-xl object-cover {size} overflow-hidden"
    />
  {:else}
    <div class="border-soft-200 flex flex-col items-center gap-4 rounded-2xl border border-dashed p-8">
      <!-- <SvgUpload /> -->
      <div class="flex flex-col items-center justify-center gap-1.5 text-center">
        <p class="text-14 text-strong-950 font-medium">Arraste ou selecione a imagem.</p>
        <p class="text-12 text-sub-600 font-medium">PNG ou JPG, até 5 MB.</p>
      </div>
      <button
        class="text-sub-600 border-soft-200 cursor-pointer rounded-[8px] border px-6 py-1.5 text-[14px] font-medium"
        use:fileManager={{
          accept: '.png,.jpg,.jpeg,.webp',
          multipleFiles: false,
        }}
        onfileupload={(e) => {
          formImage.data64 = e.detail[0].data64;
          formImage.file = e.detail[0].file;
        }}
      >
        Procurar
      </button>
    </div>
  {/if}
</div>
