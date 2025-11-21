<script lang="ts" module>
  interface Props {
    active?: boolean;
    onClick?: VoidFunction;
  }
</script>

<script lang="ts">
  let { active = $bindable(false), onClick = () => {} }: Props = $props();

  function doOnClick() {
    onClick?.();
    active = !active;
  }
</script>

<button
  class="flex h-[16px] w-[28px] items-center rounded-full p-1 {active === true
    ? 'bg-primary-base justify-end'
    : 'bg-soft-200'} "
  aria-label="Toggle"
  onclick={doOnClick}
>
  <div
    class="left-0 aspect-square h-[100%] rounded-full border-4 border-white {active === true
      ? 'bg-primary-base'
      : 'bg-soft-200'}"
  ></div>
</button>
