import { route, pipe } from '@vdian/rocker-mvc';
import { start } from '@vdian/rocker-dao';
import '@vdian/midlog';

import env from './env';

let dbConfig = env.getDBConfig();
let dbParams = [];
dbParams.push({
    name: 'vio',
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    port: dbConfig.port,
    database: dbConfig.database
});