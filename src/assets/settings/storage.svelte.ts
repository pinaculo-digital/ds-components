import CryptoJS from 'crypto-js';
import { derived, writable } from 'svelte/store';
import dev from '../settings/project.svelte';

class StorageService {
  private readonly secretKey: string;

  /**
   * Construtor da classe StorageService
   * @param secretKey - Chave secreta utilizada para criptografar e descriptografar os dados
   */
  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  /**
   * Criptografa os dados utilizando AES.
   * @param data - Os dados que serão criptografados.
   * @returns A string criptografada dos dados.
   */
  private encryptData(data: unknown): string {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  /**
   * Descriptografa os dados utilizando AES.
   * @param ciphertext - A string criptografada.
   * @returns Os dados descriptografados.
   */
  private decryptData(ciphertext: string) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  /**
   * Armazena dados criptografados no localStorage.
   * @param key - A chave sob a qual os dados serão armazenados.
   * @param dataToStore - Os dados a serem armazenados.
   * @returns Retorna true se os dados forem armazenados com sucesso, false em caso de erro.
   */
  public storeData(key: string, dataToStore: unknown): boolean {
    try {
      const encryptedData = this.encryptData(dataToStore);
      localStorage.setItem(key, encryptedData);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /**
   * Recupera e descriptografa os dados armazenados no localStorage.
   * @param dataToRecover - A chave para recuperar os dados armazenados.
   * @returns Retorna os dados descriptografados ou null em caso de erro ou se os dados não existirem.
   */
  public getStoredData<T>(dataToRecover: string): T | null {
    if (typeof localStorage === 'undefined') return null;
    try {
      let decryptedData = null;
      const storedData = localStorage.getItem(dataToRecover);
      if (storedData) decryptedData = this.decryptData(storedData);
      return decryptedData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  /**
   * Remove dados armazenados no localStorage.
   * @param dataToDelete - A chave para remover os dados armazenados. Caso nenhum dado seja especificado, todos os dados serão removidos.
   */
  public clearData(dataToDelete: string): void {
    localStorage.removeItem(dataToDelete);
  }

  public clearAllStoredData(): boolean {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

const storage = new StorageService('yusadgfiuyasfgd');
export default storage;

const _count = writable(1); // << começa ON
export const skeleton = derived(_count, (n) => n > 0);

export function startSkeleton() {
  _count.update((n) => n + 1);
}
export function stopSkeleton() {
  _count.update((n) => Math.max(0, n - 1));
}

// “apaga” o ticket inicial de boot
export function finishBoot() {
  stopSkeleton();
}
