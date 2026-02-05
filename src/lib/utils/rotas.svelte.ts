import type { IconName } from "./icons/icons.type.js";


export const rotasPublicas = ['/cadastro', '/recuperar-conta', '/redefinir-senha'];

export const rotas: {
  modulo: ('admin' | 'cliente' | 'assinante' | 'lojista')[];
  label: string;
  link: string;
  filhos?: string[]; //Caso não seja um item de sidebar, mas é uma url que faz parte de algum fluxo, indique aqui
  Icon: IconName;
}[] = [
  {
    modulo: ['admin'],
    label: 'Usuários',
    link: '/admin/gestao-de-usuarios',
    Icon: 'building-2-line',
  },
  {
    modulo: ['admin'],
    label: 'Repasses',
    link: '/admin/repasses',
    Icon: 'money-dollar-circle-line',
  },
  {
    modulo: ['admin'],
    label: 'Prédios',
    link: '/admin/gestao-de-predios',
    filhos: [
      '/admin/gestao-de-predios/cadastrar-predio',
      '/admin/gestao-de-predios/editar-predio',
      '/admin/gestao-de-predios/detalhes-predio',
    ],
    Icon: 'building-line',
  },
  {
    modulo: ['assinante'],
    label: 'Lojas',
    link: '/assinante/lojas',
    filhos: ['/assinante/cadastro-de-loja', '/assinante/editar-loja'],
    Icon: 'building-line',
  },
  {
    modulo: ['assinante'],
    label: 'Transações',
    link: '/assinante/transacoes',
    Icon: 'money-dollar-box-fill',
  },
  {
    modulo: ['cliente'],
    label: 'Em progresso',
    link: '/cliente',
    Icon: 'money-dollar-box-fill',
  },
  {
    modulo: ['assinante', 'lojista'],
    label: 'Estoque',
    link: '/assinante/estoque',
    filhos: ['/assinante/cadastro-produto', '/assinante/editar-produto'],
    Icon: 'building-line',
  },
];

//Incluir prefixo de loja em toda logica de url no componente sidebar
export const rotasLojaInterna: {
  modulo: ('admin' | 'cliente' | 'assinante' | 'lojista')[];
  label: string;
  link: string;
  filhos?: string[];
  Icon: IconName;
}[] = [
  {
    modulo: ['assinante', 'lojista'],
    label: 'Estoque',
    link: '/assinante/estoque',
    filhos: ['/assinante/cadastro-produto', '/assinante/editar-produto'],
    Icon: 'building-line',
  },
];

export const rotasDS: {
  modulo: ('dev' | 'admin')[];
  label: string;
  link: string;
  filhos?: string[];
  Icon: IconName;
}[] = [
  {
    modulo: ['dev'],
    label: 'Core Elements',
    link: '/ds/core-elements',
    filhos: ['/ds/core-elements/typography', '/ds/core-elements/color-palette', '/ds/core-elements/border-radius'],
    Icon: 'building-fill',
  },
  {
    modulo: ['dev'],
    label: 'Base Components',
    link: '/ds/base-components',
    filhos: [
      '/ds/base-components/typography',
      '/ds/base-components/color-palette',
      '/ds/base-components/border-radius',
    ],
    Icon: 'building-line',
  },
];
