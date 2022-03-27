import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/CryptoApi'

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    // TODO clean up
  // enable caching, invalidation, polling, etc
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
})