import request from '@/utils/request'

export function login() {
  return request({
    url: 'http://localhost:7721/swipes',
    method: 'get'
  })
}
