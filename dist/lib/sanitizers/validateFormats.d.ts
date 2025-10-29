/**
 * Classe para validação de diferentes tipos de entradas.
 */
declare class ValidateInputs {
    /**
     * Valida se o número é um CPF ou CNPJ.
     * @param cpf - O número a ser validado, como uma string.
     * @returns Retorna 'CPF' se o número tiver 11 dígitos, 'CNPJ' se tiver 14 dígitos, ou `false` se não corresponder a nenhum dos formatos.
     */
    cpf(cpf: string): 'CPF' | 'CNPJ' | false;
    /**
     * Valida se o e-mail é válido com base em uma expressão regular.
     * @param email - O e-mail a ser validado, como uma string.
     * @returns `true` se o e-mail for válido, `false` caso contrário.
     */
    email(email: string): boolean;
    /**
     * Valida se uma string possui um comprimento mínimo.
     * @param string - A string a ser validada.
     * @param tamanhoMinimo - O comprimento mínimo desejado.
     * @returns `true` se a string atender ao comprimento mínimo, `false` caso contrário.
     */
    string(string: string, tamanhoMinimo: number): boolean;
    /**
     * Compara duas strings para verificar se são iguais.
     * @param string - A primeira string.
     * @param string2 - A segunda string.
     * @returns `true` se as strings forem iguais, `false` caso contrário.
     */
    stringIgual(string: string, string2: string): boolean;
    /**
     * Valida se o número de telefone é um número brasileiro válido.
     * @param telefone - O número de telefone a ser validado, como uma string.
     * @returns `true` se o telefone for um número brasileiro válido, `false` caso contrário.
     */
    telefone(telefone: string): boolean;
    /**
     * Valida se a senha é forte com base em uma expressão regular.
     * Uma senha forte deve conter pelo menos uma letra maiúscula, uma letra minúscula, um dígito, um caractere especial e ter pelo menos 8 caracteres.
     * @param senha - A senha a ser validada, como uma string.
     * @returns `true` se a senha atender aos requisitos de força, `false` caso contrário.
     */
    senhaForte(senha: string): boolean;
    /**
     * Valida se o comprimento do array é pelo menos o tamanho mínimo especificado.
     * @param array - O array a ser validado.
     * @param minimo - O comprimento mínimo desejado.
     * @returns `true` se o array tiver pelo menos o comprimento mínimo, `false` caso contrário.
     */
    tamanhoArray(array: [], minimo: number): boolean;
    /**
     * Valida se o tipo de arquivo é uma imagem válida.
     * Tipos válidos: 'image/png', 'image/jpg', 'image/jpeg', 'image/webp'.
     * @param type - O tipo do arquivo a ser validado.
     * @returns `true` se o tipo for uma imagem válida, `false` caso contrário.
     */
    imagemValida(type: string): boolean;
}
declare const validateInputs: ValidateInputs;
export default validateInputs;
