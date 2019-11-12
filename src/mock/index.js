import Mock from 'mockjs'
import util from './data'
Mock.mock('http://localhost:7721/swipes', 'get', {
  'list|1-10': [{
    'id|+1': 1,
    'email': '@EMAIL'
  }]
})
