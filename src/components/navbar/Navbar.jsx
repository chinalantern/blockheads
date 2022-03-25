import React from 'react'

import { Avatar, Button, Typography, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../../images/cryptocurrency.png'

const Navbar = () => {

  return <div className="navcontainer">
    <div className="logo-container">
      <Avatar src={icon} />
      <Typography.Title level={2} className="logo">
        <Link to={"/"}>Blockheads</Link> 
      </Typography.Title>

      {/* Mobile Device Menu */}
      {/* <Button className="menu-control-container">

      </Button> */}
    </div>
  </div>
}

export default Navbar
