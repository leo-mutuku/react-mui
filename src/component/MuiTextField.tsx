import { Stack, TextField, InputAdornment, } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react'
export const MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
   <Stack spacing={4}>
    <Stack direction={'row'} spacing={2}>
      <TextField label="Name" variant="outlined" />
      <TextField label="Name" variant="filled" />
      <TextField label="Name" variant="standard" />
    </Stack>
    <Stack direction={'row'} spacing={2}>
      <TextField label="form input" size='small' required color="secondary" />
      <TextField label="password" 
      size='small' required color="secondary"
       helperText='Do not share your password with any one'
       type="password"
       disabled/>
        <TextField label="read only" 
        size='small' 
        required color="secondary" 
        InputProps={{readOnly:true}}/>
    </Stack>
    <Stack direction={'row'} spacing={2}>
        <TextField label='Amount'
        InputProps={{
          startAdornment:<InputAdornment position='start'>$</InputAdornment>,
        }}/>
        
        <TextField 
        label='Weight'
        InputProps={{
          endAdornment:<InputAdornment position="end">kg</InputAdornment>
        }}/>

<TextField 
        label='Password'
        error
        InputProps={{
          endAdornment:<InputAdornment position="end"><VisibilityIcon/></InputAdornment>
        }}/>
    </Stack>
   </Stack>
  )
}
