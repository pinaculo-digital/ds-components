export declare class DataSanitizer {
    /**
     * Função para formatar uma data em um formato específico.
     *
     * @param {Date} date - A data a ser formatada.
     * @param {string} [dateFormat='dd/MM/yyyy'] - O formato desejado para a data.
     * @returns {string} - A data formatada como uma string.
     */
    static readonly formatDate: (date: Date, dateFormat?: string) => string;
    /**
     * Função para formatar uma data com base na distância de tempo até o presente.
     *
     * @param {Date} date - A data a ser comparada com o presente.
     * @returns {string} - A distância de tempo até o presente, formatada como uma string.
     */
    formatDistanceToNow: (date: Date) => string;
    /**
     * Função para formatar uma data de forma relativa (ex: "há 3 dias", "em 2 semanas").
     *
     * @param {Date} date - A data a ser formatada de forma relativa.
     * @param {Date} [baseDate=new Date()] - A data base para calcular a distância relativa.
     * @returns {string} - A data formatada de forma relativa, como uma string.
     */
    formatRelativeDate: (date: Date, baseDate?: Date) => string;
    dataChat(date: Date): string;
    /**
     * Função para adicionar dias a uma data.
     *
     * @param {Date} date - A data original.
     * @param {number} days - O número de dias a serem adicionados.
     * @param {string} [dateFormat='dd/MM/yyyy'] - O formato desejado para a data resultante.
     * @returns {string} - A nova data, com os dias adicionados, formatada
     */
    addDaysToDate: (date: Date, days: number, dateFormat?: string) => string;
    /**
     * Função para converter uma string ISO em uma data formatada.
     *
     * @param {string} isoDate - A string ISO a ser convertida em data.
     * @param {string} [dateFormat='dd/MM/yyyy'] - O formato desejado para a data resultante.
     * @returns {string} - A data formatada, convertida a partir da string ISO.
     */
    formatISODate: (isoDate: string, dateFormat?: string) => string;
}
declare const handleDate: DataSanitizer;
export default handleDate;
