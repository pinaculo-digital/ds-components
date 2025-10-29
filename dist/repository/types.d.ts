import { ZodObject, ZodTypeAny, ZodType, z } from 'zod';
import { SafeParseReturnType } from 'zod/v3';
export type BasicCheck = {
    inputSchema: ZodObject<Record<string, ZodTypeAny>>;
    message?: string;
};
export type Check = Data & BasicCheck;
export type Data = {
    data: unknown;
};
export type BasicParse<T> = {
    outputSchema: ZodType<T>;
};
export type Parse<T> = Data & BasicParse<T>;
export type CheckAndParse<T> = Check & Data & BasicParse<T>;
export type FieldSetup<T> = T extends (infer U)[] ? SetupData<U>[] : {
    value: T;
    display: T;
    validator: (v: T) => SafeParseReturnType<unknown, T>;
    required: boolean;
    meta?: Meta;
};
export interface MetaErrorMessage {
    title: string;
    content: string;
}
export type FieldSetup2<T> = T extends (infer U)[] ? SnappedData<U>[] : {
    value: T;
    display: T;
    validator: unknown;
    required: boolean;
};
export type SnappedData<TShape> = {
    [K in keyof TShape]: FieldSetup2<TShape[K]>;
};
export declare const imageAcceptedFormat: readonly ["png", "jpg", "jpeg", "webp", "gif", "svg"];
export declare const audioAcceptedFormat: readonly ["mp3", "wav", "m4a", "aac", "ogg", "flac"];
export declare const videoAcceptedFormat: readonly ["mp4", "webm", "mov", "mkv", "avi"];
export type ImageFormat = typeof imageAcceptedFormat;
export type AudioFormat = typeof audioAcceptedFormat;
export type VideoFormat = typeof videoAcceptedFormat;
export type AllFilesFormat = ImageFormat & AudioFormat & VideoFormat;
export type Meta = {
    description?: string;
    acceptedFormats?: ImageFormat[] | AudioFormat[] | VideoFormat[];
    maxHintMB?: number;
};
export type SetupData<TShape> = {
    [K in keyof TShape]: FieldSetup<TShape[K]>;
};
export type SchemaInputs<T extends z.ZodObject> = Extract<keyof z.infer<T>, string>;
export type SchemaType = 'Input' | 'Entry' | 'Dto' | 'Output' | 'Filter';
export type SchemaTransformer<S extends z.ZodObject<z.ZodRawShape>> = (schema: S) => z.ZodObject<z.ZodRawShape>;
export type BuildResult<T extends string, S extends z.ZodObject<z.ZodRawShape>, Trans extends Partial<Record<SchemaType, SchemaTransformer<S>>>> = {
    [K in `${T}${SchemaType}Schema`]: K extends `${T}${infer ST}Schema` ? ST extends SchemaType ? ST extends keyof Trans ? Trans[ST] extends (schema: S) => z.ZodObject<z.ZodRawShape> ? ReturnType<Trans[ST]> : S : S : never : never;
};
