/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";

const useHttp = (
  requestHost: string,
  requestUrl?: string,
  requestMethod?: any,
  requestBody?: any
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (requestUrl) {
      axios({
        url: requestUrl,
        method: requestMethod ? requestMethod : "GET", //Default request is GET.
        data: requestBody ? requestBody : null, //Need to provide data for post requests.
      })
        .then((response: any) => {
          setData(response.data.response);
        })
        .then(() => {
          setIsLoading(false);
          setIsCompleted(true);
        })
        .catch((error: any) => {
          setError(error);
        });
    }
  }, []);

  const put = async ({
    url,
    data,
    options,
  }: {
    url: string;
    data: any;
    options?: any;
  }) => {
    try {
      setIsLoading(true);
      const response = await axios({
        url: `${requestHost}${url}`,
        method: "PUT",
        data,
        ...options,
      });
      setData(response.data);
      setIsLoading(false);
      setIsCompleted(true);
      return response.data;
    } catch (err) {
      setError(error);
      return error;
    }
  };
  const post = async ({
    url,
    data,
    options,
  }: {
    url: string;
    data: any;
    options?: any;
  }) => {
    try {
      setIsLoading(true);
      const response = await axios({
        url: `${requestHost}${url}`,
        method: "POST",
        data,
        ...options,
      });
      setData(response.data);
      setIsLoading(false);
      setIsCompleted(true);
      return response.data;
    } catch (err) {
      setError(error);
      return error;
    }
  };
  const get = async (url: string, options: any) => {
    try {
      setIsLoading(true);
      const response = await axios({
        url: `${requestHost}${url}`,
        method: "GET",

        ...options,
      });
      setData(response.data.response);
      setIsLoading(false);
      setIsCompleted(true);
      return response.data;
    } catch (error) {
      setError(error);
      return error;
    }
  };
  return {
    put: put,
    post: post,
    get: get,
    isLoading,
    error,
    isCompleted,
    data,
  };
};

export default useHttp;
