import request from './request'

const ApiRootUrl = 'http://hsyj.100eduonline.com/api/'
const ApiGateWayUrl = 'https://sit.ebaocloud.com/api/'

const api = {
  // 获得服务列表
  login: (paramObj) => request.post('user/login', paramObj, {
    baseURL: ApiRootUrl
  }),
  // 发送验证码
  getVerification: (paramObj) => request.post('two-factor-service/2fa/sendCode ', paramObj, {
    baseURL: ApiGateWayUrl
  }),
  // 验证码检验
  validateVerification: (paramObj) => request.post('two-factor-service/2fa/verifyCode', paramObj, {
    baseURL: ApiGateWayUrl
  })
}

export default api
