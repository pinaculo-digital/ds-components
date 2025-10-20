import { page } from '$app/stores';
import { get } from 'svelte/store';
import toast from './toast.svelte';
import { onMount } from 'svelte';
import { finishBoot, startSkeleton, stopSkeleton } from '$repository/storage.svelte';

/**
 * Executa uma ação com base na tecla pressionada.
 *
 * @param {string} key - A tecla que deve ser pressionada para executar a ação.
 * @param {Function} action - A função a ser executada quando a tecla for pressionada.
 * @param {KeyboardEvent} event - O evento de teclado que contém as informações sobre a tecla pressionada.
 */
export function action(key: string, action: () => void, event: KeyboardEvent) {
  if (event.key === key) {
    action();
  }
}

export const colorOpacity = (c: string, opacity: number): string => {
  let r = 0,
    g = 0,
    b = 0;

  // Remover espaços e colocar em minúsculo
  c = c.trim().toLowerCase();

  // HEX (ex: #fff, #ffffff)
  if (c.startsWith('#')) {
    let hex = c.slice(1);
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((char) => char + char)
        .join('');
    }
    if (hex.length === 6) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }
  }

  // RGB ou RGBA (ex: rgb(255,255,255), rgba(255,255,255,1))
  else if (c.startsWith('rgb')) {
    const matches = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (matches) {
      r = parseInt(matches[1]);
      g = parseInt(matches[2]);
      b = parseInt(matches[3]);
    }
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const effectBy = <T extends readonly unknown[]>(
  deps: () => [...T],
  fn: (prevDepValues: $state.Snapshot<[...T]> | null) => void
) => {
  let prevDepValues: $state.Snapshot<[...T]> | null = null;

  $effect(() => {
    fn(prevDepValues);
    prevDepValues = $state.snapshot(deps());
  });
};

export const cssVar = (name: string) => {
  const tmp = getComputedStyle(document.documentElement).getPropertyValue(name);
  console.log(tmp);
  return tmp;
};

/**
 * Copia o texto fornecido para a área de transferência.
 *
 * @param {string} text - O texto a ser copiado para a área de transferência.
 */
export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

/**
 * Exibe mensagens no console apenas em ambiente de desenvolvimento (localhost).
 *
 * @param {string} text - A mensagem a ser exibida no console.
 */
export function consoleDev(text: any) {
  const url = get(page).url.origin;
  if (url.includes('http://localhost')) console.log(text);
}

export function formatarNumero(numero: string) {
  numero = numero.replace(/\D/g, '');

  return numero.replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4');
}

export function formatCNPJ(cnpj: string) {
  cnpj = cnpj.replace(/\D/g, '');
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

export function formatarRedeSocial(url: string) {
  if (url === null || url === '' || url === undefined) return url;
  const username = url.split('.com/')[1].replace('/', '');
  return `@${username}`;
}

export function capitalizar(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const validarSeSenhasSaoIguais = (password: string, repeatPassword: string) => {
  if (password != repeatPassword || password.length === 0) {
    toast.error('Erro no formulário', 'As senhas não correspondem.');
    return false;
  }
  return true;
};

export function onMountWithSkeleton(fn: () => void | Promise<void>) {
  onMount(() => {
    let done = false;
    (async () => {
      startSkeleton();
      try {
        await fn();
      } finally {
        stopSkeleton();
        finishBoot();
        done = true;
      }
    })();
    return () => {
      if (!done) {
        stopSkeleton();
        finishBoot();
      }
    };
  });
}
