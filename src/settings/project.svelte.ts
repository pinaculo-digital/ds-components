const env = import.meta as ImportMeta & {
  env: Record<string, unknown> | Record<string, string>;
};
const PUBLIC_BACKEND = env.env.PUBLIC_BACKEND as string;
if (!PUBLIC_BACKEND) {
  throw new Error("PUBLIC_BACKEND is not defined");
}

class Dev {
  public backendUrl = PUBLIC_BACKEND;
  public projectName = "Pináculo Digital";
}

const dev = new Dev();
export default dev;
