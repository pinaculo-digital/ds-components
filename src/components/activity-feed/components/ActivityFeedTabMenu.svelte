<script lang="ts" module>
  interface Props {
    activeTab: string;
    dividers: {
      label: string;
      count: number;
    }[][];
  }
</script>

<script lang="ts">
  let { activeTab = $bindable(), dividers }: Props = $props();
</script>

<div class="border-soft-200 bg-white-0 flex items-center gap-2 border-b px-5">
  {#each dividers as divider, i}
    <div class="flex items-center gap-2">
      {#each divider as { label, count }}
        {#if i === dividers.length - 1}
          <span class="text-sub-600 text-[12px] font-normal">|</span>
        {/if}
        <button
          class="text-label-small relative flex items-center gap-1 py-3.5 {activeTab === label
            ? 'text-strong-950'
            : 'text-sub-600'}"
          onclick={() => (activeTab = label)}
        >
          {label}
          {#if count > 0}
            <div class="bg-primary-base flex aspect-square h-4 shrink-0 items-center justify-center rounded-full">
              <p class="text-subheading-2xsmall text-white">{count}</p>
            </div>
          {/if}
          {#if activeTab === label}
            <div class="bg-primary-base absolute right-0 bottom-0 left-0 h-[1px]"></div>
          {/if}
        </button>
      {/each}
    </div>
  {/each}
</div>
