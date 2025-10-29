<<<<<<< HEAD
import { icons } from "./icons.js";
export type Icon = (typeof icons)[number];
export type IconName = Icon["name"];
=======
import { iconsList } from './icons';
export type Icon = (typeof iconsList)[number];
export type IconName = Icon['name'];
>>>>>>> fae945514fecb9d2f7205440a0930cdbb50cde3d
export declare const iconsMap: Record<IconName, Icon>;
export declare function getIcon<N extends IconName>(name: N): Icon;
