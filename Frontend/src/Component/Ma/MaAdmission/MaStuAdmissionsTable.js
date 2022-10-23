import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button, Paper,TableRow,TableHead,TableContainer,TableBody,Table, Typography } from '@mui/material';

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../../constants/globalConstants";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#06283D',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#C4DDFF',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(index,regNo, name, option) {
//   return { index,regNo, name, option };
// }
// const btn = <Button variant="contained" href="/ma_admission_card" sx={{color:"white", backgroundColor:"#8dabd8", height:"30px"}}>View Admission&nbsp;&nbsp;&nbsp;<KeyboardDoubleArrowRightIcon/></Button>;

// const rows = [
//   createData('19001381', '2019/CS/138', 'P. D. P. P. Rathnayaka', btn),
//   createData('19000596', '2019/CS/059', 'B. A. P. Hiruthma', btn),
//   createData('19000324', '2019/CS/032', 'H. D. A. Dhanapala', btn),
//   createData('19000208', '2019/CS/020', 'A. B. C. Kasun',btn),
//   createData('19000104', '2019/CS/010', 'K. P. Saman',btn),
//   createData('19001861', '2019/CS/186', 'D. D. Damitha',btn),
//   createData('19000324', '2019/CS/232', 'A. B. Nimal',btn),
//   createData('19001324', '2019/CS/132', 'G. A. Sanduni', btn),
//   createData('19000464', '2019/CS/046', 'W. A. Hirushika', btn),
//   createData('19001784', '2019/CS/178', 'S. D. Perera', btn),
  
  
// ];

function MaAdmissionsTable(props) {

  <Typography>HI</Typography>

  const [stuAddmData, setStuAddmData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);

  const getStuAddmDetails = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getStuAddmDetails/", config)
      .then((response) => {
        setStuAddmData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getStuAddmDetails();
  }, []);

  console.log(props);

  // console.log(props.AssignData);
  const assign = props.AssignData;
  console.log(props.AssignData);
  // console.log(assign[0].name);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Index NO:</StyledTableCell>
            <StyledTableCell align="left">Registration NO:</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Option</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stuAddmData.map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="data">
                {data.index_no}
              </StyledTableCell>
              <StyledTableCell align="left">{data.reg_no}</StyledTableCell>
              <StyledTableCell align="left">{data.user_id}</StyledTableCell>
              <StyledTableCell align="left">{data.user_id}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MaAdmissionsTable
