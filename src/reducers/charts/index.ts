/* charts reducers */

import { Reducer } from "redux";
import { ChartsAction, ChartsData } from "../../actions/charts";

const chartsReducer: Reducer<ChartsData> = (
  state: ChartsData,
  action: ChartsAction
) => {
  return [
    {
      uid: "1",
      cid: "2",
      ctype: "person",
      lastMsg: "xiaoxi",
      lastTime: "shijian",
      hasRead: false
    }
  ];
};

export default chartsReducer;
