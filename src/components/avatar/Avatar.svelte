<script lang="ts" module>
  interface Props {
    size?: 80 | 72 | 64 | 56 | 48 | 40 | 32 | 24 | 20;
    placeholder?: 'icon' | 'letter' | 'skyscrapper';
    src?: string | null;
    name: string;
  }
</script>

<script lang="ts">
  const defaultProps = {
    src: null,
    name: 'Wei Chen',
    size: 80 as 80,
  };

  let {
    src = defaultProps.src,
    name = defaultProps.name,
    size = defaultProps.size,
    placeholder = 'letter',
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

  let hasError = $state<boolean>(false);
  let esquema = $state<string>('');

  if (placeholder === 'skyscrapper') {
    esquema = randomColorBuild();
  } else {
    esquema = randomColor();
  }
</script>

<div class="sk relative z-0 flex aspect-square overflow-hidden rounded-full" style="width: {size}px">
  {#if src && !hasError}
    <img {src} class="w-full object-cover" alt="" onerror={() => (hasError = true)} />
  {:else}
    <div
      class="m-0 flex h-full w-full items-center justify-center overflow-hidden leading-0 select-none {esquema}"
      style="font-size: {size / 2}px; line-height: 100%!important;"
    >
      {#if placeholder === 'letter'}
        {name && name.length > 0 ? name[0].toUpperCase() : '?'}
      {:else if placeholder === 'skyscrapper'}
        <div class="translate-x-[1px] translate-y-[12px]"></div>
      {/if}
    </div>
  {/if}
</div>
