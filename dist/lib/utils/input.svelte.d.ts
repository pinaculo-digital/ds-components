declare class ValidacaoInputNormalizada {
    Email: (v: string) => string;
    NaoVazio: (v: string, message?: string) => string;
    Date: (v: string) => string;
    Telefone: (v: string) => string;
    Igual: (v: string, s: string, message: string) => string;
    Cpf: (v: string) => "" | "Insira um cpf valido";
    Cep: (v: string) => "" | "Insira um cep valido";
}
declare const validacaoInputNormalizada: ValidacaoInputNormalizada;
export default validacaoInputNormalizada;
