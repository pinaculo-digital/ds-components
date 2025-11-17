<script lang="ts" module>

  interface Props {
    url: string;
    nome: string;
    email: string;
  }
</script>

<script lang="ts">
  import Avatar from "../../avatar/components/Avatar.svelte";

  let { url, nome, email }: Props = $props();
</script>

<div class="flex w-full items-start gap-3">
  <Avatar name={nome} src={url} />
  <div class="flex flex-col items-start">
    <p class="text-strong-950 text-[14px] font-medium">{nome}</p>
    <p class="text-sub-600 text-[12px] font-normal">{email}</p>
  </div>
</div>
