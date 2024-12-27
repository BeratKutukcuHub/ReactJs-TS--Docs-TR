import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { Product } from '../../../../../components/services/apis/product';

interface ProductCrudTypes {
    product : Product
}
export const ProductCrud = ({product}:ProductCrudTypes) => {
    const handleSubmit = () => {
    
    }
    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: '20px' ,border:"2px solid black", borderRadius:"10px"}}>
      <Typography variant="h4" align="center" gutterBottom>
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={product.name}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Açıklama"
              variant="outlined"
              placeholder={product.description}
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Fiyat"
              variant="outlined"
              placeholder={product.price.toString()}
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Stock"
              placeholder={product.price.toString()}
              variant="outlined"
              required
              type="number"
            />
          </Grid>
         
          <Grid item xs={12} style={{display:"flex",justifyContent:"space-around"}}>
            
            <Button variant='contained' sx={{backgroundColor:"darkred"}}>Geri Gel</Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Kaydet
            </Button>
          </Grid>
        </Grid>
        </form>
        </Box>
    )
}