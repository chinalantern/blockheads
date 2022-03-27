import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../../services/CryptoApi'
import {log} from '../../utils/Helpers'

const { Title } = Typography

const Homepage = () => {

  
  const { data, isFetching } = useGetCryptosQuery()
  
  if(isFetching) return 'Loading...'
  
  const globalStats = data?.data?.stats
  log("mTEST", data)

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Crypto Currencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      <Title></Title>
      <Title></Title>
    </>
  )
}

export default Homepage
