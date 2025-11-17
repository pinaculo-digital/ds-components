<script lang="ts" module>

  interface Props {
    status: boolean;
  }
</script>

<script lang="ts">
  import Avatar from "../../avatar/components/Avatar.svelte";

  let { status = false }: Props = $props();
</script>

<div class="relative">
  <Avatar src={'N'} name={'N'} rounded={'rounded-[8px]'} />
  <div class="absolute -right-2 -bottom-2">
    <!-- <SvgStatusCircle cor={status ? '#1FC16B' : '#CACFD8'} /> -->
  </div>
</div>
