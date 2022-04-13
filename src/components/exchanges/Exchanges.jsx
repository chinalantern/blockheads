import React from 'react'
import Loader from '../loader/Loader'

import DataTable from '../tables/DataTable'
import {
  useGetCryptoExchangesQuery,
  useGetCryptoExchangesIconsQuery,
} from '../../services/CryptoExchangesApi'
import { log } from '../../utils/Helpers'

const Exchanges = () => {
  const { data: exchangesData, isFetching } = useGetCryptoExchangesQuery()
  const { data: exchangesIcons, isFetching: fetchingIconData } = useGetCryptoExchangesIconsQuery()

  if (isFetching) return <Loader />

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
          <DataTable data={exchangesData} icons={exchangesIcons} fetchingData={isFetching } fetchingIcons={fetchingIconData} />
      )}
    </>
  )
}

export default Exchanges
