import * as React  from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from '@mui/material/Stack';
import logo from "../img/logo.png"
import { CssBaseline } from '@mui/material';
import "../Component/Head.css";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [navs,setNavbar]= useState(false)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  // industies dropw down 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // industies dropw down 


const changeBackgroundc =()=>{
  if(window.scrollY >= 10){
    setNavbar(true);
  }else {
    setNavbar(false)
  }
}
window.addEventListener("scroll" ,changeBackgroundc);


  return (
    <>
    <CssBaseline/>
    <AppBar className={ navs ? 'navs active': 'navs'} position="sticky">
    <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                padding: "4px",
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="" height="71px" sx={{ padding: "3px" }} />
            </Typography>

            <Box className='cen' sx={{ flexGrow: 1, justifyContent: "center", display: { xs: 'flex', md: 'none', } }}>
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

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> Home </Typography>

                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>

                  <Typography variant="button" id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowRightIcon />}
                    textAlign="center">  Industries</Typography>

                </MenuItem>
                <Menu

                  id="demo-positioned-menu cane "
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}

                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>


                </Menu>

                <MenuItem onClick={handleCloseNavMenu}>

                  <Typography textAlign="center">  About Us </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>

                  <Typography textAlign="center" > Contact Us </Typography>

                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>

                  <Typography textAlign="center">Blog</Typography>
                </MenuItem>


              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                padding: "4px",
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="" height="71px" />
            </Typography>
            <Box sx={{ justifyContent: "center", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Button
                disableElevation
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',  fontWeight: "400" }}
              >
                Home
              </Button>

              <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: 'white', display: 'inlineblock',  fontWeight: "400" }}
              >
                Industries

              </Button>
              <Menu
                id="demo-positioned-menu cane "
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}

                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose} sx={{  fontWeight: "400" }}>Profile</MenuItem>
                <MenuItem onClick={handleClose} sx={{  fontWeight: "400" }}>My account</MenuItem>
                <MenuItem onClick={handleClose} sx={{  fontWeight: "400" }}>Logout</MenuItem>


              </Menu>
              <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',  fontWeight: "400" }}
              >
              Contact Us
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',  fontWeight: "400" }}
              >
              About Us
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',  fontWeight: "bold" }}
              >
                Blog
              </Button>
            </Box>
            {/* <Box sx={{ flexGrow: 0 }}>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" color="inherit">Login</Button>
                <Button variant="outlined" color="inherit">Start</Button>
              </Stack>
            </Box> */}
          </Toolbar>
        </Container>
  </AppBar>
  </>
    
  );
};
export default ResponsiveAppBar;
