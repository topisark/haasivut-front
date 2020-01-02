import * as rp from 'request-promise'
import config from '../config'

export const addRegistration = async data => {

  const requestParams = {
    uri: `${config.API_URL}/register`,
    method: 'POST',
    json: true,
    body: data
  }

  await rp(requestParams)
}