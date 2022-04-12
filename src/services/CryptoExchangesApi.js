import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const key = process.env.REACT_APP_EXCHANGE_COIN_API_KEY
console.log('heres the key', key)

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
  }),
})

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi

// https://rest.coinapi.io/v1/exchanges?apikey=3F18515E-87E1-44F6-8E51-E323BB65E0A6
