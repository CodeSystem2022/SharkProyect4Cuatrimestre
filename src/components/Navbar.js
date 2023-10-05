import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: '#d7daff' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img src={logo} style={{ width: '30px', height: '30px' }}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: 'black' }}>
            News
          </Typography>
          <Button color="inherit" style={{ color: 'black' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
