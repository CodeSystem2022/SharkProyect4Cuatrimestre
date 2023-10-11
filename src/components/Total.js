import React from 'react'
import accounting from 'accounting'
import Button from '@mui/material/Button';


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

export const Total = () => {
  return (
    <div className={totalSyles.root} >
        <h5> Total items: 3 {accounting.formatMoney(50, "$")}</h5>
        <Button className={totalSyles.button} variant="contained" color="secondary">Check out</Button>
    </div>
    
  )
}
