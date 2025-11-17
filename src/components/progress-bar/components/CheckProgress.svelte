<script lang="ts" module>
  interface Props {
    steps: {
      label: string;
      pass: boolean;
      color: string;
    }[];
    label: string;
  }
</script>

<script lang="ts">
  let { steps, label }: Props = $props();

  let concluidos = $derived(steps.filter((obj) => obj.pass).length);
</script>

<div class="text-sub-600 flex flex-col gap-4 text-[12px] font-normal">
  <div class="flex items-center gap-4">
    {#each steps as step, i}
      <div class="h-1 flex-grow rounded-[4px] {concluidos > i ? step.color : 'bg-soft-200'}"></div>
    {/each}
  </div>
  <span>{label}</span>
  {#each steps as step, i}
    <div class="flex items-center gap-1">
      <div
        class="{step.pass
          ? 'bg-success-base'
          : 'bg-soft-200'} flex aspect-square w-[14px] shrink-0 items-center justify-center rounded-full"
      >
        {#if step.pass}
          <!-- <SvgCheckMin
            props={{
              width: 9,
            }}
          /> -->
        {:else}
          <!-- <SvgX
            props={{
              width: 7,
            }}
          /> -->
        {/if}
      </div>

      {step.label}
    </div>
  {/each}
</div>
