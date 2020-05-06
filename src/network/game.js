import { request } from './request'

export function getLevelMap() {
  return request({
    url: '/levels'
  })
}
