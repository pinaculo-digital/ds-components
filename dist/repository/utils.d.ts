import { z } from 'zod';
import { BuildResult, SchemaTransformer, SchemaType, SetupData } from './types';
import { RoutesMap } from '../settings/url/routes-map';
export declare class Utils {
    createRoutes(map: RoutesMap): {
        readonly admin: {
            readonly url: "/admin";
            readonly usuarios: {
                readonly url: "/admin/usuarios";
                readonly userId: {
                    readonly url: (params: {
                        userId: string | number;
                    }) => string;
                    readonly posts: {
                        readonly url: (params: {
                            userId: string | number;
                        }) => string;
                        readonly postId: {
                            readonly url: (params: {
                                userId: string | number;
                                postId: string | number;
                            }) => string;
                        };
                    };
                };
            };
        };
        readonly login: {
            readonly url: "/login";
        };
        readonly recuperarSenha: {
            readonly url: "/recuperar-senha";
        };
        readonly registrar: {
            readonly url: "/registrar";
        };
        readonly verificarCodigo: {
            readonly url: "/verificar-codigo";
        };
        readonly ds: {
            readonly url: "/ds";
            readonly baseComponents: {
                readonly url: "/ds/base-components";
                readonly componentName: {
                    readonly url: (params: {
                        componentName: string | number;
                    }) => string;
                };
            };
            readonly coreElements: {
                readonly url: "/ds/core-elements";
                readonly borderRadius: {
                    readonly url: "/ds/core-elements/border-radius";
                };
                readonly colorPalette: {
                    readonly url: "/ds/core-elements/color-palette";
                };
                readonly typography: {
                    readonly url: "/ds/core-elements/typography";
                };
            };
        };
        readonly ale: {
            readonly url: "/ale";
        };
        readonly assets: {
            readonly url: "/assets";
            readonly avatar: {
                readonly url: "/assets/avatar";
            };
            readonly badges: {
                readonly url: "/assets/badges";
            };
            readonly banner: {
                readonly url: "/assets/banner";
            };
            readonly breadcrumb: {
                readonly url: "/assets/breadcrumb";
                readonly dashboard: {
                    readonly url: "/assets/breadcrumb/dashboard";
                };
            };
            readonly check: {
                readonly url: "/assets/check";
            };
            readonly filters: {
                readonly url: "/assets/filters";
            };
            readonly graficos: {
                readonly url: "/assets/graficos";
            };
            readonly inputs: {
                readonly url: "/assets/inputs";
            };
            readonly pagination: {
                readonly url: "/assets/pagination";
            };
            readonly rating: {
                readonly url: "/assets/rating";
            };
            readonly ratio: {
                readonly url: "/assets/ratio";
            };
            readonly selects: {
                readonly url: "/assets/selects";
            };
            readonly slider: {
                readonly url: "/assets/slider";
            };
            readonly stepIndicator: {
                readonly url: "/assets/step-indicator";
            };
            readonly tags: {
                readonly url: "/assets/tags";
            };
            readonly toggle: {
                readonly url: "/assets/toggle";
            };
        };
        readonly builds: {
            readonly url: "/builds";
            readonly market: {
                readonly url: "/builds/market";
                readonly modal: {
                    readonly url: "/builds/market/modal";
                };
            };
            readonly nav: {
                readonly url: "/builds/nav";
            };
        };
        readonly usuarios: {
            readonly url: "/usuarios";
        };
    };
    newForm<S extends z.ZodObject>(schema: S): SetupData<z.infer<S>>;
    build: <T extends string, S extends z.ZodObject<z.ZodRawShape>, Trans extends Partial<Record<SchemaType, SchemaTransformer<S>>>>({ zName, schema, transformers, }: {
        zName: T;
        schema: S;
        transformers?: Trans;
    }) => BuildResult<T, S, Trans>;
}
