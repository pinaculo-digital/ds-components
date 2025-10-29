import { icons } from "./icons.js";
export const iconsMap = icons.reduce((acc, icon) => {
    acc[icon.name] = icon;
    return acc;
}, {});
export function getIcon(name) {
    const found = iconsMap[name];
    if (!found)
        throw new Error(`Icon "${name}" não encontrado`);
    return found;
}
