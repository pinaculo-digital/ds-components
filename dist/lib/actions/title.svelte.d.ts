<<<<<<< HEAD
import type { Action } from 'svelte/action';
=======
import { Action } from 'svelte/action';
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
type Info = {
    text: string | null;
    posTriangulo: 'top-middle' | 'top-left' | 'top-right' | 'bottom-middle' | 'bottom-left' | 'bottom-right';
};
type MyAction = Action<HTMLElement | SVGElement | SVGRectElement, Info, {}>;
export declare const tooltip: MyAction;
export {};
