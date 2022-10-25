import { Breadcrumbs, Button, ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function AdminButtonGroup() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <>
      <Box sx={{ mb: "50px" }}></Box>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        spacing={3}
      >
        <Link to="/admin_users">
          <Button sx={{ mr: "10px" }}>Lecturers</Button>
        </Link>
        <Link to="/admin_user_other">
          <Button sx={{ mr: "10px" }}>Other Executives</Button>
        </Link>
        <Link to="/admin_user_stu">
          <Button sx={{ mr: "10px" }}>Students</Button>
        </Link>
      </ButtonGroup>
    </>
  );
}

export default AdminButtonGroup;
