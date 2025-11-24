<script lang="ts">
  interface Props {
    percentage: number;
    hasDisplayer?: boolean;
    size: number;
  }

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  let { percentage = $bindable(5), size = 60, hasDisplayer = true }: Props = $props();

  let offset = $derived(circumference - (percentage / 100) * circumference);
</script>

<div class="relative flex aspect-square items-center justify-center" style={`width: ${size}px; height: ${size}px;`}>
  <svg class="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r={radius} stroke="var(--color-neutral-200)" stroke-width="10" fill="transparent" />

    <circle
      cx="50"
      cy="50"
      r={radius}
      stroke="var(--color-primary-base)"
      stroke-width="10"
      fill="transparent"
      stroke-linecap="round"
      stroke-dasharray={circumference}
      stroke-dashoffset={offset}
      class="transition-[stroke-dashoffset] duration-300"
    />
  </svg>

  {#if hasDisplayer} 
    <span
        class="text-strong-950 text-label-small absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold"
    >
        {percentage.toString().padStart(2, '0')}%
    </span>
  {/if}
</div>