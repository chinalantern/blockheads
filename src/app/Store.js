import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/CryptoApi'
import { cryptoNewsApi } from '../services/CryptoNewsApi'
import { cryptoExchangesApi } from '../services/CryptoExchangesApi'

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer,
  },

  // TODO clean up
  // enable caching, invalidation, polling, etc
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware,
      cryptoExchangesApi.middleware,
    ),
})
