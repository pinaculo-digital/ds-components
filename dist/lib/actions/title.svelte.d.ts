import type { Action } from 'svelte/action';
type Info = {
    text: string | null;
    posTriangulo: 'top-middle' | 'top-left' | 'top-right' | 'bottom-middle' | 'bottom-left' | 'bottom-right';
};
type MyAction = Action<HTMLElement | SVGElement | SVGRectElement, Info, {}>;
export declare const tooltip: MyAction;
export {};
