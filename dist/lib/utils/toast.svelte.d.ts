<<<<<<< HEAD
import ShortUniqueId from "short-unique-id";
type Status = "neutral" | "success" | "error" | "alert";
=======
import { default as ShortUniqueId } from 'short-unique-id';
type Status = 'neutral' | 'success' | 'error' | 'alert';
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
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
<<<<<<< HEAD
    tema: "standard" | "colorful";
=======
    tema: "colorful" | "standard";
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
    uuid: ShortUniqueId;
    success(titulo: string, conteudo: string, propriedades?: Propriedades): void;
    error(titulo: string, conteudo: string, propriedades?: Propriedades): void;
    alert(titulo: string, conteudo: string, propriedades?: Propriedades): void;
    push(titulo: string, conteudo: string, propriedades?: Propriedades): void;
    remove(id: string): void;
<<<<<<< HEAD
    changeTheme(): "standard" | "colorful" | undefined;
=======
    changeTheme(): "colorful" | "standard" | undefined;
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
}
declare const toast: ToastManager;
export default toast;
