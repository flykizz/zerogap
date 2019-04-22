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
12 评分表（整体流程跑通评分表）
13 日志表
14 消息表
15 生成前端文件
16 统计表


## 表详细字段分析
    
    通用字段

    id  自增
    name 名称
    descript 描述
    creatAt 创建时间
    updateAt 修改时间
    deleteAt 删除时间
    createUid 创建者Id
    
    索引

### 1_0 接口请求类型
    vap
    thor
    http
    dubble

### 1_1 ua配置表

### 1_2 cookie配置表

### 1_3 环境配置表

### 2 团队表 organizations（具体是哪个团队）
    logo 团队logo
    ownerId 管理者
    status 团队状态

### 3 仓库表 repositories（仓库下可以有多个项目）
    organizationId
    ownerId
    status 仓库状态

### 4 项目表 projects（项目下可以用很多接口）
    repositorieId
    homePageDaily 日常地址
    homePagePre 预发地址
    homePageProduct 生产地址
    spiderA 页面spiderA
    scopes []
    pageStreams [] 页面访问流程  画流程图，根据流程图去跳转
    status 项目状态 
    
### 5 接口请求参数表 interfaces（项目里需要用到的接口）
    interfaceReqId 接口请求Id
    type 接口请求类型
    serviceUserName 后端创建者
    defaultReqId 默认请求数据
    reqId 返回id 
    defaultResId 默认返回数据
    resId 返回id 
    depend ？依赖  [{interfaceId, [resId]}]

    
### 7 属性表 properties（接口参数所用字段）
    propertyId 属性Id
    interfaceId 接口Id
    scope ?scope
    path 路径
    version ?版本号
    rule ?mock方式
    defaultVaule 默认数据
    value 真实value

### 8 页面表 pages（项目所用的页面）
    pageId 
    projectId 项目Id
    components 页面组件
    pageUrl 页面url
    pageParam 页面参数
    spiderB 页面spiderB
    mountedStreams [streamId, streamId] 页面进入请求接口
    eventsStreams [streamId, streamId] 页面用户事件, mounted完成后一秒进行请求
    unMountedStreams [streamId, streamId] 页面卸载请求接口 
    status

### 9 页面其他信息
    pageId 页面Id
    components 组件Id

### 10 组件信息 （vms）（二期完成）
    componentId 组件Id
    componendName 组件名称
    componendContend 组件名称

### 11 流程表 streams（接口测试所用流程）
    结构化数据存储 || 为并行请求 && 为 串行请求， 逗号为两个流程
    [(1&&2)||3||4,] 串行请求1和2接口

    streamId 流程Id 
    streamType 流程类型 项目||页面
    stream 流程 流程图
    status  

### 12 评分表（整体流程跑通评分表）

### 13 日志表
    
### 14 消息表

### 15 生成前端文件




