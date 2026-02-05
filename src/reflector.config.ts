import { validateInputs, ValidatorField } from "./lib/sanitizers/validateFormats.js";


export const validators: ValidatorField[] = [
  {
    fields: ['email'],
    validator: validateInputs.email,
  },
  {
    fields: ['password'],
    validator: validateInputs.senhaForte,
  },
  {
    fields: ['phone'],
    validator: validateInputs.telefone,
  },
];
