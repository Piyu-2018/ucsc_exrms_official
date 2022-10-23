import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  createTheme,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  ClickAwayListener,
  MenuList,
  Popper,
  Grow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Select } from "formik-material-ui";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../constants/globalConstants";
import moment from "moment";

// const UsFormatter = new Intl.DateTimeFormat('en-US')

const theme = createTheme({
  typography: {
    h6: {
      color: "#06283D",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#06283D",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(
//   AssignmentName,
//   Description,
//   Contribution,
//   Deadline,
//   Action
// ) {
//   return { AssignmentName, Description, Contribution, Deadline, Action };
// }

function AdminLoginTable(props) {
  // console.log(props.AssignData);
  //   const assign = props.AssignData;
  console.log(props.AssignData);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const options = ["All", "This Month", "This Week", "Today"];
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const [age, setAge] = React.useState("");

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const [logins, setLogins] = useState([]);
  let date = [];

  const getLogins = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getLogins", config)
      .then((response) => {
        setLogins(response.data);

        // console.log(response.data);
      });
  };

  useEffect(() => {
    getLogins();
  }, []);

  return (
    <Box>
      <Box sx={{ mt: "10px", mr: "80%" }}>
        <Typography variant="h5" sx={{ ml: "80px" }} gutterBottom>
          <AccessTimeFilledIcon /> By Time
        </Typography>
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        sx={{ width: "100%" }}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
      <TableContainer component={Paper} sx={{ mt: "20px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <Typography variant="h6">User Name</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Name</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Type</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Time and Date</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Status</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logins.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.user_name}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.f_name} {row.l_name}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.type}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {moment(row.datetime).format("MMMM Do YYYY, h:mm:ss a")}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.status}
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AdminLoginTable;
