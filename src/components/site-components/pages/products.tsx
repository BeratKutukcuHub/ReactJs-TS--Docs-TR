import { useEffect, useState } from "react";
import { ProductPosts, useGetPostProductIdQuery } from "../../services/apis/images";
import { ProductAndId } from "../../services/apis/product"
import { Card, CardMedia, CardContent, Typography, Box, Rating } from '@mui/material';

interface ProductItemTypes {
    props : ProductAndId
}
export const ProductItem = ({props} : ProductItemTypes) => {
    const [path , setPath] = useState("");
    const {data} = useGetPostProductIdQuery();
    useEffect(()=>{
      if(data)
        {
          setPath(ProductPosts(props.id, data)?.[0].imgPath ?? "");
        }
    })
    console.log(path);
    return (
        <div>
            <Card sx={{ maxWidth: 250,maxHeight:300, margin: '20px auto' }}>
      <CardMedia
        component="img"
        height="140"
        image={path}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description.toString()}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <Rating name="read-only"  readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '10px' }}>
          </Typography>
        </Box>
        <Typography variant="h6" color="text.primary" sx={{ marginTop: '10px' }}>
          {props.price} TL
        </Typography>
        <hr />
      </CardContent>
      
      <CardContent>
        
        
      </CardContent>
    </Card>
        </div>
    )
}