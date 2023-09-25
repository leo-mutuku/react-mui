import {
    Stack,  
    ToggleButton, 
    ToggleButtonGroup } from '@mui/material'
import {
    FormatBold,
    FormatItalic,
    FormatUnderlined
} from '@mui/icons-material'
import { useState } from 'react'
export const MuiButtonToggle = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log(formats)
    const handleFormatChange =(_event:React.MouseEvent<HTMLElement>,
        updatedFormats:string | null)=>{
            setFormats(updatedFormats)

    }
  return (
    <Stack direction={'row'} spacing={2}>
        <ToggleButtonGroup 
        aria-label='text formating'
         value={formats} 
         onChange={handleFormatChange}
         size='small'
         color='success'
         orientation='vertical'
         exclusive
         >

            <ToggleButton value={'bold'} aria-label='bold'><FormatBold/></ToggleButton>
            <ToggleButton value={'italic'} aria-label='italic'><FormatItalic/></ToggleButton>
            <ToggleButton value={'underlined'} aria-label='underlined'><FormatUnderlined/></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
  )
}
