<script lang="ts" module>

  interface Props {
    labelCard?: string;
    tituloMarcar?: string;
    gerenciar?: string;
    clickMarcar?: () => void;
    clickGerenciar?: () => void;
  }
</script>

<script lang="ts">
  import Icon from "../../../assets/icon/Icon.svelte";

  import PaginacaoFeed from "../../pagination/components/PaginacaoFeed.svelte";
  import TabMenuHorizontal from "../../tabs/components/TabMenuHorizontal.svelte";

  import ItemsCard from "./ItemsCard.svelte";

  let tituloCard = 'Notifications';
  let tituloButton = 'Mark all as read';
  let onClickMarcar = () => {};

  let tituloGerenciar = 'Manage Notification';
  let onClickGerenciar = () => {};

  let {
    labelCard = tituloCard,
    tituloMarcar = tituloButton,
    gerenciar = tituloGerenciar,
    clickMarcar = onClickMarcar,
    clickGerenciar = onClickGerenciar,
  }: Props = $props();
</script>

<div class="flex w-full flex-col md:w-lg">
  <div class="bg-white-0 border-soft-200 flex items-center justify-between rounded-t-2xl border-b px-5 py-4">
    <p class="text-strong-950 text-[16px] font-medium">{labelCard}</p>
    <button onclick={clickMarcar} class="text-primary-base text-[14px] font-medium">
      {tituloMarcar}
    </button>
  </div>
  <div class="bg-white-0 border-soft-200 flex w-full items-center justify-between border-b px-5 py-4">
    <TabMenuHorizontal />
  </div>
  <div class="bg-white-0 border-soft-200 flex items-center justify-between border-b px-5 py-4">
    <ItemsCard />
  </div>
  <div class="bg-white-0 flex items-center justify-between rounded-b-2xl px-5 py-4">
    <PaginacaoFeed />
    <button onclick={clickGerenciar} class="text-sub-600 flex items-center gap-1 text-[12px] font-medium">
      <Icon type="settings-2-line" opticalSize={16} />
      {gerenciar}
    </button>
  </div>
</div>
