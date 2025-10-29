import { derived, writable } from "svelte/store";
const _count = writable(1); // << começa ON
export const skeleton = derived(_count, (n) => n > 0);
export function startSkeleton() {
    _count.update((n) => n + 1);
}
export function stopSkeleton() {
    _count.update((n) => Math.max(0, n - 1));
}
// “apaga” o ticket inicial de boot
export function finishBoot() {
    stopSkeleton();
}
