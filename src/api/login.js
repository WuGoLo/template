import request from '@/utils/request'

export function login() {
  return request({
    url: '/login/login',
    method: 'get'
  })
}