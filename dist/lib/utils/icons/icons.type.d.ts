import { icons } from "./icons.js";
export type Icon = (typeof icons)[number];
export type IconName = Icon["name"];
export declare const iconsMap: Record<IconName, Icon>;
export declare function getIcon<N extends IconName>(name: N): Icon;
