import toast from "../lib/utils/toast.svelte";
import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type Method,
  type AxiosRequestConfig,
} from "axios";
import repo from "./main";
import dev from "../settings/project.svelte";

interface ApiResponse<T> {
  data: T;
  statusCode: number;
  message: string;
}

type ErrorResponse = {
  response: { status: number; data: { message: string } };
};

class Api {
  private readonly URL: string;
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.URL = dev.backendUrl;
    this.axiosInstance = axios.create({
      baseURL: this.URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosInstance.interceptors.request.use(this.handleRequest);
  }

  private handleRequest(
    config: InternalAxiosRequestConfig<unknown>
  ): InternalAxiosRequestConfig<unknown> {
    const mounted = document.querySelector("body");
    if (!mounted)
      throw new Error(
        "Componente não renderizado ao lado do cliente para pegar o localstorage"
      );

    config.headers["Authorization"] = `Bearer ${repo.storage.getStoredData(
      "aprovei-token"
    )}`;
    return config;
  }

  private async makeRequest<T>(params: {
    method: Method;
    url: string;
    data?: unknown;
    headers?: AxiosRequestConfig["headers"];
  }): Promise<ApiResponse<T>> {
    const { headers, ...rest } = params;

    try {
      return (
        await this.axiosInstance.request<ApiResponse<T>>({
          ...rest,
          headers: { ...headers },
        })
      ).data;
    } catch (err) {
      const error = err as ErrorResponse;
      const statusCode = error.response?.status;
      const message = error.response?.data?.message;

      this.getResponseBehavior({ statusCode, message });

      if (!statusCode) {
        toast.error(
          "Erro inesperado aconteceu",
          "Talvez o servidor esteja inacessível."
        );
      }

      // relança para o chamador lidar, se quiser
      throw new Error(`[${statusCode}] ${message}`);
    }
  }

  private async getResponseBehavior(params: {
    statusCode: number;
    message: string;
  }) {
    const { statusCode, message } = params;
    if (statusCode === 401) {
      window.location.replace("/");
      toast.error(
        message,
        `Acessar esta página exige que você esteja autenticado.`
      );
    } else if (statusCode && message) {
      toast.error(`Status Code: ${statusCode}`, message);
    }
  }

  async post<T>(params: { endpoint: string; data?: unknown }): Promise<T> {
    const { endpoint, data } = params;
    const res = await this.makeRequest<T>({
      method: "POST",
      url: endpoint,
      data,
    });
    return res?.data;
  }

  async get<T, Q>(params: {
    endpoint: string;
    queryData?: { [K in keyof Q]: unknown };
  }): Promise<T> {
    const { endpoint, queryData } = params;
    let data: string = "";

    if (queryData) {
      data =
        "?" +
        Object.entries(queryData)
          .filter(([, value]) => value !== null && value !== undefined)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");
    }

    const res = await this.makeRequest<T>({
      method: "GET",
      url: endpoint + data,
    });
    return res.data;
  }

  async put<T>(params: { endpoint: string; data: unknown }): Promise<unknown> {
    const { endpoint, data: body } = params;

    const res = await this.makeRequest<T>({
      method: "PUT",
      url: endpoint,
      data: body,
    });

    return res.data;
  }

  async delete<T>(endpoint: string): Promise<unknown> {
    const res = await this.makeRequest<T>({
      method: "DELETE",
      url: endpoint,
    });
    return res.data;
  }

  async formData<T>(params: {
    endpoint: string;
    body: FormData;
    method: Method;
    fileLabel: string;
    headers?: AxiosRequestConfig["headers"];
  }): Promise<T> {
    const { endpoint, body, method, fileLabel, headers } = params;

    const res = await this.makeRequest<T>({
      method,
      url: endpoint,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
        ...headers,
      },
    });

    if (res.message) {
      toast.success(`${fileLabel} substituído(a) com sucesso!`, "");
    }

    return res.data;
  }
}

const api = new Api();
export default api;
