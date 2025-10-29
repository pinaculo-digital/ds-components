/**
 * Executa uma ação com base na tecla pressionada.
 *
 * @param {string} key - A tecla que deve ser pressionada para executar a ação.
 * @param {Function} action - A função a ser executada quando a tecla for pressionada.
 * @param {KeyboardEvent} event - O evento de teclado que contém as informações sobre a tecla pressionada.
 */
export declare function action(key: string, action: () => void, event: KeyboardEvent): void;
export declare const colorOpacity: (c: string, opacity: number) => string;
export declare const effectBy: <T extends readonly unknown[]>(deps: () => [...T], fn: (prevDepValues: $state.Snapshot<[...T]> | null) => void) => void;
export declare const cssVar: (name: string) => string;
/**
 * Copia o texto fornecido para a área de transferência.
 *
 * @param {string} text - O texto a ser copiado para a área de transferência.
 */
export declare function copyToClipboard(text: string): void;
<<<<<<< HEAD
=======
/**
 * Exibe mensagens no console apenas em ambiente de desenvolvimento (localhost).
 *
 * @param {string} text - A mensagem a ser exibida no console.
 */
export declare function consoleDev(text: any): void;
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
export declare function formatarNumero(numero: string): string;
export declare function formatCNPJ(cnpj: string): string;
export declare function formatarRedeSocial(url: string): string;
export declare function capitalizar(string: string): string;
export declare const validarSeSenhasSaoIguais: (password: string, repeatPassword: string) => boolean;
