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
  // 首页获取推荐活动和景点
  getRecommendList: (r) => request.get('api/index/home', null, {
    baseURL: ApiRootUrl
  }),
  // 首页获取留言
  getRecommendMessageList: (obj) => request.get('api/discuss/homeDiscuss?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize, null, {
    baseURL: ApiRootUrl
  }),
  // 活动列表
  getActivityList: (obj) => request.get('api/activity/frontList?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize, null, {
    baseURL: ApiRootUrl
  }),
  // 学校详情
  getSchoolDetail: (obj) => request.get('api/school/detail?schoolid=' + obj.id, null, {
    baseURL: ApiRootUrl
  }),
  // 首页-搜索学校或景点
  getSearchList: (obj) => request.get('api/search/searchList?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize, null, {
    baseURL: ApiRootUrl
  }),
  getSearchListBykeyWord: (obj) => request.get('api/search/searchList?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize + '&keyword=' + obj.keyword, null, {
    baseURL: ApiRootUrl
  }),
  // 活动详情
  getActivityDetail: (obj) => request.get('api/activity/getactivitydetail?id=' + obj.id, null, {
    baseURL: ApiRootUrl
  })
}

export default api
