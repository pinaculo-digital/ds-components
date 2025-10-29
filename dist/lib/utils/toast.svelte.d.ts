import ShortUniqueId from "short-unique-id";
type Status = "neutral" | "success" | "error" | "alert";
type Propriedades = {
    duracao?: number;
    status?: Status;
};
type Toast = {
    id: string;
    duracao: number;
    titulo: string;
    conteudo: string;
    status: Status;
};
declare class ToastManager {
    toasts: Toast[];
    tema: "standard" | "colorful";
    uuid: ShortUniqueId;
    success(titulo: string, conteudo: string, propriedades?: Propriedades): void;
    error(titulo: string, conteudo: string, propriedades?: Propriedades): void;
    alert(titulo: string, conteudo: string, propriedades?: Propriedades): void;
    push(titulo: string, conteudo: string, propriedades?: Propriedades): void;
    remove(id: string): void;
    changeTheme(): "standard" | "colorful" | undefined;
}
declare const toast: ToastManager;
export default toast;
