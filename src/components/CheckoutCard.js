import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import accounting from "accounting";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';



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
  

export default function CheckoutCard({
  product: {id, name, productType, image, price, description},
}){

  const [{basket}, dispatch] = useStateValue();
  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })


  return (
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
        action={
            <Typography
            variant='h5'
            color='black'
            style={{ fontFamily: 'Source Sans Pro' }}
            >
                {accounting.formatMoney(price)}

            </Typography>

        }
        title={name}
      />
      <CardMedia 
        component="img"
        image={image}  
        className={checkoutCardPageStyle.media}    
        />
      <CardActions disableSpacing className={checkoutCardPageStyle.cardActions}>
        <IconButton>
         <DeleteIcon fontSize='large' onClick={removeItem}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
