<script lang="ts">
  import Chart from 'chart.js/auto';

  import type { ChartConfiguration, ChartData } from 'chart.js/auto';
  import { onMount, untrack } from 'svelte';
  import { cssVar } from '../../lib/utils/utils.svelte.js';

  interface Props {
    data: {
      label: string;
      value: number[]; //Quantidade precisa ser a mesma que a quantidade de labels.
      bgColor: string[];
    }[];
    legendas?: boolean;
    labels: string[];
    radius: number;
  }
  let { data, labels, radius, legendas = false }: Props = $props();
  let ctx = $state<HTMLCanvasElement>();
  let chart = $state<Chart>();

  function mount() {
    if (chart) {
      chart.destroy();
    }
    const d: ChartData<'doughnut'> = {
      labels: labels,
      datasets: data.map((obj) => {
        return {
          label: obj.label,
          data: obj.value,
          fill: true,
          borderWidth: 4,
          radius,
          pointRadius: 3,
          borderColor: cssVar('--white-0'),
          backgroundColor: obj.bgColor,
          pointBackgroundColor: 'rgba(255,255,255,0)',
          pointBorderColor: 'rgba(0,0,0,0)',
          pointHoverBackgroundColor: obj.bgColor,
          pointHoverBorderColor: 'white',
        };
      }),
    };

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: d,
      options: {
        rotation: -90,
        circumference: 180,
        responsive: true,
        cutout: '75%',
        maintainAspectRatio: false,
        elements: {
          line: {
            borderWidth: 3,
          },
        },
        plugins: {
          legend: {
            display: legendas,
          },
        },
      },
    };
    //@ts-ignore
    chart = new Chart(ctx, config);
  }

  onMount(mount);
  $effect(() => {
    if (window && typeof window !== 'undefined') {
      untrack(() => {
        setTimeout(() => {
          mount();
        }, 200);
      });
    }
  });
</script>

<div class="h-full w-full">
  <canvas id="myChart" bind:this={ctx}></canvas>
</div>
