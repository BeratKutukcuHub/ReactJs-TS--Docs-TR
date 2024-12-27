import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Category } from '../../../../../components/services/apis/category';
import { useState } from 'react';
import { CategoriesValues } from './categories-values';

interface getProps{
    Categories : Category[]
}
export const CategoriesCrud = ({Categories}:getProps) => {
    const [state , setState] = useState(false);
    return (
        <div style={{display: 'flex'}}>
     {
        !state?    <Card style={{backgroundColor: 'lightblue'}}>
        <CardContent>
        <Typography variant="h5" component="div">
            Kategori Listesi ({Categories?.length})
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Kategori Listesi Üzerinde İşlemler Gerçekleştirmek İçin Devam Edin...
        </Typography>
        </CardContent>
        <CardActions sx={{textAlign:"center"}}>
        <Button onClick={()=>setState(true)}>
          Detaylar
        </Button>
        </CardActions>
        </Card> :
        
        <Card>
            {
                     <CategoriesValues categoryprop={Categories}/>
            }
        </Card>
     }
</div>
    )
}