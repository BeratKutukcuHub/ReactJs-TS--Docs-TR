import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { ProductAndId, useDeleteProductMutation } from '../../../../../components/services/apis/product';
import { useState } from 'react';
import { ProductCrud } from './product-crud';
import ProductPost from './product-add';

interface ProductValuesTypes {
    products : ProductAndId[];
}
const ProductValues = ({products} : ProductValuesTypes) => {
    const [name, setName] = useState("");
    const [deleteproduct] = useDeleteProductMutation();
    const [updateProduct, setUpdateProduct] = useState({} as ProductAndId)
    const handleActionChange = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setName(event.currentTarget.name);
    }
    const handleDelete = (id : string | undefined) => {
        if(id)
        deleteproduct(id);
    }
    const handleUpdate = (updated : ProductAndId) => {
        setUpdateProduct(updated);
        setName("update");
    }
    console.log(name);
    return (
        <div>
      {
        name != "post" ? <div>
            <Table sx={{display:name == "update"? "none" : ""}}>
        <TableHead sx={{ backgroundColor: "black" }}>
          <TableRow>
            <TableCell style={{ color: "white" }}>ID</TableCell>
            <TableCell style={{ color: "white" }}>Ad</TableCell>
            <TableCell style={{ color: "white" }}>Fiyat</TableCell>
            <TableCell style={{ color: "white" }}>Stok</TableCell>
            <TableCell style={{ color: "white" }}>Kategori Adı</TableCell>
            <TableCell style={{ color: "white" }}>İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>
                <Typography>{product.name}</Typography>
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.categoryId}</TableCell>
              <TableCell>
                <Button name="update" onClick={()=>handleUpdate(product)}>Güncelle</Button>
                <Button onClick={()=>handleDelete(product.id)}>Sil</Button>
              </TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
          <div style={{display:name == "update"?"none":"flex",justifyContent:"center"}}>
            <button className='btn btn-warning border-0' name='post' 
            onClick={handleActionChange}>Ekle</button>
          </div>
        </div> : 
        <div>
            <ProductPost/>
          <div style={{display:"flex",justifyContent:"center"}}>
          <button className='btn btn-warning border-0' name='back' 
          onClick={handleActionChange}>Geri Dön</button>
        </div>
        </div>
      }
      {name == "update"?
      <div>
      <ProductCrud product={updateProduct}/>
        <div style={{display:name == "update"?"flex":"none",justifyContent:"center"}}>
          <button className='btn btn-warning border-0' name='back' 
          onClick={handleActionChange}>Geri Dön</button>
        </div>
      </div>
      :""
      }
        
    </div>
    );
};

export default ProductValues;