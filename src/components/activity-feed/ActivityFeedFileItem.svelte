<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  interface Props {
    file?: File;
  }

  const mock = new File(['%PDF-1.4\n%âãÏÓ\n'], 'example.pdf', { type: 'application/pdf' });

  let { file = mock }: Props = $props();
  let isHover = $state(false);

  function getSizeFile() {
    const unity = file.size / 1024 / 1024 > 1 ? 'MB' : 'KB';
    return (file.size / 1024).toFixed(2) + unity;
  }

  async function donwload() {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>

<button
  onclick={donwload}
  onmouseenter={() => (isHover = true)}
  onmouseleave={() => (isHover = false)}
  class="border-soft-200 group flex w-fit items-center overflow-hidden rounded-lg border hover:cursor-pointer"
>
  <div class="flex items-center gap-1.5 px-1.5 py-1">
    <Icon opticalSize={20} type="attachment-2" fillColor={'neutral-400'} />
    <p class="text-label-small text-sub-600">
      {file.name} <span class="text-paragraph-small text-soft-400">({getSizeFile()})</span>
    </p>
  </div>

  <div class="group-hover:bg-weak-50 border-soft-200 flex items-center justify-center border-l p-1.25">
    <div class="-ml-1">
      <Icon opticalSize={20} type="download-2-line" fillColor={isHover ? 'neutral-600' : 'neutral-400'} />
    </div>
  </div>
</button>
