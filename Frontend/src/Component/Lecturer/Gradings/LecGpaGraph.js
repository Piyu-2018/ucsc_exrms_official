import { Box, Button, Card, CardContent } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import React from "react";
import {
  Chart,
  PieSeries,
  Title,
  Legend,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

// import { Animation, Legend } from "@devexpress/dx-react-chart";

const chartData = [
  { region: "First Class: 41", val: 41 },
  { region: "Second Upper: 54", val: 54 },
  { region: "Second Lower: 38", val: 38 },
  { region: "Normal Class: 63", val: 63 },
];

function LecGpaGraph() {
  return (
    <>
      <Box sx={{ mt: "30px" }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Chart data={chartData}>
              <PieSeries
                valueField="val"
                argumentField="region"
                innerRadius={0.6}
              />
              <Title text="GPA Class Distribution" />

              <Legend />
            </Chart>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default LecGpaGraph;
