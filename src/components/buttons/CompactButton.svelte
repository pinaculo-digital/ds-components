<script lang="ts">
  import Icon from '../../assets/icon/Icon.svelte';

    import type { ColorName} from '../../lib/utils/colors/colors.utils.js';
  import { getColor } from '../../lib/utils/colors/colors.utils.js';
  import type { IconName } from '../../lib/utils/icons/icons.type.js';

  interface Props {
    style?: 'filled' | 'stroke' | 'lighter' | 'ghost';
    size?: 40 | 36 | 32 | 28;
    widthFull?: boolean;
    disabled?: boolean;
    onClick: Function;
    color?: ColorName;
    icon: IconName;
  }

  let {
    disabled = $bindable(false),
    widthFull = false,
    color = 'primary',
    style = 'filled',
    size = 40,
    onClick,
    icon,
  }: Props = $props();

  let hoverColor = color === 'primary' ? 'primary-dark' : ((color.split('-')[0] + '-700') as ColorName);
  let contentColor = style === 'filled' ? 'white' : color;
  let buttonWidth = widthFull ? 'w-full' : 'w-fit';

  let iconColor = $derived<ColorName>(disabled ? 'neutral-200' : contentColor);
  let resolvedHoverColor = $derived(getColor(hoverColor).value);
  let cursor = $derived(disabled ? 'not-allowed' : 'pointer');
  let resolvedColor = $derived(getColor(color).value);

  function mountClasses() {
    return `${buttonWidth} ${handleSize()}`;
  }

  function handleStyle() {
    if (disabled) {
      return `
        --btn-bg: var(--neutral-50);
        --btn-border: var(--neutral-50);
        --btn-color: var(--neutral-200);
        --btn-hover-bg: var(--neutral-50);
        --btn-hover-border: var(--neutral-50);
      `;
    }
    switch (style) {
      case 'filled':
        return `
        --btn-bg: ${resolvedColor};
        --btn-border: ${resolvedColor};
        --btn-color: white;
        --btn-hover-bg: ${resolvedHoverColor};
        --btn-hover-border: ${resolvedHoverColor};
      `;

      case 'stroke':
        return `
        --btn-bg: white;
        --btn-border: ${resolvedColor};
        --btn-color: ${resolvedColor};
        --btn-hover-bg: color-mix(in srgb, ${resolvedColor} 10%, transparent);
        --btn-focus: color-mix(in srgb, ${resolvedColor} 10%, transparent);
        --btn-hover-border: ${resolvedColor};
      `;

      case 'lighter':
        return `
        --btn-bg: color-mix(in srgb, ${resolvedColor} 10%, transparent);
        --btn-focus: color-mix(in srgb, ${resolvedColor} 10%, transparent);
        --btn-border: transparent;
        --btn-color: ${resolvedColor};
        --btn-hover-bg: white;
        --btn-hover-border: ${resolvedColor};
      `;

      case 'ghost':
        return `
        --btn-bg: transparent;
        --btn-border: ${resolvedColor};
        --btn-color: ${resolvedColor};
        --btn-hover-bg: color-mix(in srgb, ${resolvedHoverColor} 10%, transparent);
        --btn-focus: color-mix(in srgb, ${resolvedHoverColor} 10%, transparent);
        --btn-hover-border: transparent;
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
      case 28:
        return 'h-7 px-1.5 gap-0.5 rounded-lg';
    }
  }

  async function handleClick() {
    await onClick();
  }
</script>

<button
  class="text-label-small flex items-center justify-between hover:cursor-pointer {cursor} {style} {mountClasses()}"
  style={handleStyle()}
  onclick={handleClick}
>
  <Icon type={icon} opticalSize={20} fillColor={iconColor} />
</button>

<style>
  button {
    background-color: var(--btn-bg);
    color: var(--btn-color);
    transition:
      background-color 0.15s ease,
      border-color 0.15s ease;
  }

  button:not(.ghost) {
    border: 1px solid var(--btn-border);
  }

  button:hover {
    background-color: var(--btn-hover-bg);
    border-color: var(--btn-hover-border);
  }

  button:focus {
    box-shadow:
      0 0 0 2px var(--bg-white-0, #fff),
      0 0 0 4px var(--alpha-primary-alpha-10, var(--btn-focus));
    border: 1px solid var(--btn-border);
  }
</style>
