<script lang="ts" module>
  interface Props {
    maxScore: number;
    score: number;
  }
</script>

<script lang="ts">
  let { score = $bindable(), maxScore }: Props = $props();

  let scoreHover = $state<number>(-1);
</script>

<div class="flex items-center justify-between gap-0">
  {#each { length: maxScore } as _, i}
    <button
      class="group h-[30px] w-4 shrink-0 grow px-1"
      onclick={() => (score = i)}
      onmouseenter={() => (scoreHover = i)}
      onmouseleave={() => (scoreHover = -1)}
      aria-label={score.toString()}
    >
      <div
        class="data-[active]:bg-success-base bg-soft-400 hover:bg-success-base h-full w-full"
        data-active={(() => {
          if (i <= score || i <= scoreHover) {
            if (scoreHover !== -1) {
              if (i <= scoreHover) {
                return true;
              }
              return null;
            }
            return true;
          }
          return null;
        })()}
      ></div>
    </button>
  {/each}
</div>
