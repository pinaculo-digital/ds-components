<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  interface Props {
    onClick?: VoidFunction;
    label?: string;
  }

  let { onClick, label = 'Exemplo' }: Props = $props();
</script>

<button
  onclick={onClick}
  class="group hover:bg-weak-50 hover:border-weak-50 border-soft-200 flex w-fit items-center gap-1.5 rounded-tr-lg rounded-b-lg border p-2 hover:cursor-pointer"
>
  <Icon type="chat-1-line" opticalSize={20} fillColor={'neutral-400'} />
  <p class="text-label-small text-sub-600">{label}</p>
  <p class="text-label-small text-primary-dark group-hover:underline">Responder</p>
</button>
