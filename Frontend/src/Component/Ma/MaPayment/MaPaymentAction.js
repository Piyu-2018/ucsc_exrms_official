import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Form from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../../../src/constants/globalConstants";

export default function BasicSelect(props) {
  const [action, setAction] = React.useState("");
  const { register, handleSubmit } = useForm();

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  const paymentId = props.PaymentId;
  console.log(paymentId);
  const addAction = async (data) => {
    console.log("Add Action");
    console.log(data);
    // const checking_id = data.payment_id;
    if (data) {
      // setOpen(false);

      const action = data;
      console.log(action);

      //   console.log(user_id);
      // const lecturer_id = user_id.toString();

      const inputData = {
        action,
        paymentId,
        // checking_id,
      };

      console.log(inputData);
      console.log("Inputdata");
      window.location.reload();

      await axios
        .post(API_URL + "/settings/addPaymentAction", inputData)
        .then((response) => {
          // params.assignDataFunc((list) => [...list, response.data]);
          props.assignDataFunc((list) => [...list, response.data]);
          // if (!response.data.error) {
          // }
        });
    }
  };

  return (
    <Box sx={{ mt: "10px" }}>
      {/* <Form method="POST" size="small" sx={{width: "150px", backgroundColor: "#1976d2", color:"white", borderRadius: "5px"}}> */}
        <InputLabel id="demo-simple-select-label" sx={{ width:"150px"}}>-Action-</InputLabel>
        <Select
        
        size="small"
            sx={{color:"white", width:"150px", backgroundColor: "#1976d2"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={action}
          label="Action"
          onChange={handleChange}
          inputProps={register("action")}
        >
          {/* <MenuItem value={"action"} >-select action-</MenuItem> */}
          <MenuItem value={"Approved"} onClick={()=>{addAction("Approved")}}>Approve</MenuItem>
          <MenuItem value={"Rejected"} onClick={()=>{addAction("Rejected")}}>Reject</MenuItem>
          <MenuItem value={"Pending"} onClick={()=>{addAction("Pending")}}>Pending</MenuItem>
        </Select>
    
    </Box>
  );
}
