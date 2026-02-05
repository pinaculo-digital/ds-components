<script lang="ts" module>

  interface Props {
    users: {
      name: string;
      src: string;
    }[];
    size?: 20 | 24;
    maskSize?: string;
  }
</script>

<script lang="ts">
  import Avatar from "../avatar/Avatar.svelte";
  let { users, size = 24, maskSize = 'circle at 24px,transparent 13px' }: Props = $props();
</script>

<div class="flex items-center">
  {#each users as user, i}
    <div
      class="flex aspect-square not-first:-ml-2"
      style={i < users.length - 1 ? `mask: radial-gradient(${maskSize},white 0);` : ''}
    >
      <Avatar src={user.src} name={user.name} {size} />
    </div>
  {/each}
</div>
