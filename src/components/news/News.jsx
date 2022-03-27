import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../../services/CryptoNewsApi'
import {log} from '../../utils/Helpers'


const { Text, Title } = Typography
const {Option} = Select

const News = ({ simplified }) => {
  
  // TODO swap out string literal for const
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Crypto Currency', count: simplified ? 6 : 12 })
  
  // TODO fix
  if (isFetching) return 'Loading...'

  return (
    <Row gutter={[24,24]}>
      
      {cryptoNews?.value?.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className="news-title" level={4}>{ news.name}</Title>
              </div>
            </a>
          </Card>
        </Col>
      ))}


    </Row>
  )
}

export default News