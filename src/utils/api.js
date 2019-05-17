import request from './request'

const ApiRootUrl = 'https://hsyj.100eduonline.com/api/'

const api = {
  // 获得服务列表
  // login: (paramObj) => request.post('user/login', paramObj, {
  //   baseURL: ApiRootUrl
  // }),
  // 发送验证码
  // getVerification: (paramObj) => request.post('two-factor-service/2fa/sendCode ', paramObj, {
  //   baseURL: ApiGateWayUrl
  // }),
  // 验证码检验
  // validateVerification: (paramObj) => request.post('two-factor-service/2fa/verifyCode', paramObj, {
  //   baseURL: ApiGateWayUrl
  // }),
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
  // 首页留言点赞
  homeThumbsUp: (obj) => request.get('api/discuss/likediscuss?discussid=' + obj.id, null, {
    baseURL: ApiRootUrl
  }),
  // 判断是否点过赞
  isHomeThumbsUp: (obj) => request.get('api/discuss/hasLikeDiscuss?discussid=' + obj.id + 'studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 活动详情
  getActivityDetail: (obj) => request.get('api/activity/getactivitydetail?id=' + obj.id, null, {
    baseURL: ApiRootUrl
  }),
  // 活动路线详情
  getActivitySceneryList: (obj) => request.get('api/activity/getActivitySceneryList?pageindex=1&pagesize=15&activityid=' + obj.id, null, {
    baseURL: ApiRootUrl
  }),
  // 活动想去
  wantToActivity: (obj) => request.get('api/student_activity/addEdit?studentid=' + obj.studentid + '&activityid=' + obj.activityid + '&shstate=' + obj.shstate, null, {
    baseURL: ApiRootUrl
  }),
  // 判断是否点过想去
  isWantTo: (obj) => request.get('api/student_activity/studnetHasStatus?studentid=' + obj.studentid + '&activityid=' + obj.activityid + '&shstate=' + obj.shstate, null, {
    baseURL: ApiRootUrl
  }),
  // 首页登录授权
  indexLogin: (paramObj) => request.post('api/auth/login', paramObj, {
    baseURL: ApiRootUrl
  }),
  // 学生登录
  studentLogin: (paramObj) => request.post('admin/student/addEdit?id=' + paramObj.studentID, paramObj, {
    baseURL: ApiRootUrl
  }),
  // 学校列表
  getSchoolList: () => request.get('api/school/index?pageindex=1&pagesize=200', null, {
    baseURL: ApiRootUrl
  }),
  // 我的签到
  getMySigninList: () => request.get('api/myself/getMyAttention?studentid=1', null, {
    baseURL: ApiRootUrl
  })
  // http://127.0.0.1:8360/api/myself/getMyAttention?studentid=1&pageindex=1&pagesize=5
}

export default api
