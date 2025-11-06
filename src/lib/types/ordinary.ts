export type Temas =
  | "default"
  | "primary"
  | "red"
  | "black"
  | "green"
  | "transparent"
  | "blue-transparent"
  | "red-transparent"
  | "black-transparent"
  | "gray-transparent"
  | "primary-gradient"
  | "red-transparent-inverted"
  | "desabilitado"
  | "b-astronfy"
  | "discord"
  | "hostinger"
  | "primary-ghost";

export type RangeType = {
  start: Date | null;
  end: Date | null;
};

export type RangeString = {
  start: string;
  end: string;
};
