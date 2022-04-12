import React from 'react'
import Loader from '../loader/Loader'

import { useGetCryptoExchangesQuery } from '../../services/CryptoExchangesApi'
import { log } from '../../utils/Helpers'



const Exchanges = () => {

   const { data, isFetching } = useGetCryptoExchangesQuery()
  
  log(isFetching)
  log(data)
  
   
   // if (isFetching) return <Loader />
  return (
    <div>

      <div>Exchanges</div>
    </div>
  ) 
}

export default Exchanges
