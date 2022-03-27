import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': 'a509835a49msh6be9bf559469939p1eb52djsnb8d55512db56',
  useQueryString: true,
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

// helper function
const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`
        ),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
