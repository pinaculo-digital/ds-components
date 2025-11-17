<script lang="ts">
  interface Props {
    data: { timeStamp: string; value: number }[];
    loading?: boolean;
  }

  let { data, loading }: Props = $props();
</script>

<div
  class="w-full flex gap-1"
  style="grid-template-columns: repeat({data.length}, minmax(0, 1fr));"
  data-sk="s"
  class:sk-on={loading}>
  {#each data as d}
    {@const bg = () => {
      if (d.value === 0) return 'bg-success-base';
      else return 'bg-error-base';
    }}
    <div
      class="grow cursor-pointer aspect-[4/7] h-full rounded-[2px] group border border-transparent hover:border-strong-950/70 {bg()} relative">
      <div
        class="opacity-0 pointer-events-none group-hover:opacity-100 z-5 p-3 px-4 top-[50%] border border-soft-200 shadow-lg absolute bg-white-0 rounded-xl flex flex-col">
        <span class="text-14 text-sub-600 whitespace-nowrap"> Entre {d.timeStamp.replace('-', ' e ')}</span>
        <b class="text-18 text-strong-950 whitespace-nowrap"> {d.value} erro(s) registrado(s) </b>
      </div>
    </div>
  {/each}
</div>
