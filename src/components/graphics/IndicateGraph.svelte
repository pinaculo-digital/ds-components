<script lang="ts">
  import Chart from 'chart.js/auto';
  import type { ChartConfiguration, ChartData } from 'chart.js/auto';
  import { onMount, untrack } from 'svelte';
  import { cssVar } from '../../lib/utils/utils.svelte.js';

  interface Props {
    userNote?: number;
    categories?: string[];
    values?: number[];
    activeCategory?: string;
  }

  let {
    userNote = 5,
    categories = ['Inicial', 'Aprendizado', 'Padronizado', 'Gerenciado', 'Otimizado'],
    values = [5, 10, 5, 8, 9],
    activeCategory = 'Otimizado',
  }: Props = $props();

  let ctx = $state<HTMLCanvasElement>();
  let chart = $state<Chart>();

  let activeIndex = $derived(categories.indexOf(activeCategory) !== -1 ? categories.indexOf(activeCategory) : 0);

  const userNoteLinePlugin = {
    id: 'userNoteLine',
    afterDraw: (chart: any) => {
      const {
        ctx,
        chartArea: { left },
        scales: { x, y },
      } = chart;

      const yPos = y.getPixelForValue(userNote);
      const xPosActiveBar = x.getPixelForValue(categories[activeIndex]);

      ctx.save();

      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(left, yPos);
      ctx.lineTo(xPosActiveBar, yPos);
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.arc(xPosActiveBar, yPos, 3, 0, Math.PI * 2);
      ctx.fill();

      const label = `Nota: ${userNote}`;
      ctx.font = 'bold 12px sans-serif';
      const textWidth = ctx.measureText(label).width;
      const rectWidth = textWidth + 20;
      const rectHeight = 26;

      ctx.fillStyle = '#222';
      ctx.beginPath();
      ctx.roundRect(left - rectWidth, yPos - rectHeight / 2, rectWidth, rectHeight, 5);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.fillText(label, left - rectWidth + 10, yPos + 4);

      ctx.restore();
    },
  };

  function mount() {
    if (chart) chart.destroy();
    if (!ctx) return;

    const backgroundColors = categories.map((_, i) => (i === activeIndex ? cssVar('--color-primary-base') : '#e5e5e5'));

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [
          {
            data: values,
            backgroundColor: backgroundColors,
            borderRadius: 8,
            borderSkipped: false,
            barPercentage: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: { left: 70, right: 20 },
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: {
              color: (c) => (c.index === activeIndex ? cssVar('--color-primary-base') : '#999'),
              font: { size: 12, weight: (c) => (c.index === activeIndex ? 'bold' : 'normal') },
            },
          },
          y: {
            display: false,
            min: 0,
            suggestedMax: Math.max(...values, userNote) + 2,
          },
        },
      },
      plugins: [userNoteLinePlugin],
    };

    chart = new Chart(ctx, config);
  }

  onMount(mount);

  $effect(() => {
    const _deps = { userNote, values, activeCategory };
    untrack(() => {
      setTimeout(mount, 50);
    });
  });
</script>

<div class="h-full w-full">
  <canvas bind:this={ctx}></canvas>
</div>
