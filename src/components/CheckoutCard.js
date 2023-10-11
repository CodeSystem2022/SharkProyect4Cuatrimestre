import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import accounting from "accounting";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


//se define una constante con los estilos que se usaran en el componente, se declaran en las etiquetas 
const checkoutCardPageStyle = {
    root: {
      maxWidth: 345, 
    },
    action: {
        marginTop: "1rem",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", //16:9
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between",
        textAiling: "center",
    }
  };
  

export default function CheckoutCard(props) {
  const { product } = props; // permite acceder a la propiedad product del objeto props y asignarla a una variable local llamada product


  return (
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
        action={
            <Typography
            variant='h5'
            color='black'
            style={{ fontFamily: 'Source Sans Pro' }}
            >
                {accounting.formatMoney(product.price)}

            </Typography>

        }
        title={product.name}
      />
      <CardMedia 
        component="img"
        image={product.image}  
        className={checkoutCardPageStyle.media}    
        />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
       
      </CardContent>
      <CardActions disableSpacing className={checkoutCardPageStyle.cardActions}>
        <IconButton>
         <DeleteIcon fontSize='large'/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
