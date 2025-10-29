import ShortUniqueId from 'short-unique-id';
class BannerManager {
    banners = $state([]);
    tema = $state('base');
    temasArray = ['base', 'light', 'lighter', 'transparent'];
    uuid = new ShortUniqueId({ length: 20 });
    success(titulo, conteudo, link) {
        this.push(titulo, conteudo, link, {
            status: 'success',
        });
    }
    error(titulo, conteudo, link) {
        this.push(titulo, conteudo, link, {
            status: 'error',
        });
    }
    alert(titulo, conteudo, link) {
        this.push(titulo, conteudo, link, {
            status: 'warning',
        });
    }
    neutral(titulo, conteudo, link) {
        this.push(titulo, conteudo, link, {
            status: 'faded',
        });
    }
    push(titulo, conteudo, link, propriedades) {
        const id = this.uuid.rnd();
        if (!propriedades)
            propriedades = {};
        const props = {
            status: propriedades.status ?? 'information',
        };
        this.banners.push({
            titulo,
            conteudo,
            link,
            id,
            status: props.status,
        });
    }
    remove(id) {
        this.banners = this.banners.filter((item) => item.id !== id);
    }
    change() {
        let trocar = '';
        this.temasArray.map((obj, i) => {
            if (obj === this.tema) {
                if (i < this.temasArray.length - 1) {
                    trocar = this.temasArray[i + 1];
                }
                else {
                    trocar = this.temasArray[0];
                }
            }
        });
        this.tema = trocar;
    }
}
const banner = new BannerManager();
export default banner;
