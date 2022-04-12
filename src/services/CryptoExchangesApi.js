import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const key = process.env.REACT_APP_EXCHANGE_COIN_API_KEY

const authorizationHeaders = {
  //   'Accept': 'application/json',
  //   'Accept-Encoding': 'deflate, gzip',
  'X-CoinAPI-Key': `${key}`,
}

const baseUrl = 'https://rest.coinapi.io'

// helper function
const createRequest = (url) => ({ url, headers: authorizationHeaders })

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: () => createRequest('/v1/exchanges'),
    }),
    getCryptoExchangesIcons: builder.query({
      query: () => createRequest('/v1/exchanges/icons/32'),
    }),
  }),
})

export const { useGetCryptoExchangesQuery, useGetCryptoExchangesIconsQuery } =
  cryptoExchangesApi
