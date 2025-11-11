<script lang="ts" module>
  interface Props {
    opcoes?: string[];
  }

  const header: string[] = [];
</script>

<script lang="ts">
  let { opcoes = header }: Props = $props();
</script>

<thead class="bg-weak-50 w-full rounded-[8px]">
  <tr class="flex w-full items-center gap-10">
    {#each opcoes as opcao, i}
      <th class="text-sub-600 flex items-start px-6 py-2 text-[14px] font-normal {i === 0 ? 'w-[80%]' : 'w-[20%]'}">
        {opcao}
      </th>
    {/each}
  </tr>
</thead>
