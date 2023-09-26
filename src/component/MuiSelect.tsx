import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([])
  console.log(countries)
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
  const value = event.target.value
  setCountries(typeof value === 'string' ? value.split(','):value)
  }
  return (
    <Box width={'250px'}>
      <TextField 
      label='select countries'
      select
      fullWidth
      size='small'
      color='secondary'
      helperText='Please select your country'
      SelectProps={{
        multiple:true
      }}
      value={countries}
      onChange={handleChange}>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='KE'>Kenya</MenuItem>
        <MenuItem value="US"> USA</MenuItem>
      </TextField>
    </Box>
  )
}
