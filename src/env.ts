import * as fs from 'fs';

function getProperties() {
    'use strict';
    let ret = JSON.parse(fs.readFileSync(__dirname + '/properties.config').toString());
    ret.rootDiretory = __dirname;
    return ret;
}

process.env.properties = JSON.stringify(getProperties());

//------------------------------------------------------------------
export default {
    properties: getProperties(),
    env: getProperties()['env'],
    getDBConfig: function() {
        'use strict';
        let properties = JSON.parse(process.env.properties);
        return {
            db: properties.db,
            host: properties.db_host,
            user: properties.db_user,
            password: properties.db_password,
            database: properties.db_database,
            port: properties.db_port,
            env: properties.env
        };
    }
    // getMetaDBconfig: function() {
    //     let properties = JSON.parse(process.env.properties);
    //     return {
    //         db: properties.meta_db,
    //         host: properties.meta_db_host,
    //         user: properties.meta_db_user,
    //         password: properties.meta_db_password,
    //         database: properties.meta_db_database,
    //         port: properties.meta_db_port,
    //         env: properties.env
    //     };
    // },
    // getPrestoConfig() {
    //     'use strict';
    //     let properties = JSON.parse(process.env.properties);
    //     return {
    //         host: properties.presto_host,
    //         port: properties.presto_port,
    //         user: properties.presto_user,
    //         password: properties.presto_password
    //     };
    // },
    // getMqConfig() {
    //     'use strict';
    //     let properties = JSON.parse(process.env.properties);
    //     return {
    //         host: properties.mq_namesrvAddr,
    //         topic: properties.mq_topic
    //     };
    // }
};
