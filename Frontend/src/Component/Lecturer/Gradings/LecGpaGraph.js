import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import React from "react";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation, Legend } from "@devexpress/dx-react-chart";

const chartData = [
  { region: "First Class", val: 41 },
  { region: "Second Upper", val: 54 },
  { region: "Second Lower", val: 38 },
  { region: "Normal Class", val: 63 },
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
              <Title text="Class Distribution" />
            </Chart>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default LecGpaGraph;
