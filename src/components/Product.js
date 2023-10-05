import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from "accounting";
import imagencombo from '../assets/combo.png'

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
            <Typography
            variant='h5'
            color='black'
            >
                {accounting.formatMoney(50)}

            </Typography>

        }
        title="Hamburgesa"
        subheader= "Precio" // se trae del back
      />
      <CardMedia
        component="img"
        height="200"
        image={imagencombo}
        alt="hamburgesa"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hambuerguesa completa con queso 
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
