import { Box } from "@mui/material"
export const MuiLayouts = () => {
  return (
    <>
    <Box 
    sx={{
        backgroundColor:'primary.main',
        color:'white',
        height:'100px',
        width:'100px',
        padding:'16px',
        '&:hover':{
            backgroundcolor:'primary.light'
        }
    }} >
        Code evolution
    </Box>
    <Box
    display={'flex'}
    height={'100px'}
    width={'100px'}
    bgcolor='success.light'
    p={2}
   >

    </Box>
    </>
  )
}
