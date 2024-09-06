import axios from 'axios'

const API_URL = 'http://localhost:8000/api/tables'

export const fetchOnlineTableChn = async () => {
  try {
    const response = await axios.get(`${API_URL}/online-table-chn/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    let data = response.data

    if (typeof data === 'string') {
      data = data.replace(/NaN/g, 'null') // Заменяем NaN на null
      try {
        return JSON.parse(data)
      } catch (parseError) {
        throw new Error('Ошибка при разборе JSON: ' + parseError.message)
      }
    } else if (typeof data === 'object') {
      data = JSON.stringify(data).replace(/NaN/g, 'null')
      return JSON.parse(data)
    } else {
      throw new Error('Неизвестный формат данных от сервера.')
    }
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
    throw error
  }
}

export const fetchModelPortfolioUsa = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${API_URL}/model-portfolio-usa/`, {
      params: {},
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
