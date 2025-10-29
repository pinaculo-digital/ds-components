import type StorageType from "./storage.svelte";
import storage from "./storage.svelte";
import api from "./api";

import { routesMap } from "../settings/url/routes-map";
import { Utils } from "./utils";

class Repo {
  api: typeof api = api;
  url: ReturnType<Utils["createRoutes"]> = new Utils().createRoutes(routesMap);
  storage: typeof StorageType = storage;
}

const repo = new Repo();
export default repo;
