import type { SafeParseReturnType } from 'zod/v3';

export type RawData = {
  [k: string]: string;
};

export type PropData = {
  value: string;
  display: string;
  validator: (v: unknown) => SafeParseReturnType<any, any>;
};
