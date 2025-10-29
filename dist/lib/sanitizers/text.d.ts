/**
 * Classe utilitária para manipulação e formatação de strings.
 */
declare class HandleText {
    /**
     * Converte uma string para maiúsculas.
     *
     * @param {string} str - A string a ser convertida.
     * @returns {string} A string convertida para maiúsculas.
     */
    toUpperCase: (str: string) => string;
    /**
     * Converte uma string para minúsculas.
     *
     * @param {string} str - A string a ser convertida.
     * @returns {string} A string convertida para minúsculas.
     */
    toLowerCase: (str: string) => string;
    /**
     * Capitaliza a primeira letra de cada palavra em uma string.
     *
     * @param {string} str - A string a ser capitalizada.
     * @returns {string} A string com a primeira letra de cada palavra capitalizada.
     */
    capitalizeWords: (str: string) => string;
    /**
     * Converte uma string camelCase para uma string com espaços e primeira letra maiúscula.
     * @param str - A string no formato camelCase.
     * @returns A string formatada com espaços e cada palavra começando com letra maiúscula.
     */
    snakeCaseConvert: (str: string) => string;
    /**
     * Capitaliza apenas a primeira letra de uma frase.
     *
     * @param {string} str - A frase a ser capitalizada.
     * @returns {string} A frase com a primeira letra capitalizada.
     */
    capitalizeFirstLetter: (str: string) => string;
    /**
     * Inverte uma string.
     *
     * @param {string} str - A string a ser invertida.
     * @returns {string} A string invertida.
     */
    reverseString: (str: string) => string;
    /**
     * Trunca uma string a um comprimento específico e adiciona reticências se necessário.
     *
     * @param {string} str - A string a ser truncada.
     * @param {number} length - O comprimento máximo da string truncada.
     * @returns {string} A string truncada com reticências se o comprimento original for maior que o especificado.
     */
    truncateString: (str: string, length: number) => string;
    /**
     * Remove espaços extras de uma string.
     *
     * @param {string} str - A string da qual os espaços extras serão removidos.
     * @returns {string} A string com espaços extras removidos.
     */
    removeExtraSpaces: (str: string) => string;
    /**
     * Substitui todas as ocorrências de uma substring por outra em uma string.
     *
     * @param {string} str - A string original.
     * @param {string} search - A substring a ser substituída.
     * @param {string} replacement - A substring de substituição.
     * @returns {string} A string com todas as ocorrências da substring substituídas.
     */
    replaceAll: (str: string, search: string, replacement: string) => string;
    /**
     * Conta o número de palavras em uma string.
     *
     * @param {string} str - A string na qual o número de palavras será contado.
     * @returns {number} O número de palavras na string.
     */
    wordCount: (str: string) => number;
}
declare const handleText: HandleText;
export default handleText;
