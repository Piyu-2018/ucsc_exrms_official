import React from 'react'
import DirectorNavbar from '../../Component/DirectorNavbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import SendIcon from '@mui/icons-material/Send';
import { borderRadius, borderRight } from '@mui/system';
import HoESidebar from './HoESidebar';




  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      height: 50,
      margintop:55
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const action = (
  <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
);


function Chat() {
    const open = true;
  console.log(open);
  return (
    <div>
      <DirectorNavbar/>
    <Box sx={{ flexGrow: 100}}>
    <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2} >
            <HoESidebar open={open} />
          </Grid>

          <Grid item sm={8} md={10}>
              <Grid item sm={6} md={4}>
              
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  height:410,
                  bgcolor: 'background.paper',
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Hiruni Guruge" secondary="Watch the full video here" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Piyumi Rathnayaka" secondary="Hey guys!!! we got two opening in the..." />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Pivithuru Batuwangala" secondary="Check it out right here👇" />
                </ListItem>
              </List>
            </Grid>
          
        
        <Grid item sm={6} md={6}>
          <Item>
            <Box sx={{
              width: '100%',
              
              height:410,
              bgcolor: '#EDEDED',
            }}
            >
              <Stack spacing={2} sx={{ minWidth: 990 }}>
                <SnackbarContent sx= {{bgcolor: '#CECECE', color:'black'}} message="Hiruni Guruge" />
                <Stack spacing={2} sx={{ maxWidth: 300, bgcolor: '#1363DF', borderRadius: 50 }}>
                <SnackbarContent message="Watch the full video here"/></Stack>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <SnackbarContent message="Type a messsage " action={action} />
                
                </Stack>
            </Box>
          </Item>
        </Grid>
            
          </Grid>
          
        </Grid>
    </Box>
    </div>
  )
}

export default Chat