import { ActionCreator } from "redux";
import { StoreData, Chart } from "../../types";

export enum CHARTTYPE {
  LOADCHATS = "loadCharts",
  DELETECHART = "deleteChart",
  READCHART = "readChart"
}

export type ChartsData = StoreData["charts"];

export interface ChartsAction {
  type: string;
  data: Chart;
}

/* 加载charts */
export const onLoadCharts: ActionCreator<ChartsAction> = () => {
  return {
    type: CHARTTYPE.LOADCHATS,
    data: null
  };
};

/* 删除当前chart */
export const onDeleteChart: ActionCreator<ChartsAction> = (data: Chart) => {
  return {
    type: CHARTTYPE.DELETECHART,
    data: data
  };
};

/* 标记为已读 */
export const onReadChart: ActionCreator<ChartsAction> = (data: Chart) => {
  return {
    type: CHARTTYPE.READCHART,
    data: data
  };
};
