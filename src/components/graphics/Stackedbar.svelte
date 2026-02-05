<script lang="ts">
  import Chart from 'chart.js/auto';

  import type { ChartConfiguration, ChartData, TooltipItem } from 'chart.js/auto';
  import { onMount, untrack } from 'svelte';
  import s from '../../lib/sanitizers/sanitizer.js';
  import { cssVar } from '../../lib/utils/utils.svelte.js';

  interface Props {
    data: {
      label: string;
      value: number[]; //Quantidade precisa ser a mesma que a quantidade de labels.
      bgColor: string;
    }[];
    labels: string[];
    format?: (context: TooltipItem<'bar'>) => string;
  }
  let {
    data,
    labels,
    format = (context) => {
      let label = context.dataset.label || '';

      return `${label}: R$ ${s.centavosToReais(context.parsed.y || 0)}`;
    },
  }: Props = $props();
  let ctx = $state<HTMLCanvasElement>();
  let chart = $state<Chart>();

  function mount() {
    if (chart) {
      chart.destroy();
    }
    const d: ChartData<'bar'> = {
      labels: labels,
      datasets: data.map((obj) => {
        return {
          label: obj.label,
          data: obj.value,
          fill: true,
          borderWidth: 0,
          pointRadius: 4,
          backgroundColor: '#DCDDE1',
          hoverBackgroundColor: '#178C7D',
          borderRadius: 6,
          borderColor: '#DCDDE1',
          hoverBorderColor: '#178C7D',
          pointBackgroundColor: 'rgba(255,255,255,0)',
          pointBorderColor: 'rgba(0,0,0,0)',
          pointHoverBackgroundColor: obj.bgColor,
          pointHoverBorderColor: '#178C7D',
        };
      }),
    };
    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: d,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: format,
            },
          },
        },
        elements: {
          line: {
            borderWidth: 3,
          },
        },

        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
              color: 'white',
            },
          },
          y: {
            display: false,
            stacked: true,
            grid: {
              display: false,
              color: cssVar('--soft-200'),
            },
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
