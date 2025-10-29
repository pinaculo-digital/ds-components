/**
 * Classe para sanitização e formatação de diversos tipos de documentos e números de telefone.
 */
declare class Sanitizer {
    /**
     * Formata uma data no formato DD/MM/AAAA.
     * @param inputDate - A data a ser formatada, como uma string no formato AAAAMMDD ou AAAA-MM-DD.
     * @returns A data formatada no estilo DD/MM/AAAA.
     */
    data(inputDate: string): string;
    numero(input: string, limite?: number, minimo?: number): string;
    /**
     * Formata um número de CPF.
     * @param cpf - O número de CPF a ser formatado, como uma string.
     * @returns O número de CPF formatado.
     */
    cpf(cpf: string): string;
    /**
     * Formata um número de CPF ou CNPJ dependendo da quantidade de dígitos.
     * @param cpf - O número do documento a ser formatado, como uma string.
     * @returns O número do documento formatado.
     */
    cpfcnpj(cpf: string): string;
    /**
     * Formata um número de CNPJ.
     * @param inputValue - O número de CNPJ a ser formatado, como uma string.
     * @returns O número de CNPJ formatado.
     */
    cnpj(inputValue: string): string;
    /**
     * Formata um número de RG (Registro Geral).
     * @param inputValue - O número de RG a ser formatado, como uma string.
     * @returns O número de RG formatado.
     */
    rg(inputValue: string): string;
    /**
     * Formata um número de inscrição estadual.
     * @param ie - O número de inscrição estadual a ser formatado, como uma string.
     * @returns O número de inscrição estadual formatado.
     */
    inscricaoEstadual(ie: string): string;
    /**
     * Formata um número de telefone.
     * @param input - O número de telefone a ser formatado, como uma string.
     * @param countryCode - Um booleano indicando se deve incluir o código do país na formatação.
     * @returns O número de telefone formatado.
     */
    telefone(input: string, countryCode?: boolean): string;
    /**
     * Formata um número de telefone fixo.
     * @param input - O número de telefone a ser formatado, como uma string.
     * @param countryCode - Um booleano indicando se deve incluir o código do país na formatação.
     * @returns O número de telefone formatado.
     */
    telefoneFixo(input: string, countryCode?: boolean): string;
    email(email: string): boolean;
    minimo(string: string, minimo: number): boolean;
    cep(input: string): string;
    reais(input: string): string;
    nomeComAcentoSemPontuacao(input: string): string;
    slug(dominio: string): string;
}
declare const s: Sanitizer;
export default s;
