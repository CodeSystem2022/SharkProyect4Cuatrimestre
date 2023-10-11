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
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const theme = useTheme();

  return (
    <Box sx={{ fixed: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img src={logo} style={{ width: '30px', height: '30px' }} alt='logo'/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: theme.palette.secondary.main }}>
          </Typography>
          <Badge badgeContent={2} color='secondary'>
            <ShoppingCartIcon color='secondary' fontSize='large'></ShoppingCartIcon>
          </Badge>
          <Button color="inherit" style={{ color: theme.palette.error.main, fontFamily: theme.typography.fontFamily }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
