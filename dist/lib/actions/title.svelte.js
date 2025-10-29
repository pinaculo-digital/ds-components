import TipAction from '$components/elements/card/TipAction.svelte';
import { mount, unmount } from 'svelte';
export const tooltip = (node, info) => {
    $effect(() => {
        if (info.text === null)
            return;
        let props = $state({
            visible: false,
            tip: info.text,
            father: node,
            posTri: info.posTriangulo,
        });
        let div = mount(TipAction, {
            target: document.body,
            props: props,
        });
        const handleOver = () => {
            props.visible = true;
        };
        const handleOut = () => {
            props.visible = false;
        };
        node.addEventListener('mouseover', handleOver);
        node.addEventListener('mouseout', handleOut);
        return () => {
            unmount(div);
            node.removeEventListener('mouseover', handleOver);
            node.removeEventListener('mouseover', handleOut);
        };
    });
};
