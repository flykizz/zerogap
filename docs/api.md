#项目API文档
## 表操作

### 1 配置表 setting

#### 1_1 
    {
        name: '获取设置内容',
        type: 'thor'
        reqType: 'get',
        scope : 'zerogap',
        path: 'setting.get',
        version: '1.0',
        req: {
            param: {
                page: 1,
                pageSize: 20,

            }
        },
        res: {
            result: {
                page
            }
        }
    }