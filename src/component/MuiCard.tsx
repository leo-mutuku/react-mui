import { Card, Box , CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material"

export const MuiCard = () => {
  return (
    <Box width={'300px'}>
        <Card>
            <CardMedia component={'img'}
            height='140px'
            alt="image"
            image='https://images.unsplash.com/photo-1694967336899-d6d8b08932bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60'/>
            <CardContent>
                <Typography
                variant="h5"
                component={'div'}>
                    React
                </Typography>
                <Typography
                variant="body2"
                color='text.secondary'>
                    JSX stands for JavaScript XML. JSX is an XML/HTML like extension to JavaScript. As you can see above, JSX is not JavaScript nor HTML. JSX is a XML syntax extension to JavaScript that also comes with the full power of ES6 (ECMAScript 2015). Just like HTML, JSX tags can have a tag names, attributes, and children.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more...</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
