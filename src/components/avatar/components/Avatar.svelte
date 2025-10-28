<script lang="ts" module>
  import { tooltip } from '../../../lib/actions/title.svelte';
  interface Props {
    src: string | null;
    name: string;
    size?: string;
    textSize?: string;
    hasTitle?: boolean;
    rounded?: string;
    placeholder?: 'icon' | 'letter' | 'skyscrapper';
  }
</script>

<script lang="ts">
  let {
    src = '',
    name = '',
    size = 'w-10',
    placeholder = 'letter',
    textSize = 'text-[16px]',
    hasTitle = false,
    rounded = 'rounded-full',
  }: Props = $props();

  const randomColor = () => {
    const colors = [
      'bg-purple-200 text-purple-950 fill-purple-950',
      'bg-sky-200 text-sky-950 fill-sky-950',
      'bg-blue-200 text-blue-950 fill-blue-950',
      'bg-yellow-200 text-yellow-950 fill-yellow-950',
      'bg-red-200 text-red-950 fill-red-950',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  const randomColorBuild = () => {
    const colors = [
      'fill-white bg-gradient-to-t from-orange-400 to-orange-300',
      'fill-white bg-gradient-to-t from-green-400 to-green-300',
      'fill-white bg-gradient-to-t from-red-400 to-red-300',
      'fill-white bg-gradient-to-t from-gray-400 to-gray-300',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  let esquema = $state<string>('');

  if (placeholder === 'skyscrapper') {
    esquema = randomColorBuild();
  } else {
    esquema = randomColor();
  }
</script>

<div
  class="relative z-0 flex aspect-square overflow-hidden {rounded !== 'example' ? rounded : 'rounded-full'} {size ===
  'example'
    ? 'h-[40px] w-[40px]'
    : size} sk"
  use:tooltip={{ text: hasTitle ? name : null, posTriangulo: 'bottom-middle' }}
>
  {#if src && src !== 'example'}
    <img {src} class="w-full object-cover" alt="" />
  {:else}
    <div
      class="m-0 flex items-center justify-center overflow-hidden leading-0 select-none {textSize} h-full w-full {esquema}"
    >
      {#if placeholder === 'letter'}
        {name && name.length > 0 ? name[0].toUpperCase() : '?'}
      {:else if placeholder === 'skyscrapper'}
        {@const tipo = Math.floor(Math.random() * 100) > 49 ? 'rounded' : 'rect-rounded'}
        {#if tipo === 'rounded'}
          <div class="translate-x-[1px] translate-y-[12px]">
            <!-- <SvgBuildRounded fillTailwind={esquema} /> -->
          </div>
        {:else}
          <div class="translate-x-[1px] translate-y-[12px]">
            <!-- <SvgBuildRect fillTailwind={esquema} /> -->
          </div>
        {/if}
      {:else}
        <!-- <SvgDefaultUser
          props={{
            class: esquema,
            style: 'background:none',
          }}
        /> -->
      {/if}
    </div>
  {/if}
</div>
