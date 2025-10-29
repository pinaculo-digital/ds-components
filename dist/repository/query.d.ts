/**
 * Uma classe utilitária para gerenciar parâmetros de consulta na URL.
 * Fornece métodos para obter, definir e modificar parâmetros de consulta.
 */
declare class Query {
    /**
     * Recupera todos os parâmetros de consulta da URL atual como um objeto.
     *
     * @returns {Record<string, string>} Um objeto que representa todos os parâmetros de consulta.
     * Cada chave é o nome de um parâmetro de consulta, e cada valor é o valor correspondente ao parâmetro.
     * Retorna um objeto vazio se executado em um ambiente fora do navegador.
     */
    getQueryParams(): Record<string, string>;
    /**
     * Recupera o valor de um parâmetro de consulta específico pelo seu nome.
     *
     * @param {string} key - O nome do parâmetro de consulta a ser recuperado.
     * @returns {string | null} O valor do parâmetro de consulta, ou null se o parâmetro não existir.
     */
    getQueryKey(key: string): string | null;
    /**
     * Constrói uma string de consulta com base em um array de nomes de parâmetros de consulta.
     * Opcionalmente, pode iniciar com um valor padrão especificado para o primeiro parâmetro se ele não for contíguo.
     *
     * @param {string[]} arrayQuerys - Um array de nomes de parâmetros de consulta para incluir na string de consulta.
     * @param {string} defaultNullFirst - O valor padrão para o primeiro parâmetro se ele não for contíguo.
     * @param {boolean} isContiguous - Se os parâmetros de consulta devem ser contíguos ou não.
     * @returns {string} Uma string representando a consulta construída, começando com `?` e unida por `&`.
     */
    searchQuerys(arrayQuerys: string[], defaultNullFirst?: string, isContiguous?: boolean): string;
    searchInMemoryQuerys(params: any, isContiguous?: boolean): string;
    /**
     * Define os parâmetros de consulta especificados e, opcionalmente, recarrega a página para carregar os novos parâmetros.
     *
     * @param {Array<{ name: string, value: string }>} params - Um array de objetos contendo pares de `name` e `value` para definir como parâmetros de consulta.
     * @param {boolean} forceRefresh - Se verdadeiro, força um recarregamento completo da página para aplicar os novos parâmetros.
     */
    setParamAndRefresh(params: {
        name: string;
        value: string;
    }[], forceRefresh?: boolean): Promise<void>;
    /**
     * Limpa todos os parâmetros de consulta da URL atual.
     *
     * @param {boolean} forceRefresh - Se verdadeiro, força um recarregamento completo da página para aplicar os parâmetros limpos.
     */
    cleanAllParams(forceRefresh: boolean): Promise<void>;
    private replaceHistory;
}
declare const query: Query;
export default query;
