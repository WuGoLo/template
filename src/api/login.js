import request from '@/utils/request'

export function login() {
  return request({
    url: '/map/maplabel',
    method: 'get'
  })
}
