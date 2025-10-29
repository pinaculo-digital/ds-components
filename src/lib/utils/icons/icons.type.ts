import { icons } from "./icons.js";

export type Icon = (typeof icons)[number];
export type IconName = Icon["name"];

export const iconsMap: Record<IconName, Icon> = icons.reduce(
  (acc, icon) => {
    acc[icon.name] = icon;
    return acc;
  },
  {} as Record<IconName, Icon>
);

export function getIcon<N extends IconName>(name: N): Icon {
  const found = iconsMap[name];
  if (!found) throw new Error(`Icon "${name}" não encontrado`);
  return found;
}
