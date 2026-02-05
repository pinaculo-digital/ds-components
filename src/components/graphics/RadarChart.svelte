<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';
  import Chart from 'chart.js/auto';

  import type { ChartConfiguration, ChartData } from 'chart.js/auto';
  import { onMount, untrack } from 'svelte';
  import { cssVar } from '../../lib/utils/utils.svelte.js';
  import { isDesktop } from '../../assets/settings/media.svelte.js';

  interface Props {
    data?: {
      label: string;
      value: number[];
      bgColor: string;
    }[];
    labels?: string[];
    tooltips?: string[];
  }

  const pillars = [
  {
    icon: 'tools-line',
    title: 'Direção, governança e gestão da manutenção',
  },
  {
    icon: 'settings-3-line',
    title: 'Engenharia da manutenção, confiabilidade e risco',
  },
  {
    icon: 'node-tree',
    title: 'Execução, planejamento e controle da manutenção',
  },
  {
    icon: 'clipboard-line',
    title: 'Materiais, suprimentos e informação',
  },
  {
    icon: 'team-line',
    title: 'Pessoas, cultura, desempenho e melhoria',
  },
];

  const labelsMock = ['Pilar 1', 'Pilar 2', 'Pilar 3', 'Pilar 4', 'Pilar 5'];

  const tooltipsMock = pillars.map((p) => p.title);

  const dataMock = [
    {
      label: 'Avaliação Atual',
      value: [8, 9, 6, 7, 10],
      bgColor: '--green-500',
    },
  ];

  let { data = dataMock, labels = labelsMock, tooltips = tooltipsMock }: Props = $props();
  let mobileLayout = $derived(!$isDesktop);

  let ctx = $state<HTMLCanvasElement>();
  let chart = $state<Chart>();

  function mount() {
    if (chart) {
      chart.destroy();
    }
    if (!ctx) return;

    const d: ChartData<'radar'> = {
      labels: labels,
      datasets: data.map((obj) => ({
        label: obj.label,
        data: obj.value,
        fill: true,
        backgroundColor: cssVar('--alpha-green-10'),
        borderColor: cssVar(obj.bgColor),
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: cssVar(obj.bgColor),
        tension: 0.02,
      })),
    };

    const config: ChartConfiguration<'radar'> = {
      type: 'radar',
      data: d,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          r: {
            min: 0,
            max: 10,
            ticks: {
              display: false,
              stepSize: 2,
            },
            grid: {
              color: cssVar('--neutral-200'),
              lineWidth: 1,
            },
            angleLines: {
              display: true,
              color: cssVar('--neutral-200'),
              lineWidth: 1,
            },
            pointLabels: { display: false },
          },
        },
      },
    };

    chart = new Chart(ctx, config);
  }

  onMount(mount);

  $effect(() => {
    const _deps = { data, labels };
    untrack(() => {
      setTimeout(() => mount(), 50);
    });
  });

  function getPosition(index: number, total: number) {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const compensed = mobileLayout ? 42 : 30;

    const radius = index === 0 ? 42 : compensed;

    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);

    return `left: ${x}%; top: ${y}%;`;
  }
</script>

<div class="relative flex h-full w-full items-center justify-center">
  <div class="h-[60%] {mobileLayout ? 'w-[60%]' : 'w-[40%]'}">
    <canvas bind:this={ctx}></canvas>
  </div>

  {#each labels as pilar, i}
    <div class="group absolute -translate-x-1/2 -translate-y-1/2" style={getPosition(i, labels.length)}>
      {#if tooltips[i]}
        <div
          class="text-label-x-small absolute bottom-full left-1/2 z-11 mb-2 hidden w-max max-w-[150px] -translate-x-1/2 rounded bg-neutral-600 p-2 text-white shadow-lg group-hover:block"
        >
          {tooltips[i]}
          <div
            class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-neutral-600"
          ></div>
        </div>
      {/if}

      <div
        class="z-9 flex cursor-help items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 shadow-sm transition-colors hover:border-green-400"
      >
        <span class="text-label-x-small text-sub-600 font-bold tracking-wider whitespace-nowrap">
          {pilar}
        </span>
        <Icon type="information-2-fill" fillColor="neutral-400" opticalSize={16} />
      </div>
    </div>
  {/each}
</div>
