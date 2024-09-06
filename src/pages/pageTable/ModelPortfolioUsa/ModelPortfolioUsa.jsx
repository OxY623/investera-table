import React from 'react'

import { getModelPortfolioUsa } from '../../../store/actions/tablesActions'
import { columnsTableUsa } from '../../../data'
import NoData from '../../../components/NoData'
import withData from '../../../hoc'
import GenericTable from '../../../components/GenericTable'
import tableColumnDataColors from '../index'

import '../pageTable.css'

const ModelPortfolioUsa = withData(
  GenericTable,
  getModelPortfolioUsa,
  tableColumnDataColors,
  columnsTableUsa,
)

const modelPortfolioUsaProps = {
  breadcrumbItems: [
    { title: 'Главная', href: '/' },
    { title: 'ModelPortfolioUsa' },
  ],
  title: 'Model Portfolio USA',
  noDataComponent: NoData,
}

const ModelPortfolioUsaWithProps = (props) => (
  <ModelPortfolioUsa {...modelPortfolioUsaProps} {...props} />
)

export default ModelPortfolioUsaWithProps
