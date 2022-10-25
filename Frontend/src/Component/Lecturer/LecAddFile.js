import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import writeXlsxFile from "write-excel-file";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_URL } from "../../constants/globalConstants";

function LecAddFile(props) {
  // const HEADER_ROW = [
  //   {
  //     value: "Index Number",
  //     fontWeight: "bold",
  //   },
  //   {
  //     value: "Marks",
  //     fontWeight: "bold",
  //   },
  // ];

  // const DATA_ROW_1 = [
  //   {
  //     type: Number,
  //     value: 19001411,
  //   },
  //   {
  //     type: Number,
  //     value: null,
  //   },
  // ];

  // const DATA_ROW_2 = [
  //   {
  //     type: Number,
  //     value: 19001428,
  //   },
  //   {
  //     type: Number,
  //     value: null,
  //   },
  // ];

  const assignment_id = props.assignmentId;

  const [indexnumbers, setIndexNumbers] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;
  const getIndexNumbers = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
    await axios
      .get(API_URL + `/settings/getIndexAssign/${assignment_id}`, config)
      .then((response) => {
        setIndexNumbers(response.data);
      });
  };

  useEffect(() => {
    getIndexNumbers();
  }, []);

  const objects = [
    {
      index_number: 19001411,
      marks: null,
    },
    {
      index_number: 19001852,
      marks: null,
    },
  ];

  console.log(indexnumbers);

  const schema = [
    // Column #1
    {
      column: "index_number", // Column title
      value: (student) => student.index_no,
      width: 20,
      type: Number,
    },
    {
      column: "marks",
      value: (student) => student.marks,
    },
  ];

  const handleClick = () => {
    WriteFile();
  };

  const WriteFile = async () => {
    await writeXlsxFile(indexnumbers, {
      schema,
      fileName: "assignment.xlsx",
    });
  };

  return (
    <>
      <Box>
        {/* <Button variant="outlined">Primary</Button> */}
        <Button variant="outlined" onClick={handleClick}>
          <Typography variant="p" sx={{ color: "black" }}>
            Download format file
          </Typography>
        </Button>
      </Box>
    </>
  );
}

export default LecAddFile;
