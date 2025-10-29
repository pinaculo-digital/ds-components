import { iconsList } from './icons';
export type Icon = (typeof iconsList)[number];
export type IconName = Icon['name'];
export declare const iconsMap: Record<IconName, Icon>;
export declare function getIcon<N extends IconName>(name: N): Icon;
