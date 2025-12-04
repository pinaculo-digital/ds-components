<script lang="ts">
  import StatusBall from '../../assets/labels/StatusBall.svelte';

  interface Props {
    dataset: {
      label: string;
      bg: string;
      value: number;
    }[];
  }
  let { dataset }: Props = $props();

  let totalValue = $derived.by(() => {
    return dataset.reduce((sum, item) => sum + item.value, 0);
  });
</script>

<div class="flex w-full flex-col gap-2">
  <div class="flex w-full items-center gap-2">
    {#each dataset as data}
      {@const percentual = (data.value * totalValue) / 100}
      <div
        class="group relative flex h-[10px] cursor-pointer justify-center rounded-[2px] {data.bg} "
        style="width:{percentual * 100}%;"
      >
        <div
          class="bg-white-0 border-soft-200 pointer-events-none absolute rounded-lg border px-4 py-1 text-[13px] font-medium opacity-0 shadow-md group-hover:translate-y-[-36px] group-hover:opacity-100"
        >
          {data.value} Produtos
        </div>
      </div>
    {/each}
  </div>
  <div class="flex flex-wrap items-center gap-5">
    {#each dataset as data}
      <StatusBall bg={data.bg} label={data.label} />
    {/each}
  </div>
</div>
