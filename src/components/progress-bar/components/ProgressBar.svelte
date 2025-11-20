<script lang="ts">
  interface Props {
    percentage: number;
  }

  let { percentage = $bindable(5) }: Props = $props();
</script>

<div class="bg-soft-200 h-1.5 w-full rounded-full">
  <div class="bg-primary-base h-1.5 rounded-full transition-all duration-300" style="width: {percentage}%;"></div>
</div>