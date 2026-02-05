import { generateRoutesMap, initRoutesMapWatcher } from './generateRouteMap.js';

export function routesMapPlugin() {
  return {
    name: 'vite-plugin-routes-map',
    // para dev server: gera + observa
    configureServer() {
      initRoutesMapWatcher();
    },
    // para build: gera uma vez antes de empacotar
    buildStart() {
      generateRoutesMap();
    },
  };
}
