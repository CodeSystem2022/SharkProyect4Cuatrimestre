//Esta clase muestra una página de pago con una lista de productos. 
//importaciones necesarias para la clase:
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import products from "../product-data";
import React from "react";
import Product from "./Product";

//estilos para la pagina de pago
const checkoutPageStyle = {
  root: {
    flexGrow: 1,
    padding: "2rem", 
  },
};


//Clase Checkout Page
const CheckoutPage = () => {
  //Funcion FormRow que renderiza cada producto en una cuadricula
  function FormRow() {
    return (
      <React.Fragment>
        {products.map((item) => (
          <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
            <Product product={item} />
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
            Total
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
