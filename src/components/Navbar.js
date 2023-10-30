import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import logo from '../assets/Shark.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';



export default function Navbar() {
  const [{basket}, dispatch] = useStateValue();



  return (
    <Box sx={{ fixed: 1 }}>
      <div className="navbar">
      <AppBar position="sticky" color="secondary">
        <Toolbar>
        <Link to="/">
        <IconButton size="large" 
        edge="start" 
        color="inherit"
         aria-label="menu" 
         sx={{ mr: 2 }}>
        <img src={logo} 
        style={{ width: '60px', height: '60px' }} 
        alt='logo'/>
        </IconButton>
        </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Link to="checkout-page">
           <IconButton>
            <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCartIcon sx={{ color: "#025259" }}fontSize='large'></ShoppingCartIcon>
            </Badge> 
           </IconButton>
          </Link>
          <Link to="/signin">
          <Button
            color="inherit"
            style={{
              color: theme.palette.error.main,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Sign in
          </Button>

          </Link>
        
        </Toolbar>
      </AppBar>
      </div>
  
    </Box>
   
  );
}


