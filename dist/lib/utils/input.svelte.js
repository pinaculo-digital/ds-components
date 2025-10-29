import validateInputs from "../sanitizers/validateFormats.js";
class ValidacaoInputNormalizada {
    Email = (v) => {
        if (validateInputs.email(v)) {
            return "";
        }
        return "E-mail não é valido";
    };
    NaoVazio = (v, message) => {
        if (v.length >= 1) {
            return "";
        }
        return message ?? "Campo não pode ser vazio";
    };
    Date = (v) => {
        return "";
    };
    Telefone = (v) => {
        if (v.replace(/\D/g, "").length === 11) {
            return "";
        }
        return "Insira um telefone valido";
    };
    Igual = (v, s, message) => {
        if (v === s) {
            return "";
        }
        return message;
    };
    Cpf = (v) => {
        if (v.length === 14) {
            return "";
        }
        return "Insira um cpf valido";
    };
    Cep = (v) => {
        if (v.length === 9) {
            return "";
        }
        return "Insira um cep valido";
    };
}
const validacaoInputNormalizada = new ValidacaoInputNormalizada();
export default validacaoInputNormalizada;
