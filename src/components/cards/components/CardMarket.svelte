<script lang="ts" module>
  interface Props {
    images: string[];
    label: string;
    tags: string[];
    valor: number;
    unidades: number;
  }
</script>

<script lang="ts">
  let { images, label, tags, valor, unidades }: Props = $props();
</script>

<div class="bg-weak-50 relative h-64 w-64 overflow-hidden rounded-2xl">
  <div class="absolute top-[16px] left-[16px] inline-flex items-center justify-center gap-1.5">
    <div class="bg-soft-400 h-1 w-4 rounded-[96px]"></div>
    <div class="bg-disabled-300 h-1 w-1 rounded-[96px]"></div>
    <div class="bg-disabled-300 h-1 w-1 rounded-[96px]"></div>
  </div>
  <div class="absolute top-[32px] left-[56px] h-36 w-36 overflow-hidden">
    <img class="absolute top-0 left-0 h-36 w-36" src="https://placehold.co/146x146" alt=''/>
  </div>
  <div class="absolute top-[202px] left-[16px] inline-flex w-56 flex-col items-start justify-start gap-1">
    <div class="inline-flex items-center justify-start gap-4">
      <div class="text-text-strong-950 w-48 justify-center font-['Inter'] text-sm leading-tight font-medium">
        Apple Watch S5 GPS 40mm White
      </div>
      <div class="relative h-4 w-4 overflow-hidden">
        <div class="bg-icon-soft-400 absolute top-[6.45px] left-[4.70px] h-1.5 w-2"></div>
      </div>
    </div>
    <div class="text-text-sub-600 justify-center self-stretch font-['Inter'] text-xs leading-none font-normal">
      Technologhy
    </div>
  </div>
  <div
    class="absolute top-[12px] left-[222px] inline-flex items-center justify-center gap-0.5 overflow-hidden rounded-md p-0.5"
  >
    <div class="relative h-5 w-5 overflow-hidden">
      <div class="bg-icon-sub-600 absolute top-[3.25px] left-[8.88px] h-3.5 w-0.5"></div>
    </div>
  </div>
</div>
