import { useGetCategoriesQuery } from "../../services/apis/category"
import { ProductAndId, useGetProductsQuery } from "../../services/apis/product";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { ProductItem } from "./products";
import { Card } from "@mui/material";

export enum CategoryDescription  {
    All,
    SacBakimUrunleri = "SDscT",
    Parfumler = "2FG8v",
    MakyajMalzemeleri = "VBnIo",
    VucutYagKremleri = "Sc02T"
}
interface CategoryProductTypes {
    sendDataToParent : CategoryDescription
}
export const CategoryProduct =({ sendDataToParent }:CategoryProductTypes) => {
    const {data:categories} = useGetCategoriesQuery();
    const {data:products} = useGetProductsQuery();
    const [productList , setProduct] = useState([] as ProductAndId[])
    const [categoryforproduct, setforCategory] = useState(sendDataToParent);
    useEffect(() => {
        if (categoryforproduct !== CategoryDescription.All) {
            const filteredProducts = products
                ? products.filter((item) => item?.categoryId === categoryforproduct)
                : [];
            setProduct(filteredProducts);
        }
        else setProduct(products? products : []);
    }, [categoryforproduct, products]);
    const handleCategoryChange = (id : string) => {
        switch(id)
        {
            case CategoryDescription.MakyajMalzemeleri.toString() : return setforCategory(CategoryDescription.MakyajMalzemeleri);
            case CategoryDescription.SacBakimUrunleri.toString() : return setforCategory(CategoryDescription.SacBakimUrunleri);
            case CategoryDescription.Parfumler.toString() : return setforCategory(CategoryDescription.Parfumler);
            case CategoryDescription.VucutYagKremleri.toString() : return setforCategory(CategoryDescription.VucutYagKremleri);
            default : return setforCategory(CategoryDescription.All);
        }
    }
    return (
        <div className="container-fluid " style={{height:"86vh"}}>
            <div className="row">
                <div className="col-md-3">
          <Box sx={{ margin:"40px 0px 5px 5px",top: "0px",textAlign:"left" ,border:"2px solid black",borderRadius:"10px",width:"200px",backgroundColor:"lightcoral",color : "white"}}>
            <Card sx={{padding:"0px 0px 0px 0px", margin:"0px"}}>
              {categories?.map((category,key) => (
                <ListItem sx={{cursor:"pointer",color:"white",backgroundColor: categoryforproduct.toString() === category.id ? "black" : "gray"}} key={key} >
                  <ListItemText onClick={()=>handleCategoryChange(category.id)}  sx={{padding:"0px 0px 0px 0px",margin:"0px"}} primary={category.description} />
                </ListItem>
              ))}
            </Card>
          </Box>
                </div>
                <div className="col-md-9" style={{display:"flex",justifyContent:"space-around"}}>
                    {
                        productList.map((item, key)=>{
                           return <ProductItem props={item} key={key}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}