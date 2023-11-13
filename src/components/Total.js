import React from 'react'
import accounting from 'accounting'
import Button from '@mui/material/Button';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';



const totalSyles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifiContent: 'cdnter',
        ailingItems: 'center',
        heigth: '1rem'
    },
    button: {
        marginTop: '2rem'
    }
}



export const Total = ({ handleBuy }) => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className={totalSyles.root} >
        <h5> Total items: {basket?.length}</h5>
        <h5> {accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
        <Button className={totalSyles.button} variant="contained" color="secondary" onClick={handleBuy}>Finalizar Compra</Button>
        
    </div>
    
  )
}

export default Total