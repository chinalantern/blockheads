import React from 'react'
import Loader from '../loader/Loader'

import DataTable from '../tables/DataTable'
import { useGetCryptoExchangesQuery, useGetCryptoExchangesIconsQuery } from '../../services/CryptoExchangesApi'
import { log } from '../../utils/Helpers'


const Exchanges = () => {
  // const { data: exchangesData, isFetching } = useGetCryptoExchangesQuery()
  // const { data: exchangesIcons } = useGetCryptoExchangesIconsQuery()
  const exchangesData = ''
  const exchangesIcons = ''

  // if (isFetching) return <Loader />
  return (
    <div>
      <div>Exchanges</div>
      <DataTable data={exchangesData} icons={exchangesIcons}/>
    </div>
  )
}

export default Exchanges
