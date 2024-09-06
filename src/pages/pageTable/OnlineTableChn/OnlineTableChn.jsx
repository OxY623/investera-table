import React from 'react'

import { getOnlineTableChn } from '../../../store/actions/tablesActions'
import { columnsTableChn } from '../../../data'
import NoData from '../../../components/NoData'
import withData from '../../../hoc'
import GenericTable from '../../../components/GenericTable'
import tableColumnDataColors from '../index'

import '../pageTable.css'

const OnlineTableChn = withData(
  GenericTable,
  getOnlineTableChn,
  tableColumnDataColors,
  columnsTableChn,
)

const onlineTableChnProps = {
  breadcrumbItems: [
    { title: '' },
    { title: 'Главная', href: '/' },
    { title: 'OnlineTableChn' },
  ],
  title: 'Online Table CHN',
  noDataComponent: NoData,
}

const OnlineTableChnWithProps = (props) => (
  <OnlineTableChn {...onlineTableChnProps} {...props} />
)

export default OnlineTableChnWithProps
