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
  { region: "A : 31", val: 31 },
  { region: "B: 54", val: 54 },
  { region: "C: 38", val: 38 },
  { region: "D: 21", val: 21 },
  { region: "E: 12", val: 12 },
  { region: "F: 3", val: 3 },
];

function LecResultsGraph() {
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
              <Title text="Gradings Distribution SCS3301" />

              <Legend />
            </Chart>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default LecResultsGraph;
