import Mock from 'mockjs'
import util from './data'
Mock.mock('http://localhost:7721/swipes', 'get', util.list1)
Mock.mock('/data', 'get', util.list2)
export default Mock;
