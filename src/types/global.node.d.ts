declare module NodeJS {
    interface Global {
        vitaminConfig: {
            admin: string;
            bi_admin: string;
            bi: string;
            data_source: string;
            ligoServiceTimeout: number;
        };
    }
}
/**
 * 接口返回值定义
 *
 * @interface IRespondMsg
 */
interface IRespondMsg {
    result?: {
        [propName: string]: any;
    };
    status: {
        code: number;
        message: string;
        description: string;
    };
}
/**
 * vio user信息
 * @property {id} vio_user表中的主键
 * @property {name} 中文姓名
 * @interface wdUser
 */
interface IWdUser {
    id: number;
    name: string;
    wdId: string;
}

/**
 * 微店员工信息
 * @property {id} 微店内网的员工拼音,例如zhouwei
 * @property {name} 中文姓名
 * @interface loginUser
 */
interface ILoginUser {
    id: string;
    name: string;
}
