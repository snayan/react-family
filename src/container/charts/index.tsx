import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { StoreData, Chart } from "../../types";
import {
  ChartsData,
  onDeleteChart,
  onLoadCharts,
  onReadChart
} from "../../actions";

type ChartsProps = {
  charts: ChartsData;
  onLoadCharts: () => void;
  onDeleteChart: (data: Chart) => void;
  onReadChart: (data: Chart) => void;
};

class Charts extends React.Component<ChartsProps> {
  constructor(props: ChartsProps) {
    super(props);
  }
  render() {
    return (
      <p>
        hello charts,{}
      </p>
    );
  }
}

const mapStateToProps = (state: StoreData) => {
  return {
    charts: state.charts
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ChartsData>) => {
  return {
    onLoadCharts: () => {
      dispatch(onLoadCharts());
    },
    onDeleteChart: (data: Chart) => {
      dispatch(onDeleteChart(data));
    },
    onReadChart: (data: Chart) => {
      dispatch(onReadChart(data));
    }
  };
};

const ChartsPage = connect(mapStateToProps, mapDispatchToProps)(Charts);

export { ChartsPage };
