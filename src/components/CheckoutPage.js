import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import products from "../product-data";
import React from "react";
import Product from "./Product";

const checkoutPageStyle = {
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
};

const CheckoutPage = () => {
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
