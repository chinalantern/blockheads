import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import CryptoCurrencies from '../cryptoCurrencies/CryptoCurrencies'
import News from '../news/News'
import { useGetCryptosQuery } from '../../services/CryptoApi'
import Loader from '../loader/Loader'
import { log } from '../../utils/Helpers'

const { Title } = Typography

const Homepage = () => {
  const { data: cryptoStats, isFetching } = useGetCryptosQuery(10) // alias

  const globalStats = cryptoStats?.data?.stats

  if (isFetching) return <Loader />

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Crypto Currencies"
            value={globalStats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypto Currencies In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>

      <CryptoCurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>

      <News simplified />
    </>
  )
}

export default Homepage
