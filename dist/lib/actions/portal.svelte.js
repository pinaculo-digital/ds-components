export const portal = (node, selector) => {
    $effect(() => {
        const target = document.querySelector(selector);
        if (!target) {
            console.warn('Target não obtido para portal');
            return;
        }
        const copy = node;
        node.remove();
        target.append(copy);
        return () => {
            if (target.contains(copy)) {
                target.removeChild(copy);
            }
        };
    });
};
