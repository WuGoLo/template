import Mock from 'mockjs'
import util from './data'
Mock.mock('http://localhost:7721/swipes', 'get', util.list1)
export default Mock;
