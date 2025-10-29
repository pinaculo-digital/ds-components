import { default as ShortUniqueId } from 'short-unique-id';
type Status = 'information' | 'success' | 'error' | 'warning' | 'faded';
type Tema = 'base' | 'light' | 'lighter' | 'transparent';
type Propriedades = {
    status?: Status;
};
type Banner = {
    id: string;
    titulo: string;
    conteudo: string;
    link?: Link;
    status: Status;
};
type Link = {
    label: string;
    action: VoidFunction;
};
declare class BannerManager {
    banners: Banner[];
    tema: Tema;
    temasArray: string[];
    uuid: ShortUniqueId;
    success(titulo: string, conteudo: string, link?: Link): void;
    error(titulo: string, conteudo: string, link?: Link): void;
    alert(titulo: string, conteudo: string, link?: Link): void;
    neutral(titulo: string, conteudo: string, link?: Link): void;
    push(titulo: string, conteudo: string, link?: Link, propriedades?: Propriedades): void;
    remove(id: string): void;
    change(): void;
}
declare const banner: BannerManager;
export default banner;
