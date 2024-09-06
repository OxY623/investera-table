import React from 'react'

const tableColumnDataColors = (columns) => {
  return columns.map((column) => {
    const applyColorTransform =
      column.dataIndex === 'Долгосрочный потенциал роста' ||
      column.dataIndex === 'Дивиденды' ||
      column.dataIndex === 'Потенциал роста'

    if (applyColorTransform) {
      return {
        ...column,
        render: (text) => {
          const number = parseFloat(text)
          let color = 'black'
          if (!isNaN(number)) {
            color = number > 0 ? '#4CAF50' : '#F44336'
          }
          return <span style={{ color }}>{text}</span>
        },
      }
    }

    return column
  })
}

export default tableColumnDataColors
