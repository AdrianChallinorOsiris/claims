import http from './Http-common'
class ClaimService {
  getAll () {
    return http.get('/claim')
  }

  getClaim (id) {
    return http.get('/claim/' + id)
  }
}
export default new ClaimService()
