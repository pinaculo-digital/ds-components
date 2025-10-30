import { iconsList } from "./icons.js";

export type Icon = (typeof iconsList)[number];
export type IconName = Icon["name"];

export const iconsMap: Record<IconName, Icon> = iconsList.reduce(
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
