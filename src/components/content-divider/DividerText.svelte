<script lang="ts">
  interface Props {
    label: string;
  }

  let { label }: Props = $props();
</script>

<div class="w-full relative h-px flex items-center py-2">
  <div class="w-full h-px bg-soft-200"></div>

  <p
    class="text-subheading-xsmall w-fit bg-white text-soft-400 shrink-0 text-center uppercase absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap px-4">
    {label}
  </p>
</div>
