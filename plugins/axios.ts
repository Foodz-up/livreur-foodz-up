import axios from 'axios'
import AuthStore from '~/store/auth'

export default () => {
  let headerContent = {}

  if (AuthStore.token) {
    headerContent = { Authorization: 'Bearer ' + AuthStore.token.accessToken }
  }

  return axios.create({
    baseURL: 'http://localhost:8000/',
    headers: headerContent
  })
}
