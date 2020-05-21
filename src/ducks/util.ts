import axios, { AxiosResponse } from 'axios';

/**
 *
 * @param path  '/.*'
 * @param data any
 * @param headers any
 */
export const post = (
  path: string,
  data: any,
  headers?: any
) => {
  const _headers = $.extend({}, headers || {}, {
    // Accept: 'application/json',
    // 'Content-Type': 'application/json'
  });

  return axios.post(
      `${process.env.EXAMPLE_DOMAIN}${path}`,
      data,
    {
      headers: _headers
    })
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch(error => {
        if (typeof error === 'string') {
          return { error };
        }
        if (error && typeof error.stack === 'string') {
          return { error: error.stack };
        }
        return { error: error.toString() };
      });
};
