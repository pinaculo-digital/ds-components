<script lang="ts" module>
  import { fileManager } from '../../lib/actions/file.svelte.js';
  import Avatar from '../avatar/Avatar.svelte';

  interface Props {
    formImage: {
      file: File | null;
      data64: string;
    };
    src?: string;
    name?: string;
  }
</script>

<script lang="ts">
  let { formImage = $bindable(), src, name }: Props = $props();
</script>

<button
  class="bg-sub-300 relative aspect-square h-[40px] w-[40px] shrink-0 rounded-full hover:brightness-110"
  aria-label="perfil imagem"
  use:fileManager={{
    accept: '.png,.jpg,.jpeg,.webp',
    multipleFiles: false,
  }}
  onfileupload={(e) => {
    formImage.data64 = e.detail[0].data64;
    formImage.file = e.detail[0].file;
  }}
>
  <div
    class="{formImage.data64 ? 'bg-faded-dark border-white-0' : 'bg-faded-base border-white-0'}
    absolute top-0 right-[-2px] z-50 flex aspect-square h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full border"
  >
    {#if formImage.data64}
      <!-- <SvgX props={{ width: 6, fill: 'white' }} /> -->
    {:else}
      <!-- <SvgAdd props={{ width: 8, fill: 'white' }} /> -->
    {/if}
  </div>
  <div class="h-full w-full overflow-hidden rounded-full">
    {#if formImage.data64}
      <img src={formImage.data64} alt="Perfil" class="h-full object-cover" />
    {:else if src && name}
      <Avatar {src} {name} />
    {:else}
      <img src="/icons/usuario-default.svg" alt="usuario default" />
    {/if}
  </div>
</button>
