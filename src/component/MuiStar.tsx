import { Stack, Rating } from "@mui/material"
import { useState } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"
import  FavoriteBorderIcon  from "@mui/icons-material/FavoriteBorder"




export const MuiStar = () => {
    const [value, setValue] = useState<number | null>(3)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null)=>{
        setValue(newValue)

    }
  return (
    <Stack spacing={2}>
        <Rating value={value}
        readOnly
        size="large"
        precision={0.5} onChange={handleChange}
        icon={<FavoriteIcon fontSize='inherit'/>} 
        emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}/>
    </Stack>
  )
}
