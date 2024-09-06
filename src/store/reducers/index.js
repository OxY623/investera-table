import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  table: [],
  loading: false,
  error: null,
}

const TablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        table: action.payload,
        loading: false,
      }

    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        article: null,
      }

    default:
      return state
  }
}

export default TablesReducer
