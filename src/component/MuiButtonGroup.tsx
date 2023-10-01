import {Stack, Button, ButtonGroup} from '@mui/material'

export const MuiButtonGroup = () => {
  return (
    <Stack direction={'row'}>
        <ButtonGroup variant='contained' orientation='vertical' 
        size='small' color="secondary"
        aria-label='alignment button group'>
        <Button onClick={()=>alert("left")}>Left</Button>
        <Button >Center</Button>
        <Button >Right</Button>
        </ButtonGroup>
    </Stack>
  )
}
