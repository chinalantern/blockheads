import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': 'a509835a49msh6be9bf559469939p1eb52djsnb8d55512db56'
}
        
const baseUrl = 'https://coinranking1.p.rapidapi.com'

// helper function
const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
})

export const {useGetCryptosQuery} = cryptoApi