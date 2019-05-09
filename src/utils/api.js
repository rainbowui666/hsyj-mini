import request from './request'

const ApiRootUrl = 'https://hsyj.100eduonline.com/api/'
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
  }),
  getRecommendList: (r) => request.get('api/index/home', null, {
    baseURL: ApiRootUrl
  }),
  getRecommendMessageList: (obj) => request.get('api/discuss/homeDiscuss?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize, null, {
    baseURL: ApiRootUrl
  })
}

export default api
