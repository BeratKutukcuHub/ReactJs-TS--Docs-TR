import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Container,
    Button,
  } from '@mui/material';
import { useDeleteUserMutation, UserandId } from '../../../../../components/services/apis/user';
import { useEffect, useState } from 'react';
import { userState } from '../all-services';
interface userResponse {
  users : UserandId[];
  handleStates : (val : boolean) => void;
  lenght : (val : number)=> void;
  user : (val : UserandId & userState)=> void;
}
interface initialState {
  state : boolean;
  values : string | null
};
let initialStates : initialState = {
  state : false,
  values : ""
};


export const UserPage = ({users, handleStates, lenght, user}:userResponse) => {
  const [state , setState] = useState(initialStates);
  const [inMemory , setInMemory] = useState(users)
  let [deleted] = useDeleteUserMutation();
  
  useEffect(() => {
    state.values? deleted(state.values): "";
    if(state.values != "" && state.values != null){
      setInMemory((prev)=>{
        return prev.filter((item) => {
          return item.id != state.values
        })
      })
    }
    lenght(inMemory.length);
  }, [state.values, deleted]);
  const deleteHandle = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>,valueses :  string) => {
    event.preventDefault();
      setState((prev)=> {
        return {
          ...prev,
          values : valueses
        }
      })
  }
    return (
        <div style={{textAlign:"center"}}>
          {
            inMemory.length == 0? <>
            <Typography sx={{fontWeight:"bold"}}>Gösterilecek Herhangi Bir veri Bulunamadı</Typography>
            <Button onClick={()=>handleStates(false)}>Geri Dön</Button>
            </>:
            <Container component="main" maxWidth="lg">
          <Typography component="h1" variant="h5" sx={{ textAlign: 'center', marginTop: 4 }}>
          </Typography>
          <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Kullanıcı Adı</TableCell>
                  <TableCell>Rol</TableCell>
                  <TableCell>İşlemler</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                    {
                      inMemory?.map((users, id) => {
                        return (
                          <TableRow key={id}>
                            <TableCell>{users.userName}</TableCell>
                            <TableCell>{users.role}</TableCell>
                            <TableCell >
                                <button className='btn btn-danger' name='delete' onClick={(e)=>deleteHandle(e,users.id)}>Sil</button>
                                <button className='btn btn-warning' name='update' onClick={()=> user({state:true, ...users})}>Güncelle</button>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    }
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{display:"flex",justifyContent:"center"}}>
          <Button onClick={()=>handleStates(false)}>Geri Dön</Button>
          </div>
        </Container>
          }
        </div>
      )
    }