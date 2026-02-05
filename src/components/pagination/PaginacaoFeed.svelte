<script lang="ts" module>
  interface Props {
    clickCima?: () => void;
    clickBaixo?: () => void;
  }
</script>

<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

  let onClickCima = () => {};
  let onClickBaixo = () => {};

  let { clickCima = onClickCima, clickBaixo = onClickBaixo }: Props = $props();
</script>

<div>
  <div class="text-sub-600 flex items-center gap-4 text-[12px] font-medium">
    Use
    <button onclick={() => clickCima()}>
      <Icon type="arrow-up-s-line" opticalSize={16} />
    </button>
    <button onclick={() => clickBaixo()}>
      <Icon type="arrow-down-s-line" opticalSize={16} />
    </button>
    to navigate
  </div>
</div>
