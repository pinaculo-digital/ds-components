<script lang="ts" module>
  interface Props {
    file: File;
    progresso: number;
  }
</script>

<script lang="ts">
  let { file, progresso = 20 }: Props = $props();
</script>

<div class="border-soft-200 relative flex flex-col gap-1 rounded-md border p-2 px-6">
  <div class="flex items-center gap-3">
    <div class="relative flex items-center">
      <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.2 31.4H4.8C2.4804 31.4 0.6 29.5196 0.6 27.2V4.8C0.6 2.4804 2.4804 0.6 4.8 0.6H13.471C14.5737 0.6 15.6321 1.03361 16.4178 1.80722L24.1467 9.41728C24.9485 10.2067 25.4 11.2849 25.4 12.4101V27.2C25.4 29.5196 23.5196 31.4 21.2 31.4Z"
          fill="white"
          stroke="#CACFD8"
          stroke-width="1.2"
        />
      </svg>
      <div class="bg-error-base absolute top-[12px] left-[-6px] rounded-sm p-1 text-[9px] leading-2 text-white">
        {file.type.split('/')[1].toUpperCase()}
      </div>
    </div>

    <div class="flex flex-col text-[12px]">
      <b> Nome </b>
      <span class="text-sub-600 flex items-center gap-1">
        0KB de 120KB
        <div class="bg-strong-950 aspect-square w-[2px]"></div>
        <div class="text-strong-950">Upando...</div>
      </span>
    </div>
  </div>

  <div class="bg-soft-200 h-[4px] w-full overflow-hidden rounded-lg">
    <div class="bg-primary-base h-full" style="width: {progresso}%;"></div>
  </div>

  <button class="absolute top-0 right-0 m-1 p-2">
    <!-- <SvgX
      props={{
        width: 10,
        height: 10,
        class: 'fill-strong-950',
      }}
    /> -->
  </button>
</div>
