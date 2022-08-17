import * as React from "react";
import "./../../style/navbar.css";
import { ReactComponent as Logo } from "./../../assets/svgs/Logo.svg";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Badge } from "@mui/material";
import styled from "styled-components";
import { Mail, Message, Notifications, Pets } from "@mui/icons-material";
import { useState } from "react";

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const pages = [
  <Button>
    <Link
      to="/Contacts"
      style={{
        textDecoration: "none",
        fontSize: "18px",
        lineHeight: "22px",
        fontfamily: "Montserrat",
        fontWeight: "600",
      }}
    >
      Contact us
    </Link>
  </Button>,
  <Button sx={{ marginLeft: "10px" }}>
    <Link
      to="/About"
      style={{
        textDecoration: "none",
        fontSize: "18px",
        lineHeight: "22px",
        fontfamily: "Montserrat",
        fontWeight: "600",
      }}
    >
      About
    </Link>
  </Button>,
];

const LecNavBar = (props) => {
  const [open, setOpen] = useState(true);

  function clickHandler() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "transparent",
        color: "green",
        boxShadow: "0px 0px 0px 0px",
      }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl" sx={{ bgcolor: "#E4EBF5" }}>
        <Toolbar disableGutters>
          <IconButton
            onClick={clickHandler}
            aria-label="open drawer"
            edge="start"
          >
            <MenuIcon color="primary" sx={{ height: "40px", width: "40px" }} />
          </IconButton>
          <Typography
            className="typo"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <Logo />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            component="a"
            href=""
            textColor="blue"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontfamily: "Montserrat",
              fontWeight: 600,
              letterSpacing: ".3rem",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              paddingLeft: "55%",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Badge badgeContent={4} color="error">
              <IconButton>
                <Message color="primary" />
              </IconButton>
            </Badge>
            <Badge badgeContent={2} color="error">
              <IconButton>
                <Notifications color="primary" />
              </IconButton>
            </Badge>
            <IconButton>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="./pubImgs/lecturer.png"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default LecNavBar;
