<script lang="ts">
    import Icon from "../../../assets/icon/Icon.svelte";

    import type { IconName } from "../../../lib/utils/icons/icons-type.js";
    import { writable } from "svelte/store";

    interface MenuItem {
        label: string;
        icon: IconName;
        url: string;
    }

    interface Props{
        menuItems: MenuItem[];
        menuName: string;
        redirect: (route: string) => void
    }

    const indexRota = writable(0);

    let { menuItems, menuName, redirect }: Props = $props();

    function changeRoute(index: number, url: string) {
        indexRota.set(index);
        redirect(url);
    }
</script>


<div class="flex flex-col gap-2 border border-soft-200 rounded-2xl p-2.5 min-w-[238px]">
    <p class="text-12 font-normal text-soft-400 py-1 px-2">{menuName}</p>
    {#each menuItems as { label, icon, url }, i}
        <button
        class="flex items-center gap-1.5 justify-between p-2 text-14 font-medium hover:bg-weak-50 {$indexRota === i
            ? 'bg-weak-50 text-strong-950'
            : 'bg-transparent text-sub-600'} rounded-lg"
        onclick={() => changeRoute(i, url)}>
        <div class="flex items-center gap-1.5">
            <Icon fillColor="neutral-600" opticalSize={20} type={icon} />
            {label}
        </div>
        <span
            class="bg-white-0 rounded-full w-5 h-5 {$indexRota === i
            ? 'flex'
            : 'hidden'} items-center justify-center transition-all duration-300 ease-in-out"
            >
            <Icon fillColor="neutral-600" opticalSize={16} type="check-line" />
        </span>
        </button>
    {/each}
    </div>