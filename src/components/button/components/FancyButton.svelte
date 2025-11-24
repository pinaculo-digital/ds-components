<script lang="ts" module>
  import LoaderSmooth from "../../../assets/loading/LoaderSmooth.svelte";
  import Icon from "../../../assets/icon/Icon.svelte";
  
  import type { ColorName } from "../../../lib/utils/colors/colors-utils.js";
  import type { IconName } from "../../../lib/utils/icons/icons-type.js";
  import { getColor } from "../../../lib/utils/colors/colors-utils.js";


  interface Props {
    label: string;
    rightIcon?: IconName;
    leftIcon?: IconName;
    disabled?: boolean;
    click: VoidFunction;
    loading?: boolean;
    color: ColorName;
    content?: string;
  }
</script>

<script lang="ts">
  let { label = 'Clique aqui', disabled = $bindable(false), click, rightIcon, leftIcon, loading, content, color = 'red-600' }: Props = $props();

  const selectedColor = $derived(getColor(color).value);
</script>

<button
  {disabled}
  class="w-full rounded-xl px-4 py-2 {disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}"
  style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%), {selectedColor}; box-shadow: 0 1px 2px 0 #242628, 0 0 0 1px {selectedColor};"
  onclick={click}
>
  <div class={content}>
    {#if loading}
      <div class="flex w-20 items-center justify-center">
        <LoaderSmooth cor="white" size={'w-4'} />
      </div>
    {:else}
      {#if leftIcon}
        <div class="-ml-1">
          <Icon type={leftIcon} fillColor="white" />
        </div>
      {/if}
      <p class="text-label-small text-white-0 font-medium">{label}</p>
      {#if rightIcon}
        <div class="-mr-1">
          <Icon type={rightIcon} fillColor="white" />
        </div>
        
      {/if}
    {/if}
  </div>
</button>
