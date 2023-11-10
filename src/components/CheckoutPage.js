//Esta clase muestra una página de pago con una lista de productos. 
//importaciones necesarias para la clase:
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React , { useEffect, useState }from "react";
import { useStateValue } from './StateProvider';
import CheckoutCard from "./CheckoutCard";
import { Total } from "./Total";
//importacion de billetera de mercadoPago
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

//importacion de libreria axios de js para peticiones HTTP
import axios from "axios";

//estilos para la pagina de pago
const checkoutPageStyle = {
  root: {
    flexGrow: 1,
    padding: "2rem", 
  },
};


//Clase Checkout Page
const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [preferenceId, setPreferenceId] = useState([]);

  // Inicializar Mercado Pago con tu clave pública

  initMercadoPago('TEST-d07d0266-fdb6-41ea-bfc1-e4f743095867');

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8080/create_preference", {
        items: basket.map(item => ({
          description: item.description,
          price: item.price,
          quantity: 1,
        }))
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      console.log('Preference ID:', id);
      setPreferenceId(id);
    }
  };
    //Funcion FormRow que renderiza cada producto en una cuadricula
  function FormRow() {
    return (
      <React.Fragment>
        {basket.map((item) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
            <CheckoutCard key={item.id} product={item} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }

//Renderizado de la pagina de pago
  return (
    <div style={checkoutPageStyle.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <Typography align="center" gutterBottom variant="h4">
           <Total handleBuy={handleBuy} />
           {preferenceId && <Wallet initialization={{ preferenceId }} />}

          </Typography>
        </Grid>
      </Grid>
    </div>
    
  );
};

export default CheckoutPage;
