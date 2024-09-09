import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const withData = (
  WrappedComponent,
  fetchDataAction,
  colorTransform,
  columns,
) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const dispatch = useDispatch()
    const rawData = useSelector((state) => state.table)
    const error = useSelector((state) => state.error)
    const loading = useSelector((state) => state.loading)

    useEffect(() => {
      dispatch(fetchDataAction())
    }, [dispatch])

    return (
      <WrappedComponent
        dataSource={rawData}
        columns={columns}
        loading={loading}
        error={error}
        colorTransform={colorTransform}
        {...props}
      />
    )
  }
}

export default withData
