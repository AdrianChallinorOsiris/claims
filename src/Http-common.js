import axios from 'axios'

export default axios.create({
  baseURL: 'http://www.osiris.co.uk:8091/',
  headers: {
    'Content-type': 'application/json'
  }
})
