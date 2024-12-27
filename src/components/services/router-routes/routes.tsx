import { Navigate, Route,Routes } from 'react-router-dom';
import HomePage from '../../site-components/pages/home';
import { IndexLayout } from '../../site-components/layout';
import { AdminAllServices } from '../../../areas/admin/compenents/admin-components/all-services';
import SignUp from '../../site-components/sign/signup';
import { Login } from '../../site-components/sign/login';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth';
import { Contact } from '../../site-components/contact/contact';
import { FAQ } from '../../site-components/faq/faq';
import { CategoryDescription, CategoryProduct } from '../../site-components/pages/categoryforpage';
import { CategoryProvider } from '../context/categorycontext';
import { FormDataInputs } from '../../../form-data';


export function RouterMain() {
   const {user} = useContext(AuthContext);
   const [category , setCategory] = useState(CategoryDescription.All);
   const [state , setState] = useState(false)
   const handleCategory = (state : CategoryDescription):void => {
        setCategory(state);
   }
   useEffect(()=>{
    if(category != CategoryDescription.All){
        setState(true);
    }
   },[category])
    return (
        <Routes>
        <Route path="/" element={
            <IndexLayout>
                <CategoryProvider>
                    <HomePage category={handleCategory}/>
                </CategoryProvider>
            </IndexLayout>
        } />
        <Route path="/signup" element={user.id == "Empty"? <IndexLayout><SignUp/></IndexLayout> : <Navigate to="/"/>}/> 
        <Route path="/login" element={user.id == "Empty"?<IndexLayout><Login/></IndexLayout>:<Navigate to="/"/>} />
        <Route path="/admin" element={user.role != "admin"?<IndexLayout><AdminAllServices/></IndexLayout> : <Navigate to="*" />} />
        <Route path="/contact" element={<IndexLayout><Contact/></IndexLayout>}/>
        <Route path="/faq" element={<IndexLayout><FAQ/></IndexLayout>}/>
        <Route path="/market" element={state? <IndexLayout><CategoryProduct sendDataToParent={category}/></IndexLayout> : 
        <IndexLayout><CategoryProduct sendDataToParent={CategoryDescription.All}/></IndexLayout>}/>
        <Route path="/data" element={<FormDataInputs/>}/>
        </Routes>
        
    );
};
