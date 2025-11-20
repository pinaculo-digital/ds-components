<script lang="ts" module>
  import { fileManager } from "../../../lib/actions/file.svelte.js";
  import Button from "../../button/components/Button.svelte";

  interface Props{ 
    tema?: 'normal' | 'minimal';
  }
</script>

<script lang="ts">
  let { tema = 'normal' }:Props = $props();
  let data64 = $state('');

  const triggerFileUpload = () => {
    document.getElementById('fileUpload')?.click();
  };
</script>

<div class="flex flex-col">
  <div class="flex items-start gap-4">
    <button
      id="fileUpload"
      class="bg-sub-300 aspect-square w-[64px] overflow-hidden rounded-full hover:brightness-110"
      aria-label="perfil imagem"
      use:fileManager={{
        accept: '.png,.jpg,.jpge,.webp',
        multipleFiles: false,
      }}
      onfileupload={(e:any) => {
        data64 = e.detail[0].data64;
      }}
    >
      {#if data64}
        <img src={data64} alt="Perfil" class="h-full object-cover" />
      {:else}
        <img src="/icons/usuario-default.svg" alt="usuario default" />
      {/if}
    </button>

    <div class="flex {tema === 'normal' ? 'flex-col' : ''}">
      {#if tema === 'normal'}
        <b class="text-strong-950 text-[16px]">Inserir imagem</b>
        <span class="text-sub-600 mt-[3px] text-[14px]">Minimo: 400x400, Formatos: JPG,PNG,WEBP</span>
      {/if}
      {#if data64}
        <div class="mt-2 flex flex-wrap items-center gap-3">
          <Button bgColor="red-300" textColor='white' click={() => (data64 = '')} label='>Remover'/>
          <Button bgColor="red-300" textColor='white' click={triggerFileUpload} label='Trocar imagem'/>
        </div>
      {:else}
        <div class="mt-2 flex items-center">
          <Button bgColor="red-300" textColor='white' click={triggerFileUpload} label='Adicionar imagem'/>
        </div>
      {/if}
    </div>
  </div>
</div>
