import { IconName } from '../utils/icons/icons.type';
export declare const rotasPublicas: string[];
export declare const rotas: {
    modulo: ("admin" | "cliente" | "assinante" | "lojista")[];
    label: string;
    link: string;
    filhos?: string[];
    Icon: IconName;
}[];
export declare const rotasLojaInterna: {
    modulo: ("admin" | "cliente" | "assinante" | "lojista")[];
    label: string;
    link: string;
    filhos?: string[];
    Icon: IconName;
}[];
export declare const rotasDS: {
    modulo: ("dev" | "admin")[];
    label: string;
    link: string;
    filhos?: string[];
    Icon: IconName;
}[];
