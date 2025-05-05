import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Muicard = () => {
  var[product,setproduct]=useState([])
  axios.get("https://fakestoreapi.com/products")
  
  .then((res)=>{
    console.log(res.data)
    setproduct(res.data)
  })
  
  return (
    <div>
      <Grid container spacing={2}>
      {product.map((val)=>{
        return(
        <Grid>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        description:{val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
     )
    })}
    </Grid>
    </div>
  )
}

export default Muicard
