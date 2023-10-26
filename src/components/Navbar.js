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

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setVisible(isScrolledDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Box sx={{ fixed: 1 }}>
      <>
      <div className="navbar">
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={logo}
                style={{ width: "30px", height: "30px" }}
                alt="logo"
              />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: theme.palette.secondary.main }}
          ></Typography>
          <Link to="checkout-page">
            <IconButton>
              <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCartIcon
                  color="secondary"
                  fontSize="large"
                ></ShoppingCartIcon>
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
      </>
    </Box>
   
  );
}

