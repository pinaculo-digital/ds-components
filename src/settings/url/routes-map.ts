/* AUTO-GERADO por scripts/generate-routes-map.ts
 * - URLs estáticas: string
 * - URLs dinâmicas: (params) => string   (valida ausências e faz encode)
 */

type RouteUrl<P extends Record<string, string | number> = Record<string, string | number>> =
  string | ((params: P) => string);

export type RouteNode = { url: RouteUrl<any> } & { [k: string]: RouteNode };
export const routesMap = {
    "admin": {
      "url": "/admin",
      "usuarios": {
        "url": "/admin/usuarios",
        "userId": {
          "url": (params: { userId: string | number }) => {
            return `/admin/usuarios/[userId]`.replace(/\[(.+?)\]/g, (_m, p: string) => {
              const v = (params as Record<string, string | number>)[p];
              if (v === undefined) throw new Error(`Parâmetro obrigatório ausente: "${p}"`);
              return encodeURIComponent(String(v));
            });
          },
          "posts": {
            "url": (params: { userId: string | number }) => {
              return `/admin/usuarios/[userId]/posts`.replace(/\[(.+?)\]/g, (_m, p: string) => {
                const v = (params as Record<string, string | number>)[p];
                if (v === undefined) throw new Error(`Parâmetro obrigatório ausente: "${p}"`);
                return encodeURIComponent(String(v));
              });
            },
            "postId": {
              "url": (params: { userId: string | number; postId: string | number }) => {
                return `/admin/usuarios/[userId]/posts/[postId]`.replace(/\[(.+?)\]/g, (_m, p: string) => {
                  const v = (params as Record<string, string | number>)[p];
                  if (v === undefined) throw new Error(`Parâmetro obrigatório ausente: "${p}"`);
                  return encodeURIComponent(String(v));
                });
              },
            },
          },
        },
      },
    },
    "login": {
      "url": "/login",
    },
    "recuperarSenha": {
      "url": "/recuperar-senha",
    },
    "registrar": {
      "url": "/registrar",
    },
    "verificarCodigo": {
      "url": "/verificar-codigo",
    },
    "ds": {
      "url": "/ds",
      "baseComponents": {
        "url": "/ds/base-components",
        "componentName": {
          "url": (params: { componentName: string | number }) => {
            return `/ds/base-components/[componentName]`.replace(/\[(.+?)\]/g, (_m, p: string) => {
              const v = (params as Record<string, string | number>)[p];
              if (v === undefined) throw new Error(`Parâmetro obrigatório ausente: "${p}"`);
              return encodeURIComponent(String(v));
            });
          },
        },
      },
      "coreElements": {
        "url": "/ds/core-elements",
        "borderRadius": {
          "url": "/ds/core-elements/border-radius",
        },
        "colorPalette": {
          "url": "/ds/core-elements/color-palette",
        },
        "typography": {
          "url": "/ds/core-elements/typography",
        },
      },
    },
    "ale": {
      "url": "/ale",
    },
    "assets": {
      "url": "/assets",
      "avatar": {
        "url": "/assets/avatar",
      },
      "badges": {
        "url": "/assets/badges",
      },
      "banner": {
        "url": "/assets/banner",
      },
      "breadcrumb": {
        "url": "/assets/breadcrumb",
        "dashboard": {
          "url": "/assets/breadcrumb/dashboard",
        },
      },
      "check": {
        "url": "/assets/check",
      },
      "filters": {
        "url": "/assets/filters",
      },
      "graficos": {
        "url": "/assets/graficos",
      },
      "inputs": {
        "url": "/assets/inputs",
      },
      "pagination": {
        "url": "/assets/pagination",
      },
      "rating": {
        "url": "/assets/rating",
      },
      "ratio": {
        "url": "/assets/ratio",
      },
      "selects": {
        "url": "/assets/selects",
      },
      "slider": {
        "url": "/assets/slider",
      },
      "stepIndicator": {
        "url": "/assets/step-indicator",
      },
      "tags": {
        "url": "/assets/tags",
      },
      "toggle": {
        "url": "/assets/toggle",
      },
    },
    "builds": {
      "url": "/builds",
      "market": {
        "url": "/builds/market",
        "modal": {
          "url": "/builds/market/modal",
        },
      },
      "nav": {
        "url": "/builds/nav",
      },
    },
    "usuarios": {
      "url": "/usuarios",
    },
  } as const;

export type RoutesMap = typeof routesMap;
