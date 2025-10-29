declare enum ENUM_USER_ROLE {
    ADMIN = "ADMIN",
    USER = "USER"
}
declare enum ENUM_USER_STATUS {
    ATIVO = "ATIVO",
    INATIVO = "INATIVO"
}
type UserEntry = {
    token: string;
    role: ENUM_USER_ROLE;
    id: string;
    status: ENUM_USER_STATUS;
    name?: string | undefined;
};
declare class StorageService {
    private readonly secretKey;
    /**
     * Construtor da classe StorageService
     * @param secretKey - Chave secreta utilizada para criptografar e descriptografar os dados
     */
    constructor(secretKey: string);
    /**
     * Criptografa os dados utilizando AES.
     * @param data - Os dados que serão criptografados.
     * @returns A string criptografada dos dados.
     */
    private encryptData;
    /**
     * Descriptografa os dados utilizando AES.
     * @param ciphertext - A string criptografada.
     * @returns Os dados descriptografados.
     */
    private decryptData;
    /**
     * Armazena dados criptografados no localStorage.
     * @param key - A chave sob a qual os dados serão armazenados.
     * @param dataToStore - Os dados a serem armazenados.
     * @returns Retorna true se os dados forem armazenados com sucesso, false em caso de erro.
     */
    storeData(key: string, dataToStore: unknown): boolean;
    /**
     * Recupera e descriptografa os dados armazenados no localStorage.
     * @param dataToRecover - A chave para recuperar os dados armazenados.
     * @returns Retorna os dados descriptografados ou null em caso de erro ou se os dados não existirem.
     */
    getStoredData<T>(dataToRecover: string): T | null;
    /**
     * Remove dados armazenados no localStorage.
     * @param dataToDelete - A chave para remover os dados armazenados. Caso nenhum dado seja especificado, todos os dados serão removidos.
     */
    clearData(dataToDelete: string): void;
    clearAllStoredData(): boolean;
}
declare const storage: StorageService;
export default storage;
export declare const skeleton: import('svelte/store').Readable<boolean>;
export declare function startSkeleton(): void;
export declare function stopSkeleton(): void;
export declare function finishBoot(): void;
export declare const userData: UserEntry | null;
export declare const saveUserData: (data: UserEntry) => boolean;
