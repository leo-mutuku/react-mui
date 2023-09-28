import { CatchingPokemon } from "@mui/icons-material"
import { AppBar, Button, IconButton, Stack, Toolbar, Typography , Menu, MenuItem} from "@mui/material"
import { useState } from "react"

export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl]=useState<null | HTMLElement>(null)
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        setAnchorEl(event.currentTarget)
    }
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label="logo">
                <CatchingPokemon />
            </IconButton>
            <Typography variant="h6" 
            component={'div'}
            sx={{flexGrow:1}}>
                Pokemonapp
            </Typography>
            <Stack direction={'row'} spacing={2} >
                <Button color="inherit">Features</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit" id='resources-button'>Resources</Button>
                <Button color="inherit">Login</Button>
            </Stack>
            <Menu id='resources-menu'
             anchorEl={anchorEl}
             onClick={handleClick}>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Products</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}
