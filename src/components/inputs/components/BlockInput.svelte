<script lang="ts" module>
  interface Props {
    qtd: number;
    value: string;
  }
</script>

<script lang="ts">
  let { qtd, value = $bindable() }: Props = $props();

  let inputs = $state<HTMLInputElement[]>([]);

  function updateValue() {
    let tmp = '';
    inputs.forEach((i) => {
      if (i) tmp += i.value;
    });

    if (tmp !== value) {
      value = tmp;
    }
  }
</script>

<div class="flex items-center gap-4">
  {#each { length: qtd } as _, i}
    <input
      type="text"
      bind:this={inputs[i]}
      class="outline-soft-200 focus-within:border-strong-950 bg-white-0 h-[64px] w-[57px] shrink-0 rounded-[10px] border border-transparent text-center text-[24px] outline"
      oninput={updateValue}
      onkeydown={(e) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;

        if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
          if (e.key === 'Backspace') {
            target.value = '';
            updateValue();
          }
          if (i > 0) inputs[i - 1]?.focus();
          return;
        }

        if (e.key === 'ArrowRight' && i < qtd - 1) {
          inputs[i + 1]?.focus();
          return;
        }

        if (e.key === 'Delete' || e.key.length > 1) {
          return;
        }

        if (!target.value) {
          target.value = e.key;
          updateValue();
        }

        if (i < qtd - 1) {
          setTimeout(() => {
            inputs[i + 1]?.focus();
          }, 10);
        }
      }}
    />
  {/each}
</div>
