<script lang="ts">
    import Icon from '../../../assets/icon/Icon.svelte';

    import type { ColorName } from '../../../lib/utils/colors/colors-utils.js';
    import type { IconName } from '../../../lib/utils/icons/icons-type.js';
    import { getColor } from '../../../lib/utils/colors/colors-utils.js';

    interface Props {
        bgColor?: ColorName;
        icon: IconName;
        disabled?: boolean;
        roundedFull?: boolean;
        click: VoidFunction;
    }

    let { bgColor = 'red-500', icon = 'mail-line', disabled = $bindable(false), click, roundedFull = false }: Props = $props();

    const selectedColor = $derived(getColor(bgColor ?? 'transparent').value);
</script>

<button
onclick={click}
class="{bgColor ? '' : 'border border-neutral-200'} {disabled
    ? 'pointer-events-none opacity-50'
    : ''} bg-sub-50 text-sub-600 hover:bg-sub-100 flex cursor-pointer items-center justify-center gap-2 {roundedFull ? 'rounded-full' : 'rounded-lg'} p-2"
style="background-color: {selectedColor}"
>
<div class="-mt-0.5 -ml-0.5">
    <Icon type={icon} fillColor={bgColor ? 'white' : 'neutral-600'} />
</div>
</button>