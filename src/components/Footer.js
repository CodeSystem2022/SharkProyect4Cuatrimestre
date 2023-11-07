
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

// Estilo CSS para el footer, cambiar lo que se necesite
const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: 'lightgray',
  padding: '10px', 
  textAlign: 'center',
};


function Footer(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {'Team SharkDevelop '}
      {new Date().getFullYear()}
      {'.'}
   <Typography>
          <Link color="inherit" to='/'>
        Inicio
      </Link>{' '}

   </Typography>
    </Typography>
  );
}

export default Footer;