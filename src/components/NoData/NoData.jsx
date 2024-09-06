import React from 'react'
import { Empty } from 'antd'

const NoData = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Empty description="Table not found" />
    </div>
  )
}

export default NoData
