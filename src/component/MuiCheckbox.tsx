import {
    Box, 
    Checkbox ,
    FormControlLabel
} from '@mui/material'
import { useState } from 'react'
export default function MuiCheckbox() {
    const [acceptTmC, setAcceptTmC] = useState(false)
    console.log(acceptTmC)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setAcceptTmC(event.target.checked)

    }
  return (
    <Box >
        <Box>
            <FormControlLabel 
            label='I accept terms and conditions'
            control={<Checkbox 
                checked={acceptTmC}
                onChange={handleChange}/>}
            />
        </Box>
    </Box>
  )
}
