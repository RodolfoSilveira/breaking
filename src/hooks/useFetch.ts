import { AxiosRequestConfig } from 'axios';
import useSWR, { SWRConfiguration } from 'swr';
import api from 'services/api';

export function useFetch<Data>(
  url: string | null,
  options?: AxiosRequestConfig,
  swrConfig?: SWRConfiguration,
) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url, options);

      return response.data;
    },
    swrConfig,
  );

  return { data, error, mutate };
}
