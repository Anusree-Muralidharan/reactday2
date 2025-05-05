import { TextField } from '@mui/material'
import React from 'react'

const Add = () => {

  return (
    <div>
      <TextField id="outlined-basic" label="productname" name='productname'  variant="outlined" /><br /><br />
      <TextField id="outlined-basic" label="price" name='price'  variant="outlined" /><br /><br />
      <TextField id="outlined-basic" label="des" name='description'  variant="outlined" /><br /><br />
      <TextField id="outlined-basic" label="quan" name='add'  variant="outlined" /><br /><br />
      
    </div>
  )
}

export default Add
