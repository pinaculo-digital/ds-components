<<<<<<< HEAD
import type { Action } from 'svelte/action';
=======
import { Action } from 'svelte/action';
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
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
