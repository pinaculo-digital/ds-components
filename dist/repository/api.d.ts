import { Method, AxiosRequestConfig } from 'axios';
declare class Api {
    private readonly URL;
    private readonly axiosInstance;
    constructor();
    private handleRequest;
    private makeRequest;
    private getResponseBehavior;
    post<T>(params: {
        endpoint: string;
        data?: unknown;
    }): Promise<T>;
    get<T, Q>(params: {
        endpoint: string;
        queryData?: {
            [K in keyof Q]: unknown;
        };
    }): Promise<T>;
    put<T>(params: {
        endpoint: string;
        data: unknown;
    }): Promise<unknown>;
    delete<T>(endpoint: string): Promise<unknown>;
    formData<T>(params: {
        endpoint: string;
        body: FormData;
        method: Method;
        fileLabel: string;
        headers?: AxiosRequestConfig["headers"];
    }): Promise<T>;
}
declare const api: Api;
export default api;
