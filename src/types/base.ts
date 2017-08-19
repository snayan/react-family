/*  用户数据定义　 */

export enum Gender {
  /* 男 */
  male,
  /* 女 */
  female,
  /* 其他 */
  other
}

export enum JoinType {
  /* 二维码 */
  qrcode,
  /* 搜索 */
  search,
  /* 附近的人 */
  nearly
}

/* 用户基本信息 */
export interface Person {
  /*  用户ID */
  uid: string;
  /* 用户名 */
  name: string;
  /* 头像 */
  avator: string;
  /* 性别 */
  gender: Gender;
  /* 地区 */
  region?: string;
  /* 签名 */
  whatsup?: string;
  /* 二维码 */
  qrcode?: string;
}

/* 用户登录信息 */
export interface UserLoginInfo {
  /* 用户ID */
  uid: string;
  /*登录名 */
  loginName: string;
  /* 登陆密码 */
  loginPsd: string;
  /* 最后登录时间 */
  loginLastTime?: Date;
  /* 最后登录地址 */
  loginLastRegion?: string;
}

/* 联系人 */
export interface Contactor {
  /* 用户ID */
  uid: string;
  /* 联系人ID */
  cid: string;
  /* 添加方式 */
  cType?: JoinType;
  /* 添加时间 */
  cTime?: Date;
}

/* 群基本信息 */
export interface Group {
  /* 群ID */
  gid: string;
  /* 群名称 */
  name: string;
  /* 群二维码 */
  qrcode?: string;
  /* 创建时间 */
  createTime?: Date;
}

/* 用户群信息 */
export interface UserGroup {
  /* 群ID */
  gid: string;
  /* 用户ID */
  uid: string;
  /* 用户别名 */
  aliasName?: string;
  /* 进群方式 */
  joinType: JoinType;
  /* 进群时间 */
  joinTime: Date;
}

/* 聊天列表 */
export interface Chart {
  /* 用户ID */
  uid: string;
  /* 聊天人ID或者群ID */
  cid: string;
  /* 聊天方式：联系人或群 */
  ctype: "person" | "group";
  /* 最后一跳消息 */
  lastMsg: string;
  /* 最后聊天时间 */
  lastTime: string;
  /* 是否查看 */
  hasRead: boolean;
}

/* 聊天消息 */
export interface Message {
  /* 用户ID */
  uid: string;
  /* 聊天人ID */
  cid: string;
  /* 消息 */
  msg: string;
  /* 消息发送时间 */
  time: Date;
}
