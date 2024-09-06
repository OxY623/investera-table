import React, { useRef } from 'react'
import { Table, Breadcrumb, Button, Spin, Alert } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const GenericTable = ({
  dataSource,
  columns,
  loading,
  error,
  scrollLeft,
  scrollRight,
  breadcrumbItems,
  title,
  noDataComponent,
  colorTransform,
}) => {
  const tableRef = useRef(null)

  const handleScrollLeft = () => {
    if (tableRef.current) {
      tableRef.current.scrollBy({ left: -100, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (tableRef.current) {
      tableRef.current.scrollBy({ left: 100, behavior: 'smooth' })
    }
  }

  if (loading)
    return (
      <div className="centered">
        <Spin size="large" />
      </div>
    )

  if (error) {
    return (
      <Alert
        message="Ошибка"
        description={error.message || 'Не удалось загрузить данные'}
        type="error"
        showIcon
      />
    )
  }

  if (!dataSource || dataSource.length === 0) return noDataComponent()

  const transformedColumns = colorTransform ? colorTransform(columns) : columns

  return (
    <>
      <Breadcrumb
        className="myBreadcrumb"
        separator="<"
        items={breadcrumbItems}
      />
      <div className="container">
        <h1 className="title">{title}</h1>
        <div className="scroll-buttons">
          <Button
            onClick={scrollLeft || handleScrollLeft}
            icon={<LeftOutlined />}
          />
          <Button
            onClick={scrollRight || handleScrollRight}
            icon={<RightOutlined />}
          />
        </div>
        <div className="table-wrapper">
          <div className="table-container" ref={tableRef}>
            <Table
              dataSource={dataSource.map((item, index) => ({
                ...item,
                key: index,
              }))}
              columns={transformedColumns}
              pagination={false}
              className="custom-table"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default GenericTable
