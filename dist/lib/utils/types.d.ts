export type AnyPrimitive = number | boolean | string | undefined;
export type Option = {
    label: string;
    value: any;
    [key: string]: any;
};
export interface MainComponentType {
    hasSelection: boolean;
    optionSelected: Option | Option[] | null;
    placeholder: string;
    isActive: boolean;
    onClick: VoidFunction;
    disabled?: boolean;
}
export interface OptionComponentType {
    data: Option;
    isSelected: boolean;
    onClick: VoidFunction;
}
