import { ImageList, ImageListItem, Stack } from "@mui/material"

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
        <ImageList
        sx={{width:500, height:450}}
        columns={3}
        rowHeight={164}
        >
            {
                itemData.map(item=>(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}>
                    </ImageListItem>
                ))
            }
           
        </ImageList>
    </Stack>
  )
}
