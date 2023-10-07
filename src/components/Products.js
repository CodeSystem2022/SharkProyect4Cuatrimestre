import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import products from '../product-data.js';
import Product from '../components/Product';


export default function Products() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '80px', marginRight: '20px', marginLeft: '20px'}}>
      <Grid container spacing={3}>
        {products.map(product =>(
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Product product={product}/>
            </Grid>
          ))
        };
       
      </Grid>
    </Box>
  );
}
