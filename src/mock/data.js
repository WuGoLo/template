
const list1 = {
  'ret': true,
  'data|1-10': [{
    'userid': '@id()',
    'username': '@cname()',
    'date': '@date()',
    'avatar': "@image('200x200','red','#fff','avatar')",
    'description': '@paragraph()',
    'ip': '@ip()',
    'email': '@email()'
  }]
}
const list2 = {
  'data|1-10': [{
    'id|+1': 1,
    'email': '@EMAIL'
  }]
}
export default {
  list1,
  list2
}
