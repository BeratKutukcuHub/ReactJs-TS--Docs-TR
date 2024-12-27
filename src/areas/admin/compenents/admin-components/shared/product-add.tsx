import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { Product, useAddProductMutation } from '../../../../../components/services/apis/product';
import { useAddPostMutation } from '../../../../../components/services/apis/images';

let ProductInfo : Product = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    categoryId: '',
}
const ProductPost = () => {
  const [addImages] = useAddPostMutation();
  const [addProduct] = useAddProductMutation();
  const [items , setItems] = useState(ProductInfo)
  const [_selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setItems((prev)=>{
        return {
            ...prev,
            [event.target.name] : event.target.value
        }
    })
  }
  const handleSelect = (event : SelectChangeEvent<string>) => {
    setItems((prev)=>{
        return {
            ...prev,
            [event.target.name] : event.target.value
        }
    })
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
        
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        
      };
      console.log(previewUrl);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if(previewUrl){
        const response = await addProduct(items).unwrap();
        await addImages({
        productId : response.id,
        imgPath : previewUrl
      });
      }
    } catch (error) {
      console.error('Ürün eklenirken hata oluştu:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Ürün Ekle
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Ürün Adı"
              name="name"
              value={items.name}
              onChange={(e) => handleChange(e)}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Açıklama"
              name='description'
              value={items.description}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Fiyat"
              name='price'
              value={items.price}
              onChange={handleChange}
              variant="outlined"
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Stok"
              name='stock'
              value={items.stock}
              onChange={handleChange}
              variant="outlined"
              required
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Kategori</InputLabel>
              <Select
                name='categoryId'
                value={items.categoryId}
                onChange={handleSelect}
                label="Saç Bakım Ürünleri"
                required
              >
                <MenuItem value="SDscT">Saç Bakım Ürünleri</MenuItem>
                <MenuItem value="Sc02T">Vücüt Yağ Kremleri</MenuItem>
                <MenuItem value="2FG8v">Parfümler</MenuItem>
                <MenuItem value="VBnIo">Makyaj Malzemeleri</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Resim Yükle
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Kaydet
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ProductPost;