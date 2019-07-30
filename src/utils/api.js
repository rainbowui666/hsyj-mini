import request from './request'

const ApiRootUrl = 'https://hsapi.100eduonline.com/'
// const ApiRootUrl = 'http://localhost:8360/'

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
  getRecommendList: (obj) => request.get('api/index/home' + '?studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 首页获取留言
  getRecommendMessageList: (obj) => request.get('api/discuss/homeDiscuss?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize + '&studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 活动列表
  getActivityList: (obj) => request.get('api/activity/frontList?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize + '&studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  joinGroup: (obj) => request.get('api/group/joinGroup?groupid=' + obj.groupid + '&studentid=' + obj.studentid + '&activityid=' + obj.activityid, null, {
    baseURL: ApiRootUrl
  }),
  // 获取活动留言
  getActivityMessage: (obj) => request.get('api/discuss/list?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize + '&distype=1' + '&activityid=' + obj.activityid, null, {
    baseURL: ApiRootUrl
  }),
  // 获取景点留言
  getSightMessage: (obj) => request.get('api/discuss/list?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize + '&distype=0' + '&sceneryid=' + obj.sceneryid, null, {
    baseURL: ApiRootUrl
  }),
  // 添加留言
  addMessage: (obj) => request.post('api/discuss/add?distype=' + obj.distype + '&targetid=' + obj.targetid + '&studentid=' + obj.studentid + '&scenerytype=' + obj.scenerytype, {'content': obj.content}, {
    baseURL: ApiRootUrl
  }),
  // 创建团队
  addTeam: (obj) => request.post('api/group/addEdit', obj, {
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
  homeThumbsUp: (obj) => request.get('api/discuss/likediscuss?discussid=' + obj.id + '&studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 判断是否点过赞
  isHomeThumbsUp: (obj) => request.get('api/discuss/hasLikeDiscuss?discussid=' + obj.id + 'studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 个人活动详情
  getActivityDetail: (obj) => request.get('api/activity/getactivitydetail?id=' + obj.id + '&studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 团队活动详情
  getGroupActivityDetail: (obj) => request.get('api/activity/getactivitydetailForGroup?id=' + obj.id + '&studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 活动路线详情
  getActivitySceneryList: (obj) => request.get('api/activity/getActivitySceneryList?pageindex=1&pagesize=15&activityid=' + obj.id + '&studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 活动二维码
  getQRCode: (obj) => request.get('api/group/showQr?url=' + obj.url, null, {
    baseURL: ApiRootUrl
  }),
  // 活动想去
  wantToActivity: (obj) => request.get('api/student_activity/addEdit?studentid=' + obj.studentid + '&activityid=' + obj.activityid + '&shstate=' + obj.shstate, null, {
    baseURL: ApiRootUrl
  }),
  // 活动景点签到
  attentionActivity: (obj) => request.get('api/attention_activity/attentionActivity?studentid=' + obj.studentid + '&activityid=' + obj.activityid + '&sceneryid=' + obj.sceneryid + '&shstate=1', null, {
    baseURL: ApiRootUrl
  }),
  // 景点想去
  wantToSight: (obj) => request.get('api/student_scenery/addEdit?studentid=' + obj.studentid + '&sceneryid=' + obj.sceneryid + '&shstate=' + obj.shstate, null, {
    baseURL: ApiRootUrl
  }),
  // 判断是否点过想去
  isWantTo: (obj) => request.get('api/student_activity/studnetHasStatus?studentid=' + obj.studentid + '&activityid=' + obj.activityid + '&shstate=' + obj.shstate, null, {
    baseURL: ApiRootUrl
  }),
  // 答题
  getQuestionbyActid: (obj) => request.get('api/question/getQuestionbyActid?activityid=' + obj.activityid + '&sceneryid=' + obj.sceneryid, null, {
    baseURL: ApiRootUrl
  }),
  // 景点详情
  getSightDetail: (obj) => request.get('api/scenery/getscenerydetail?id=' + obj.id + '&studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 景点详情
  getActivitySightDetail: (obj) => request.get('api/scenery/getActivitySceneryDetail?sceneryid=' + obj.id + '&studentid=' + obj.studentid + '&activityid=' + obj.activity, null, {
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
  // 景点列表
  getSceneryList: (obj) => request.get('api/scenery/index?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize, null, {
    baseURL: ApiRootUrl
  }),
  // 我的签到
  getMySigninList: (obj) => request.get('api/myself/getMyAttention?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize + '&studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 我的留言
  getMyDiscussList: (obj) => request.get('/api/myself/getMyDiscuss?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize + '&studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 我的景点
  getMySceneryList: (obj) => request.get('/api/myself/getMyScenery?studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 我的活动
  getMyActivityList: (obj) => request.get('/api/myself/getMyActivityList?pageindex=' + obj.pageindex + '&pagesize=' + obj.pagesize + '&studentid=' + obj.studentid + '&hasjoin=' + obj.hasjoin, null, {
    baseURL: ApiRootUrl
  }),
  // 我的计次
  getMyCount: (obj) => request.get('/api/myself/getMyall?studentid=' + obj.studentid + '&shstate=' + obj.shstate, null, {
    baseURL: ApiRootUrl
  }),
  // 上传自拍图片
  sourceAdd: (obj) => request.post('/admin/source/add', obj, {
    baseURL: ApiRootUrl
  }),
  // 学生详细信息
  getStudentDetail: (obj) => request.get('/api/student/getStudentDetail?studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  // 确认扫码
  readyScan: (obj) => request.get('/api/group/readyScan?studentid=' + obj.studentid, null, {
    baseURL: ApiRootUrl
  }),
  isGroupCreator: (obj) => request.get('api/attention_activity/isGroupCreator?studentid=' + obj.studentid + '&activityid=' + obj.activityid + '&groupid=' + obj.groupid, null, {
    baseURL: ApiRootUrl
  })
}

export default api
