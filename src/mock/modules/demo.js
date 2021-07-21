import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/api/demo-get', 'get', () => {
  return {
    code: 200,
    msg: 'ok',
    result: {
      key: Random.string(),
      value: Random.string()
    }
  }
})

Mock.mock('/api/demo-post', 'post', options => {
  if (!options.body) {
    return {
      code: 400,
      msg: '参数缺失'
    }
  }
  const body = JSON.parse(options.body)
  if (!body.field1) {
    return {
      code: 400,
      msg: '缺少参数 field1'
    }
  }
  if (!body.field2) {
    return {
      code: 400,
      msg: '缺少参数 field2'
    }
  }
  return {
    code: 200,
    msg: 'ok',
    result: {
      id: Random.guid(),
      field1: body.field1,
      field2: body.field2
    }
  }
})
