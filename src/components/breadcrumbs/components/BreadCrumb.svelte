<script lang="ts" module>
  interface Props {
    urls: {
      path: string;
      label: string;
      action: () => void;
    }[]
  }
</script>

<script lang="ts">
  let { urls }: Props = $props();
  const url = new URL(window.location.href);
</script>

<div class="text-sub-600 flex items-center gap-4 text-[14px] font-medium">
  <div class="flex items-center gap-3">
    {#each urls as {path, label, action}, i}
      <button class={path === url.pathname ? 'text-strong-950' : ''} onclick={action}>
        {label}
      </button>
      {#if i < urls.length - 1}
        /
      {/if}
    {/each}
  </div>
</div>
