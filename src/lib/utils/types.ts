//Essa pasta é exclusiva para fazer types GENERICOS E GLOBAIS
//Evite por favor colocar types especificos de arquivos, coloque apenas utilitarios que você acha necessario no codigo

import z from 'zod';
import type { IconName } from './icons/icons.type.js';

export const SaveFileSchema = z.object({
  id: z.string().default('cmfxu4njg000008l52v7t8qze'),
  key: z.string().default('ordinary string'),
  url: z.string().default('ordinary string'),
});
export type SaveFileResponse = z.infer<typeof SaveFileSchema>;

export interface MainComponentType {
  hasSelection: boolean;
  optionSelected: Option | Option[] | null;
  placeholder: string;
  isActive: boolean;
  onClick: VoidFunction;
  disabled?: boolean;
  hasError?: boolean;
  icon?: IconName;
}
export interface OptionComponentType {
  data: Option;
  isSelected: boolean;
  onClick: VoidFunction;
}

export type AnyPrimitive = number | boolean | string | undefined;
export type Option = {
  label: string;
  value: any;
  [key: string]: any;
};
export interface MainComponentType {
  hasSelection: boolean;
  optionSelected: Option | Option[] | null;
  placeholder: string;
  isActive: boolean;
  onClick: VoidFunction;
  disabled?: boolean;
  hasError?: boolean;
}
export interface OptionComponentType {
  data: Option;
  isSelected: boolean;
  onClick: VoidFunction;
}

export type ValidatorResult = string | null;
export type ValidatorFn<T> = (v: T) => ValidatorResult;

export type FieldSetup<T> = T extends (infer U)[]
  ? SetupData<U>[]
  : {
      value: T;
      display: T;
      validator: ValidatorFn<T>;
      required: boolean;
      // meta?: Meta;
      placeholder?: T;
    };

export interface MetaErrorMessage {
  title: string;
  content: string;
}

export type SetupData<TShape> = {
  [K in keyof TShape]: FieldSetup<TShape[K]>;
};

export type Unbundle<T> =
  T extends FieldSetup<infer V>
    ? V
    : T extends (infer U)[]
      ? Unbundle<U>[]
      : T extends object
        ? { [K in keyof T]: Unbundle<T[K]> }
        : T;
