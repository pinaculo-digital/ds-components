import { ValidatorFn } from "../utils/types.js";
import { FieldName } from "../utils/fields.js";


export interface ValidatorField {
  fields: FieldName[];
  validator: ValidatorFn<any>;
}

class FieldValidator {
  cpf: ValidatorFn<string> = (value) => {
    const doc = value.replaceAll(/[^0-9]/g, '');
    return doc.length === 11 || doc.length === 14 ? null : 'CPF ou CNPJ inválido';
  };

  email: ValidatorFn<string> = (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? null : 'E-mail inválido';

  minLength =
    (min: number): ValidatorFn<string> =>
    (value) =>
      value.length >= min ? null : `Mínimo de ${min} caracteres`;

  equals =
    (compare: string): ValidatorFn<string> =>
    (value) =>
      value === compare ? null : 'Valores não conferem';

  telefone: ValidatorFn<string> = (value) => {
    const tel = value.replaceAll(/[^0-9]/g, '');

    const valido = (tel.length === 10 && tel.charAt(2) === '2') || (tel.length === 11 && tel.charAt(2) === '9');

    return valido ? null : 'Telefone inválido';
  };

  senhaForte: ValidatorFn<string> = (value) =>
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/.test(value) ? null : 'Senha fraca';

  tamanhoArray =
    <T>(min: number): ValidatorFn<T[]> =>
    (value) =>
      value.length >= min ? null : `Mínimo de ${min} itens`;

  imagemValida: ValidatorFn<string> = (value) =>
    ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'].includes(value) ? null : 'Formato de imagem inválido';
}

export const validateInputs = new FieldValidator();
