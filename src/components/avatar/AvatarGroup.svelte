<script lang="ts">
  import Avatar from './Avatar.svelte';

  interface Props {
    size?: 80 | 72 | 64 | 56 | 48 | 40 | 32 | 24 | 20;
    avatars?: { src: string | null; name: string }[];
  }

  const mock = Array(10).fill({ src: null, name: 'Wei Chen' });

  let { avatars = mock, size = 80 as 80 }: Props = $props();

  let gap = $state<16 | 12>(size <= 48 ? 12 : 16);
</script>

<div class="ml-4 flex items-center">
  {#each avatars as { src, name }, i}
    {#if i < 3}
      <div class="w-fit rounded-full border-2 border-white" style="margin-left: -{gap}px">
        <Avatar {src} {name} {size} />
      </div>
    {/if}
  {/each}
  {#if avatars.length > 4}
    <div
      class="z-9 flex aspect-square items-center justify-center rounded-full bg-neutral-500"
      style="width: {size}px; margin-left: -{gap}px"
    >
      <p class="text-strong-950" style="font-size: {size / 2}px">+{avatars.length - 3}</p>
    </div>
  {/if}
</div>
