import { Typography, Card, CardContent , Button, CardActions, Box} from "@mui/material";
import { useGetCategoriesQuery } from "../../../../components/services/apis/category"
import { useGetProductsQuery } from "../../../../components/services/apis/product";
import { Link } from "react-router-dom";
import { useGetUsersQuery, UserandId, useUpdateUserMutation } from "../../../../components/services/apis/user";
import { useEffect, useReducer, useState } from "react";
import { UserPage } from "./pages/users";
import { useFormik } from "formik";
import { basicSchema } from "../../../../components/services/validationrules/schemas/basicschema";
import { CategoriesCrud } from "./shared/categories-crud";
import ProductValues from "./shared/product-values";

interface initialInterfaces {
  category : boolean,
  users : boolean,
  product : boolean
} 

const reducer = (state : initialInterfaces, action: "category" | "users" | "product") => {
  switch(action){
    case 'category': {
      return { ...state, category: true }
    }
    case 'users': {
      return { ...state, users: true }
    }
    case 'product': {
      return { ...state, product: true }
    }
    default : return state;
  }
}
export type userState = {state : boolean}
let usertype : UserandId & userState = {
  state : false,
  id : "",
  name : "",
  age : 0,
  email : "",
  password : "",
  role : "member",
  userName : ""
};
export function AdminAllServices() {
  const [userupdate] = useUpdateUserMutation();
  const onSubmit = () => {
    console.log(user.id)
          userupdate({
            id : user.id,
            name : formik.values.name,
            age : user.age,
            email : formik.values.email,
            password : formik.values.password,
            role : role == "member" || role == "admin"? role : "member",
            userName : formik.values.userName
          });
  }
    const formik = useFormik({
      validationSchema : basicSchema,
      onSubmit,
      initialValues : usertype
    });
    const [state , setState] = useState(false);
    const [user , setUser] = useState(usertype);
    const [role , setRole] = useState("member");
    const { data: users } = useGetUsersQuery();
    const { data: categories } = useGetCategoriesQuery()
    const { data: products } = useGetProductsQuery()
    const [value , setValue] = useReducer(reducer, {category: false, users: false, product: false});
    let lenght = users?.length? users.length : 0;
    const handleState = (status : boolean) => {
      setState(status);
    }
    const handleRole =(event :React.ChangeEvent<HTMLSelectElement>)=>{
      setRole(event.target.value);

    }
    const lenghtmemory = (val : number) => {
      lenght = val;
    }
    useEffect(()=> {
      
    },[state])
    const handleUserUpdate = (user : UserandId & userState) => {
      setUser(user);
    }
    return (
        <>
        <div className="container" style={{height: '100%'}}>

            <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 p-5">
                    {
                      !user.state? <div style={{display: 'flex'}}>
                      <Card style={{backgroundColor: 'lightblue' ,width:"500px"}}>
                <CardContent>
                  <Typography variant="h5" component="div">
                      Kullanıcı Listesi ({lenght})
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      Kullanıcı Listesi Üzerinde İşlemler Gerçekleştirmek İçin Devam Edin...
                  </Typography>
                </CardContent>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Button sx={{display:state?"none":"block"}} onClick={(e)=>{
                  e.preventDefault();
                  setValue("users");
                  setState(true);
                }}>Bas ve Getir</Button>
                </div>
                {value.users && users && state?  <UserPage users={users} handleStates={handleState} lenght={lenghtmemory} user={handleUserUpdate}/> : ""
                
                }
              </Card>
                      </div> 
                      :

                      <div style={{display: 'flex'}}>
                        <Card style={{backgroundColor: 'lightblue'}}>
                        <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width:"500px"
        }}
      >
        <Typography component="h4" variant="h6" sx={{ textAlign: 'center' }}>
          Kullanıcı Bilgilerini Güncelle
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-1">
            <label>Ad Alanı : {user.name}</label>
            <input type="text" name="name" className="form-control" value={formik.values.name} onChange={formik.handleChange}/>
            {
              formik.errors.name? <h6 className="" style={{color :"darkred"}}><strong>{formik.errors.name}</strong></h6> : ""
            }
          </div>

          <div className="mt-1">
            <label>Kullanıcı Adı : {user.userName}</label>
            <input type="text" name="userName" className="form-control" value={formik.values.userName} onChange={formik.handleChange}/>
            {
              formik.errors.userName? <h6 className="" style={{color :"darkred"}}><strong>{formik.errors.userName}</strong></h6> : ""
            }
          </div>

          <div className="mt-1">
            <label>Şifre : *</label>
            <input type="password" name="password" placeholder="Şifre Giriniz" className="form-control" value={formik.values.password} onChange={formik.handleChange}/>
            {
              formik.errors.password? <h6 className="" style={{color :"darkred"}}><strong>{formik.errors.password}</strong></h6> : ""
            }
          </div>

          <div className="mt-1">
            <label>Email : {user.email}</label>
            <input type="email" name="email" placeholder="örnek@gmail.com" className="form-control" value={formik.values.email} onChange={formik.handleChange}/>
            {
              formik.errors.email? <h6 className="" style={{color :"darkred"}}><strong>{formik.errors.email}</strong></h6> : ""
            }
           </div>

          <div className="btn-group-sm p-2">
            <select className="form-select-sm"  name="role" id="role" value={role} onChange={handleRole}>
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="btn-group-sm p-2">
            <button className="btn btn-primary" type="submit" >Onayla ve Kaydet</button>
            <button className="btn btn-danger" type="button" onClick={()=> setUser((prev)=> {
              return {...prev, state : false}
            })}>Geri Dön</button>
          </div>
        </form>
      </Box>
              </Card>
                    </div>
                    }
                </div>

                <div className="col-lg-6 col-sm-12 col-md-6 p-5">
                    <CategoriesCrud Categories={categories? categories : []}/>
                </div>
                
                <div className="col-lg-6 col-sm-12 col-md-6 p-5 ">
                    <div style={{display: 'flex'}}>
                      {
                        products? <ProductValues products={products}/> : ""
                      }
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6 p-5">
                    <div style={{display: 'flex'}}>
                    <Card style={{backgroundColor: 'lightblue'}}>
              <CardContent>
                <Typography variant="h5" component="div">
                    Kategori Listesi ({categories?.length})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Kategori Listesi Üzerinde İşlemler Gerçekleştirmek İçin Devam Edin...
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/admin/product/${products}`}>
                  Detaylar
                </Button>
              </CardActions>
            </Card>
                    
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}