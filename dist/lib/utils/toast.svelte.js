import ShortUniqueId from "short-unique-id";
class ToastManager {
    toasts = $state([]);
    tema = $state("standard");
    uuid = new ShortUniqueId({ length: 20 });
    success(titulo, conteudo, propriedades) {
        this.push(titulo, conteudo, {
            ...propriedades,
            status: "success",
        });
    }
    error(titulo, conteudo, propriedades) {
        this.push(titulo, conteudo, {
            ...propriedades,
            status: "error",
        });
    }
    alert(titulo, conteudo, propriedades) {
        this.push(titulo, conteudo, {
            ...propriedades,
            status: "alert",
        });
    }
    push(titulo, conteudo, propriedades) {
        const id = this.uuid.rnd();
        if (!propriedades)
            propriedades = {};
        const props = {
            status: propriedades.status ?? "neutral",
            duracao: propriedades.duracao ?? 6000,
        };
        this.toasts.push({
            titulo,
            conteudo: conteudo,
            id: id,
            duracao: props.duracao,
            status: props.status,
        });
        setTimeout(() => {
            this.remove(id);
        }, props.duracao);
    }
    remove(id) {
        this.toasts = this.toasts.filter((item) => item.id !== id);
    }
    changeTheme() {
        if (this.tema === "colorful")
            return (this.tema = "standard");
        if (this.tema === "standard")
            return (this.tema = "colorful");
    }
}
const toast = new ToastManager();
export default toast;
