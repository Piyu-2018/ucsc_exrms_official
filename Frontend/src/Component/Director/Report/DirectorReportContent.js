import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { region: 'A+ - 5%', val: 65 },
  { region: 'A - 15%', val: 35 },
  { region: 'A- - 25%', val: 35 },
  { region: 'B+ - 15%', val: 35 },
  { region: 'B - 12%', val: 35 },
  { region: 'B- - 8%', val: 35 },
  { region: 'C+ - 3%', val: 35 },
  { region: 'C - 3%', val: 35 },
  { region: 'C- - 2%', val: 35 },
  { region: 'D+ - 2%', val: 35 },
  { region: 'D -5%', val: 35 },
  { region: 'E - 5%', val: 35 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          <Title
            text="Results"
          />
          <Animation />
          <Legend />
        </Chart>
    );
  }
}
