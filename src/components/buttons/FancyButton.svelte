<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

    import type { ColorName} from '../../lib/utils/colors/colors.utils.js';
  import { getColor } from '../../lib/utils/colors/colors.utils.js';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';

  interface Props {
    type?: 'destructive' | 'primary' | 'neutral' | 'basic';
    rightIcon?: IconName;
    leftIcon?: IconName;
    widthFull?: boolean;
    size?: 40 | 36 | 32;
    disabled?: boolean;
    onClick?: Function;
    color?: ColorName;
    label?: string;
  }

  let {
    disabled = $bindable(false),
    label = 'Clique aqui',
    onClick = () => {},
    widthFull = false,
    type = 'primary',
    rightIcon,
    size = 40,
    leftIcon,
    color,
  }: Props = $props();

  let selectedColor = $state<ColorName>(handleColor());
  let contentColor = type !== 'basic' || color ? 'white' : selectedColor;
  let buttonWidth = widthFull ? 'w-full' : 'w-fit';

  let iconColor = $derived<ColorName>(type !== 'basic' || color ? 'white' : contentColor);
  let cursor = $derived(disabled ? 'not-allowed' : 'pointer');
  let resolvedColor = $derived(getColor(selectedColor).value);

  function mountClasses() {
    return `${buttonWidth} ${handleSize()}`;
  }

  function handleColor(): ColorName {
    if (color) return color;
    switch (type) {
      case 'basic':
        return 'black';
      case 'primary':
        return 'primary';
      case 'destructive':
        return 'red-500';
      case 'neutral':
        return 'neutral-500';
    }
  }

  function handleStyle() {
    if (disabled) {
      return `
      --btn-bg: var(--neutral-50);
      --btn-bg-hover: var(--neutral-50);
      --btn-border: rgba(255, 255, 255, 0.12);
      --btn-color: var(--neutral-200);
      --btn-shadow: none;
      --btn-shadow-hover: none;
    `;
    }

    const baseGradient = `
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0) 100%
    )
  `;

    const hoverGradient = `
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.24) 0%,
      rgba(255, 255, 255, 0) 100%
    )
  `;

    const baseShadow = `
    0 1px 2px 0 rgba(14, 18, 27, 0.24),
    0 0 0 1px ${resolvedColor}
  `;

    switch (type) {
      case 'basic':
        return `
        --btn-bg: white;
        --btn-bg-hover: color-mix(in srgb, ${resolvedColor} 10%, transparent);
        --btn-border: rgba(255, 255, 255, 0.12);
        --btn-color: ${resolvedColor};
        --btn-shadow: ${baseShadow};
        --btn-shadow-hover: ${baseShadow};
      `;
      default:
        return `
        --btn-bg: ${baseGradient}, ${resolvedColor};
        --btn-bg-hover: ${hoverGradient}, ${resolvedColor};
        --btn-border: rgba(255, 255, 255, 0.12);
        --btn-color: white;
        --btn-shadow: ${baseShadow};
        --btn-shadow-hover: ${baseShadow};
      `;
    }
  }

  function handleSize() {
    switch (size) {
      case 40:
        return 'h-10 px-2.5 gap-1 rounded-[.625rem]';
      case 36:
        return 'h-9 px-2 gap-1 rounded-lg';
      case 32:
        return 'h-8 px-1.5 gap-0.5 rounded-lg';
    }
  }

  async function handleClick() {
    await onClick?.();
  }
</script>

<button
  class="text-label-small fancy-button flex items-center justify-between hover:cursor-pointer {cursor} {type} {mountClasses()}"
  style={handleStyle()}
  onclick={handleClick}
>
  {@render renderIcon(leftIcon)}
  <div class="w-full items-center px-0.5">
    {label}
  </div>
  {@render renderIcon(rightIcon)}
</button>

{#snippet renderIcon(type?: IconName)}
  {#if type}
    <Icon {type} opticalSize={20} fillColor={iconColor} />
  {/if}
{/snippet}

<style>
  button {
    background: var(--btn-bg);
    color: var(--btn-color);
    border: 1px solid var(--btn-border);
    box-shadow: var(--btn-shadow);
    transition:
      background 0.15s ease,
      box-shadow 0.15s ease,
      border-color 0.15s ease;
  }

  button:hover {
    background: var(--btn-bg-hover);
    box-shadow: var(--btn-shadow-hover);
  }

  button:focus {
    box-shadow:
      0 0 0 2px var(--bg-white-0, #fff),
      0 0 0 4px var(--alpha-primary-alpha-10, var(--btn-focus)),
      var(--btn-shadow);
  }
</style>
