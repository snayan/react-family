/* 总的store数据结构 */

import * as BaseType from "./base";

export * from "./base";

export interface StoreData {
  charts: Array<BaseType.Chart>;
}

export interface StoreReducers {
  charts: () => Array<BaseType.Chart>;
}
