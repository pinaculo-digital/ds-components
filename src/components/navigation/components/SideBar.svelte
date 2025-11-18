<script lang="ts" module>
  import Avatar from '../../avatar/components/Avatar.svelte';
  import Icon from '$components/assets/icon/Icon.svelte';

  import type { IconName } from '../../../lib/utils/icons/icons-type.js';

  interface Props {
    urlHome?: string;
    routes: {
      modulo: string[];
      label: string;
      link: string;
      filhos?: string[];
      Icon: IconName;
    }[];
    user: {
      nome: string;
      avatar: string;
      email: string;
    };
    redirect: (route: string) => void;
    hideInMobile?: boolean;
  }
</script>

<script lang="ts">
  import OptionsButton from "../../button/components/OptionsButton.svelte";

  const opcoes = [
    // { label: 'Configurações de perfil', action: () => toast.alert('Notificação do sistema', 'Ainda em implementação') },
    { label: 'Sair', action: () => logout() },
  ];

  function logout() {
    localStorage.clear();
    redirect('/login');
  }


  let { urlHome = '/', user, hideInMobile = false, routes, redirect }: Props = $props();
</script>

<aside
  class="border-soft-200 bg-white-0 flex h-full w-[272px] shrink-0 grow-0 flex-col justify-between gap-6 border-r p-6 {hideInMobile
    ? 'hidden md:flex'
    : ''}"
>
  <div class="flex flex-col gap-6">
    <div class="border-soft-200 flex items-center gap-3 border-b pb-6">
      <button onclick={() => redirect(urlHome)}>
        <img src="/images/avatar-pinaculo.png" class="w-[40px] rounded-full" alt="" />
      </button>
      <div class="flex flex-col">
        <p class="text-strong-950 text-[14px] font-medium">Pináculo Digital</p>
        <p class="text-sub-600 text-[12px] font-normal">Painel de testes do DS</p>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <p class="text-soft-400 text-[12px] font-normal">MENU</p>
      <div class="flex flex-col gap-1">
        {#each routes as route, i}
          {@const active =
  window.location.pathname.includes(route.link) || route.filhos?.some((obj) => obj.includes(window.location.pathname))}
          <div class="relative flex w-full flex-col justify-center">
            <div
              class="data-[ativo]:bg-primary-base absolute left-[-23px] h-5 w-1 translate-x-[-4px]
                        rounded-r-[4px] data-[ativo]:translate-x-0"
              data-ativo={active ? true : null}
            ></div>
            <button
              onclick={() => redirect(route.link)}
              class="group hover:text-strong-950 flex items-center gap-4 px-6 py-2 {active
                ? 'text-strong-950 bg-weak-50 rounded-lg'
                : 'text-sub-600'}"
            >
              <Icon fillColor={active ? 'blue-500' : 'blue-300'} type={route.Icon} opticalSize={24} />
              <p class="font-content text-sm font-medium">{route.label}</p>
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="border-soft-200 flex w-full items-center justify-between border-t pt-6">
    <div class="flex items-center gap-3">
      <Avatar name={user.nome} placeholder="icon" src={'/icons/favicon.svg'} />
      <div class="flex grow flex-col">
        <p class="text-strong-950 text-[14px] font-medium">{user.nome ?? 'Administrador'}</p>
        <p class="text-sub-600 w-[130px] truncate text-[12px] font-normal">{user.email ?? 'Não Informado'}</p>
      </div>
    </div>
    <OptionsButton posicao="bottom-[0px] right-[-168px]" {opcoes}>
      <Icon fillColor="neutral-300" type="arrow-right-s-line" opticalSize={24} />
    </OptionsButton>
  </div>
</aside>
