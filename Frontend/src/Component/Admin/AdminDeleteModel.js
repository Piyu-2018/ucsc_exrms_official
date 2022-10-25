import { Button, Modal, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

function AdminDeleteModel(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{ mb: "30px" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Are you sure you want to delete user {props.data}?
        </Typography>
        <Stack spacing={3} direction="row">
          <Button variant="contained">Yes</Button>
          <Button variant="contained">No</Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default AdminDeleteModel;
