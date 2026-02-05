<script lang="ts" module>
  import { appendFiles } from "../../lib/utils/helpers.js";
  import { BuildedInput } from "../../lib/utils/reflector.svelte.js";

  interface Props {
    data: BuildedInput<(File | null)[]>;
    size?: string;
    multiple?: boolean;
    type: string; // imagens, imagem, vídeo, vídeos, arquivo, arquivos e etc.
  }
</script>

<script lang="ts">
  let { data = $bindable(), size = 'w-[200px] h-[200px]', multiple = false, type }: Props = $props();

  let files = $state<FileList>();
  let files64 = $derived<string | undefined>(files ? URL.createObjectURL(files[0]) : undefined);
  // @ts-ignore
  const accept = $derived(data.meta?.acceptedFormats?.map((format) => ` .${format}`).toString() ?? '');

  let isDragging = $state(false);
  const handleDragEnter = () => (isDragging = true);
  const handleDragLeave = () => (isDragging = false);
  function handleDrag(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  async function handleDrop(event: DragEvent) {
    handleDrag(event);
    isDragging = false;

    if (!event.dataTransfer) return;
    files = event.dataTransfer.files;

    files = appendFiles({ files, data });
  }
</script>

<div
  class="border-soft-200 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed {isDragging &&
    'bg-soft-200 cursor-copy'} {size}"
  ondragenter={handleDragEnter}
  ondragleave={handleDragLeave}
  ondragover={handleDrag}
  ondrop={handleDrop}
  role="application"
>
  <!-- <SvgUpload /> -->
  <div class="pointer-events-none flex flex-col items-center justify-center gap-1.5 text-center">
    {#if !isDragging}
      <p class="text-14 text-strong-950 font-medium">
        Arraste ou selecione um {multiple ? 'ou mais arquivos' : 'arquivo'} ({type}).
      </p>
      <!-- <p class="text-12 text-sub-600 font-medium">PNG ou JPG, até {data.meta?.maxHintMB} MB.</p> -->
    {:else}
      <p class="text-14 text-strong-950 font-medium">Arraste os arquivos aqui</p>
    {/if}
  </div>

  {#if !isDragging}
    <input
      {accept}
      {multiple}
      bind:files
      onchange={() => appendFiles({ files, data })}
      class="text-sub-600 border-soft-200 cursor-pointer rounded-[8px] border px-6 py-1.5 text-[14px] font-medium"
      type="file"
    />
  {/if}
</div>

{#if files64}
  <div class="group relative w-full {size}">
    <div
      class="pointer-events-none absolute right-0 m-3 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
    >
      <button class="text-sub-600 border-soft-200 bg-white-0 rounded-md border p-[2px] px-[4px] text-[12px]">
        Deletar
      </button>
    </div>
    <img src={files64} alt="Imagem selecionada" class="h-full overflow-hidden rounded-xl object-cover" />
  </div>
{/if}
