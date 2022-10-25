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
  { region: 'Issued - 48%', val: 48 },
  { region: 'Pending- 30%', val: 30},
  { region: 'Rejected- 22%', val: 22},
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
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          <Title
            text="The Progress of Transcripts Issue Process"
          />
          <Animation />
          <Legend />
        </Chart>
      </Paper>
    );
  }
}
