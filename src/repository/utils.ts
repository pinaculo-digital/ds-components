import { z } from "zod";
import type {
  BuildResult,
  SchemaTransformer,
  SchemaType,
  SetupData,
} from "./types";
import type { RoutesMap } from "../settings/url/routes-map";

export class Utils {
  createRoutes(map: RoutesMap) {
    return map;
  }

  // createPrettyUrls<T extends RoutesMap>(map: T) {
  //   const pretty: Record<string, (params: Record<string, string | number>) => string> = {};

  //   const hasParam = (path: string) => /\[.+?\]/.test(path);

  //   const sanitizeMap = (route: RouteNode) => {
  //     const mapper = Object.entries(route);

  //     mapper.forEach(([k, v]) => {
  //       if (k === 'url') return;
  //       if (typeof v === 'string') return;

  //       sanitizeMap(v);
  //       if (hasParam(k)) {
  //         generateFunction({ [k]: v });
  //       }
  //     });
  //   };

  //   function capitalizeFirstLetter(val: string) {
  //     return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  //   }

  //   function clearSpecial(texto: string) {
  //     return capitalizeFirstLetter(texto.replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, ''));
  //   }

  //   function buildFunctionName(params: { url: RouteNode['url']; name: string }) {
  //     const { name, url } = params;

  //     const allParams = url.split('/');
  //     const lastParam = capitalizeFirstLetter(allParams[allParams.length - 2]);

  //     return `get${clearSpecial(lastParam)}by${clearSpecial(name)}`;
  //   }

  //   const generateFunction = (route: RouteNode) => {
  //     Object.entries(route).forEach(([k, v]) => {
  //       if (typeof v === 'string') return;
  //       const name = buildFunctionName({ url: v.url, name: k });

  //       console.log(name);
  //     });
  //   };

  //   for (const key in map) {
  //     const path = map[key] as RouteNode;

  //     sanitizeMap(path);
  //   }

  //   // tipar de forma precisa para o chamador
  //   // return pretty as unknown as PrettyRoutes<T>;
  // }

  newForm<S extends z.ZodObject>(schema: S): SetupData<z.infer<S>> {
    type Shape = z.infer<S>;

    const defaults = schema.parse({}) as Shape;
    let out = {} as SetupData<Shape>;

    (Object.keys(schema.shape) as (keyof Shape)[]).forEach((key) => {
      const pick = schema.pick({ [key as string]: true });

      let required: boolean;
      const objectShape = pick.shape[key as string];
      const teste = objectShape.def;
      const isArray = objectShape._def.innerType._def.type === "array";

      if (teste.innerType) {
        required = teste.innerType.isOptional();
      } else {
        required = !teste.out.isOptional();
      }

      const newOut = {
        value: defaults[key],
        display: defaults[key],
        validator: (v: Shape[typeof key]) => pick.safeParse({ [key]: v }),
        required: !required,
        meta: pick.def.shape?.file?.meta(),
      };

      out = { ...out, [key]: isArray ? [] : newOut };
    });

    return out;
  }

  build = <
    T extends string,
    S extends z.ZodObject<z.ZodRawShape>,
    Trans extends Partial<Record<SchemaType, SchemaTransformer<S>>>
  >({
    zName,
    schema,
    transformers,
  }: {
    zName: T;
    schema: S;
    transformers?: Trans;
  }): BuildResult<T, S, Trans> => {
    const trans = transformers ?? ({} as Trans);

    return {
      [`${zName}InputSchema`]: trans.Input ? trans.Input(schema) : schema,
      [`${zName}EntrySchema`]: trans.Entry ? trans.Entry(schema) : schema,
      [`${zName}DtoSchema`]: trans.Dto ? trans.Dto(schema) : schema,
      [`${zName}OutputSchema`]: trans.Output ? trans.Output(schema) : schema,
      [`${zName}FilterSchema`]: trans.Filter ? trans.Filter(schema) : schema,
    } as BuildResult<T, S, Trans>;
  };
}
