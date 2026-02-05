declare module "./lib/animations/transitions.js" {
  export function slidefade(
    node: Element,
    options?: any
  ): import("svelte/transition").TransitionConfig;
  export function flySlide(
    node: Element,
    options?: any
  ): import("svelte/transition").TransitionConfig;
}