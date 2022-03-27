import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Card, Row, Col, Imput } from 'antd'
import millify from 'millify'

import { useGetCryptosQuery } from '../../services/CryptoApi'
import { log } from '../../utils/Helpers'

const CryptoCurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery() // alias

  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

  return (
    <>
      <Row gutter={[32, 32]} className="cryptocard-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                hoverable
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
              >
                <p>Price: ${millify(currency.price)}</p>
                <p>Market Cap: ${millify(currency.marketCap)}</p>
                <p>Daily Change: ${millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default CryptoCurrencies
