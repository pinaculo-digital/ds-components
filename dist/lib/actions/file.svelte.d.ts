import type { Action } from 'svelte/action';
type FileContent = {
    file: File;
    data64: string;
}[];
type MyAction = Action<HTMLButtonElement, {
    accept: string;
    multipleFiles?: boolean;
}, {
    onfileupload: (e: CustomEvent<FileContent>) => void;
}>;
export declare const fileManager: MyAction;
export {};
