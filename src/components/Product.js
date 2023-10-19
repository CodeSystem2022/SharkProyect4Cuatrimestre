import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from "accounting";




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product(props) {
  const { product } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, marginTop: '80px'}}>
      <CardHeader
        action={
            <Typography
            variant='h5'
            color='black'
            style={{ fontFamily: 'Source Sans Pro' }}
            >
                {accounting.formatMoney( product.price, '$')}

            </Typography>

        }
        title={product.name}
        subheader= "Precio" // se trae del back
      />
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt="hamburgesa"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
       
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label='Add to Cart'> 
             <AddShoppingCartIcon></AddShoppingCartIcon>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Una especialidad de la casa .... completar
          </Typography>
          <Typography>
            completar con algo mas
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
