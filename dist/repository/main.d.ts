import { default as api } from './api';
import { default as StorageType } from './storage.svelte';
import { Utils } from './utils';
declare class Repo {
    api: typeof api;
    url: ReturnType<Utils["createRoutes"]>;
    storage: typeof StorageType;
}
declare const repo: Repo;
export default repo;
