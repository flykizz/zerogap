# 数据库表
1 配置表（用来配置一些配置信息）
2 团队表（具体是哪个团队）
3 仓库表（仓库下可以有多个项目）
4 项目表（项目下可以用很多接口）
5 接口请求参数表（项目里需要用到的接口）
6 接口返回数据表（项目接口返回数据mock）
7 属性表（接口参数所用字段）
8 页面表（项目所用的页面）
11 流程表（接口测试所用流程）
12 测试记录（整体流程跑通评分表）
13 日志表
14 消息表
16 统计表
17 权限表
18 用户表


项目所属结构
    金融团队(organization) -> 基础支付(repositorie) -> 收银台（program）-> 收银台首页（page）
                          -> 金融业务(repositorie) -> 现金贷（program）-> 京东白条（stream）
                                                  -> 掌众分期（program）
## 表详细字段分析
    
    通用字段

    id  自增
    name 名称
    descript 描述
    extends 其他信息
    creatAt 创建时间
    updateAt 修改时间
    deleteAt 删除时间
    createUid 创建者Id
    索引

### 1_0 接口请求类型
    vap scheme描述
    thor  scheme描述
        {
            scope: '',
            path: '',
            version: '',
            type: '',
            strictTarget: '',
            requset:{
                param: {

                },
                content: {

                },
                timestamp: new Date().getTimes()
            },
            response:{
                status: {code: '', description: '', message: ''}
                result: {

                }
            }
        }
    http
    dubble 

### 1_1 ua配置表
    生成ua配置

### 2 团队表 organizations（具体是哪个团队）
    logo 团队logo
    ownerId 管理者
    status 团队状态

### 3 仓库表 repositories（仓库下可以有多个项目）
    organizationId
    ownerId
    status 仓库状态

### 4 项目表 projects（项目下可以用很多接口）
    projects 
    repositorieId 
    gitlabAddr git项目地址
    homePageDaily 日常地址
    homePagePre 预发地址
    homePageProduct 生产地址
    spiderA 页面spiderA
    scopes [] ? 项目会用到的thor请求scope （根据scope获取到接口列表，需要进行过滤）
    pageStreams ?[] 页面访问流程  画流程图，根据流程图去跳转
    publickParam ?[] 项目公共参数
    getPublickParamFn ?获取公共参数的方法
    status 项目状态

### 5 接口请求参数表 interfaces（项目里需要用到的接口）
    interfaceReqId 接口请求Id
    type 接口请求类型
    serviceUserName 后端创建者
    source 接口来源
    status 接口状态 design 设计中 unstable 不稳定 stable 稳定
    scope ?scope
    path 路径
    version ?版本号
    reqId 返回id
    resId 返回id 
    defaultReqScheme 默认请求格式
    defaultResScheme 默认返回格式
    depends ？依赖  [{interfaceId, [resId]}]
    isLoop ?是否需要轮询 
    loopPrototyep { 轮询属性
        times: 8, ？轮询次数
        interval: 1500, ? 间隔时长
        finishCondition: res.status = 4, 结束条件
    }

### 7 请求参数属性表 reqProperties（接口参数所用字段）
    interfaceId 接口Id
    reqId 接口请求Id
    propertyId 属性id
    parentId 父级id
    rule ?mock方式
    defaultVaule 默认数据
    value 真实value

rules scheme https://github.com/nuysoft/Mock/wiki 
             https://github.com/nuysoft/Mock/wiki/Syntax-Specification#%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF%E5%AE%9A%E4%B9%89%E8%A7%84%E8%8C%83-dtd

### 7_1 返回数据表 resProperties（返回字段字段属性）
    interfaceId 接口Id
    resId 接口返回Id
    propertyId 属性Id
    interfaceId 接口Id
    value 真实value

### 8 页面表 pages（项目所用的页面）
    pageId 
    projectId 项目Id
    components 页面组件
    pageUrl 页面url

    params 页面初始化参数
    depends ?页面初始依赖的接口请求
    spiderB 页面spiderB
    
    mountedStreams [streamId, streamId] 页面进入请求接口
    eventsStreams [streamId, streamId] 页面用户事件, mounted完成后一秒进行请求
    unMountedStreams [streamId, streamId] 页面卸载请求接口 
    status

### 9 页面其他信息
    pageId 页面Id
    components 组件Id
    spiders 页面埋点

### 10 组件信息 （vms）（二期完成）
    componentId 组件Id
    componendName 组件名称
    componendContend 组件名称

### 11 流程表 streams（接口测试所用流程）
    结构化数据存储 || 为并行请求 && 为 串行请求， 逗号为两个流程
    
    streamId 流程Id 
    streamType 流程类型 项目||页面
    stream 流程 流程图
    status

### 12 测试记录 test_logger
    programId 
    pageId
    interfaceId
    streamId
    
### 13 操作表 op_logger
    
### 14 消息表

### 15 生成前端文件
    
### 16 用户信息表
    登录的日常账号

### 定时任务表




