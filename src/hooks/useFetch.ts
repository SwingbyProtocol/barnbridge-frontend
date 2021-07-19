import { useCallback, useEffect, useRef, useState } from 'react';
import QueryString from 'query-string';

export type UseFetchOptions<T> = {
  lazy?: boolean;
  depends?: any[];
  transform?: (value: any) => T;
};

export type UseFetchReturn<T> = {
  loading: boolean;
  loaded: boolean;
  data: T | undefined;
  error: Error | undefined;
  load: () => Promise<void>;
};

export type PaginatedResult<T extends any = any> = {
  data: T[];
  meta: {
    count: number;
    block: number;
  };
};

export async function executeFetch<T = any>(query: string | URL): Promise<T> {
  try {
    const response = await fetch(String(query));

    if (!response.ok) {
      throw await response.json();
    }

    return await response.json();
  } catch (e) {
    return Promise.reject(e);
  }
}

export function useFetch<T extends any = any>(query: string | URL, options?: UseFetchOptions<T>): UseFetchReturn<T> {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState<any | undefined>();
  const [error, setError] = useState<Error | undefined>();

  const optionsRef = useRef(options);
  optionsRef.current = options;

  const strQuery = String(query);

  const fetchData = useCallback(async (query: string) => {
    if (!query) {
      return;
    }

    setLoading(true);

    try {
      const data = await executeFetch(query);

      setLoaded(true);
      setData((optionsRef.current?.transform ?? (v => v))(data));
    } catch (e) {
      setError(e);
      setData(undefined);
    }

    setLoading(false);
  }, []);

  const load = useCallback(() => {
    setLoaded(false);
    return fetchData(strQuery);
  }, [fetchData, strQuery]);

  useEffect(() => {
    if (optionsRef.current?.lazy !== true || loaded) {
      fetchData(strQuery).catch(Error);
    }
  }, [fetchData, strQuery]);

  return {
    loading,
    loaded,
    data,
    error,
    load,
  };
}

export function queryfy(obj: Record<string, any>): string {
  return QueryString.stringify(obj, {
    skipEmptyString: true,
    skipNull: true,
    arrayFormat: 'comma',
    encode: true,
  });
}
