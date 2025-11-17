<script lang="ts">
    import Chart from "chart.js/auto";

    import type { ChartConfiguration, ChartData, Tick, TooltipItem } from "chart.js/auto";
    import { onMount, untrack } from "svelte";
  import { cssVar } from "../../../lib/utils/utils.svelte.js";

  
    interface Props{
          data:{
              label: string,
              value:number[], //Quantidade precisa ser a mesma que a quantidade de labels.
              bgColor:string,
          }[],
          labels:string[]

          titleFormat?:(d:TooltipItem<"line">[])=>string,
          labelFormat?: (d:TooltipItem<"line">)=>string,
          axisYFormat?: (value:string | number, index:number, ticks:Tick[]) => string
        }
      let {
        data,
        labels,
        titleFormat = (tooltipItems) => {
                const index = tooltipItems[0].dataIndex;
                return `${labels[index]}`; // Shows "Dia 1", "Dia 2", etc.
        },
        labelFormat =(tooltipItem) => {
                const dataset = tooltipItem.dataset;
                const value = tooltipItem.raw as number;
                return `${dataset.label}: R$${(value/100).toFixed(2)}`;
        },
        axisYFormat =  (value:string | number, index:number, ticks:Tick[]) => {
            return value.toString()
        }



      }:Props = $props()
      
      let ctx = $state<HTMLCanvasElement>()
      let chart = $state<Chart>()
  
      function mount(){
        if(chart){
            chart.destroy()
        }
          const d:ChartData<"line"> = {
          labels: labels,
          datasets: data.map((obj)=>{
              return{
                  label: obj.label,
                  data: obj.value,
                  fill: true,
                  barThickness:30,
                  borderWidth:2,
                  pointRadius:0,
                  tension:0.02,
                  backgroundColor: "rgba(0,0,0,0)",
                  borderRadius:0,
                  borderColor: cssVar(obj.bgColor),
                  pointBackgroundColor: 'rgba(255,255,255,0)',
                  pointBorderColor: 'rgba(0,0,0,0)',
                  pointHoverBackgroundColor: obj.bgColor,
                  pointHoverBorderColor: 'white',
                  
              }
          }) 
          };
          const config:ChartConfiguration<"line">= {
              type: 'line',
              data: d,
              options: {
                  responsive:true,
                  maintainAspectRatio: false,
                  plugins:{
                      legend:{
                          display:false
                      },
                      tooltip:{
                        callbacks:{
                            title: titleFormat,
                            label: labelFormat,
                        }
                      },
                  },
                  elements: {
                  line: {
                      borderWidth: 3
                  }
                  },
                  
                  scales:{
                    x:{
                        grid:{
                            color:cssVar("--color-soft-200"),
                        },
                    },
                    y:{
                        ticks:{
                            callback:axisYFormat,
                            maxTicksLimit:5
                        },
                        grid:{
                            color:cssVar("--color-soft-200"),                            
                        }


                    },
                  }
              },
          };
          //@ts-ignore
          chart = new Chart(ctx, config);
    }

    onMount(mount)
    $effect(() => {
        if(window && typeof window !== "undefined"){
            untrack(() => {
                setTimeout(()=>{
                    mount()
                },200)
            });
        }
    });
   </script>
  
  <div class="w-full h-full">
      <canvas id="myChart" bind:this={ctx}></canvas>
  </div>
    