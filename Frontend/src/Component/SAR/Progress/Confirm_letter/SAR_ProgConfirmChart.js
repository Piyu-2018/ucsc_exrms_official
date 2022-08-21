import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend,

} from '@devexpress/dx-react-chart-material-ui';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { region: 'Issued - 67%', val: 67 },
  { region: 'Not-issued - 33%', val: 33},
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
            text="The Progress of Confirmation letters Issue Process"
  
          />
          <Animation />
          <Legend />
        </Chart>
      </Paper>
    );
  }
}