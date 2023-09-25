import { Stack, Button, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
export const MuiButton = () => {
  return (
    
    <Stack  spacing={2} >
        <p>// Six category of colors (button)
    // primary
    // secondary
    // Error
    // warning
    // info
    // success</p>
    <Stack spacing={2} direction={'row'} >
        <Button variant='text' href='https://google.com' target='_blank'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>
    <Stack spacing={2} direction={'row'} >
        <Button variant='text' href='https://google.com' target='_blank'>Text</Button>
        <Button variant='contained' color={'primary'}>Contained</Button>
        <Button variant='contained' color={'secondary'}>Contained</Button>
        <Button variant='contained' color={'error'}>Contained</Button>
        <Button variant='contained' color={'warning'}>Contained</Button>
        <Button variant='contained' color={'info'}>Contained</Button>
        <Button variant='contained' color={'success'}>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>
    <Stack display={'block'} spacing={2} direction={'row'}>
        <Button variant={'contained'} size='small'>Small</Button>
        <Button variant={'contained'} size='medium'>Small</Button>
        <Button variant={'contained'} size='large'>Small</Button>
    </Stack>
    <Stack spacing={2} direction={'row'}>
        <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={()=>alert("hi")}>
            Send
        </Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
            Send
        </Button>
        <IconButton aria-label='send' color='success' size='small' >
            <SendIcon/>
        </IconButton>
    </Stack>
    </Stack>
  )
}
