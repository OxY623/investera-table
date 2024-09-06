import {
  fetchModelPortfolioUsa,
  fetchOnlineTableChn,
} from '../../api/financialTablesAPI'

import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes'

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
})

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
})

export const fetchSuccess = (table) => ({
  type: FETCH_SUCCESS,
  payload: table,
})

export const getOnlineTableChn = () => {
  return async (dispatch) => {
    dispatch(fetchRequest())

    try {
      const data = await fetchOnlineTableChn()
      dispatch(fetchSuccess(data))
    } catch (error) {
      dispatch(fetchFailure(error.message))
    }
  }
}

export const getModelPortfolioUsa = () => {
  return async (dispatch) => {
    dispatch(fetchRequest())

    try {
      const data = await fetchModelPortfolioUsa()
      dispatch(fetchSuccess(data))
    } catch (error) {
      dispatch(fetchFailure(error.message))
    }
  }
}
