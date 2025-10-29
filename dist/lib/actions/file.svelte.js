export const fileManager = (node, info) => {
    $effect(() => {
        let content;
        const criar = () => {
            if (inputHTML) {
                inputHTML.removeEventListener('change', () => { });
                node.removeChild(inputHTML);
            }
            inputHTML = document.createElement('input');
            inputHTML.type = 'file';
            inputHTML.accept = info.accept;
            inputHTML.style.display = 'none';
            inputHTML.multiple = info.multipleFiles !== undefined ? info.multipleFiles : false;
            node.appendChild(inputHTML);
            inputHTML.addEventListener('change', (event) => {
                if (info.multipleFiles === true) {
                    const input = event.target;
                    const files = Array.from(input.files ?? []).map((file) => {
                        return file;
                    });
                    if (files.length === 0)
                        return;
                    content = Array.from(files).map((file) => {
                        return {
                            file,
                            data64: URL.createObjectURL(file),
                        };
                    });
                    const inputChange = new CustomEvent('fileupload', { detail: content });
                    node.dispatchEvent(inputChange);
                    criar();
                    return;
                }
                const input = event.target;
                const file = input.files?.[0];
                if (!file)
                    return;
                const data64 = URL.createObjectURL(file);
                content = [{ file, data64 }];
                const inputChange = new CustomEvent('fileupload', { detail: content });
                node.dispatchEvent(inputChange);
                criar();
            });
        };
        let inputHTML;
        criar(); //Permite enviar o mesmo arquivo
        function click() {
            inputHTML.click();
        }
        node.addEventListener('click', click);
        return () => {
            node.removeEventListener('click', click);
        };
    });
};
