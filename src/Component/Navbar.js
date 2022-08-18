import * as React from 'react';
import './../style/navbar.css';
import { ReactComponent as Logo } from './../assets/svgs/Logo.svg';
import {Link}  from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';



const pages = [<Button><Link to='/Contacts' style={{ color:'#06283D',textDecoration: 'none' , fontSize: "15px",lineHeight: "22px",fontfamily: 'Montserrat',fontWeight: "600"}}>Contact us</Link></Button>,
               <Button sx={{ marginLeft: "10px"  }}><Link to='/About' style={{ color:'#06283D',textDecoration: 'none', fontSize: "15px",lineHeight: "22px" ,fontfamily: 'Montserrat',fontWeight: "600"}} >About</Link></Button>,
               <Button variant="contained" sx={{ backgroundColor:'#06283D', marginLeft: "10px", borderRadius:'15px', padding: '5px 30px'  }}><Link to='/Login' style={{ color:'#DFF6FF', textDecoration: 'none', fontSize: "15px",lineHeight: "22px" ,fontfamily: 'Montserrat',fontWeight: "600"}} >Login</Link> </Button>];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="relative" style={{width:"100%",backgroundColor:"transparent" , color: "green", boxShadow:"0px 0px 0px 0px"}} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography className='typo'
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            <Link to='/'><Logo /></Link>
            
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
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
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontfamily: 'Montserrat',
              fontWeight: 600,
              letterSpacing: '.3rem',
 
              
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,paddingLeft: "55%" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
  );
};
export default Navbar;
