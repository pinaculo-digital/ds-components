export type generatedBaseComponents = {
  components: {
    name: string;
    path: string | null;
  }[];
};

export type mockObject = Record<string, any>;

export type props = {
  prop: string;
  value: string;
};

export type componentInfo = {
  listComponents: {
    file: string;
    props: props[];
    mock?: mockObject;
  }[];
};
