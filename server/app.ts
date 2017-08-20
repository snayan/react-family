import * as Koa from "koa";
import env from "./config";

/* 设置node环境 */
process.env.NODE_ENV = env.node_env;

/* 初始化一个服务实例 */
const app = new Koa();
console.log(`start server koa on port :${3000}`);
app.listen(env.port, env.host);
