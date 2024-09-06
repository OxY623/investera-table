import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs } from 'antd'
import { LockOutlined } from '@ant-design/icons'

import { portfolios } from '../../data'
import './PortfolioList.css'

const PortfolioList = () => {
  const items = [
    {
      label: <span className="custom-tab">Unity</span>,
      key: '1',
      children: (
        <div>
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              style={{ marginTop: '20px', marginBottom: '20px' }}
            >
              <h2 style={{ marginBottom: '10px', marginTop: '10px' }}>
                {portfolio.country}
              </h2>
              <ul className="portfolio-links">
                {portfolio.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="portfolio-link">
                    <Link
                      to={link.link}
                      className={`portfolio-link-text ${link.disabled ? 'disabled' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: (
        <span>
          Ideas <LockOutlined style={{ marginLeft: '8px' }} />
        </span>
      ),
      key: '2',
      children: <div>Content of Ideas tab</div>,
      disabled: true,
    },
  ]

  return (
    <div className="main-content" style={{ padding: '20px' }}>
      <h1>Портфели</h1>
      <Tabs
        defaultActiveKey="1"
        items={items}
        className="custom-tabs"
        style={{ width: '100%' }}
      />
    </div>
  )
}

export default PortfolioList
