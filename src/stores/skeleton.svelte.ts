import { onMount } from "svelte";
import { derived, writable } from "svelte/store";

const _count = writable(1); // << começa ON
export const skeleton = derived(_count, (n) => n > 0);

function startSkeleton() {
  _count.update((n) => n + 1);
}
function stopSkeleton() {
  _count.update((n) => Math.max(0, n - 1));
}

// “apaga” o ticket inicial de boot
function finishBoot() {
  stopSkeleton();
}

export function onSkMount(fn: () => void | Promise<void>) {
  onMount(() => {
    const dispose = skeletonize(fn);
    return dispose;
  });
}

// util
async function skeletonize<T>(fn: () => Promise<T> | T): Promise<T> {
  startSkeleton();
  try {
    return await fn();
  } finally {
    stopSkeleton();
    finishBoot();
  }
}
