import { Box, Typography, Card, CardContent, Avatar, Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../services/context/auth';
import { usePostContactMutation } from '../../services/apis/contact';
export const useStyles = {
  root: {
    "flexGrow": "1",
    "padding": '20px',
  },
  card: {
    "maxWidth": "345",
    "margin": '20px auto',
  },
  avatar: {
    "width": "60",
    "height": "60",
    "margin": '10px auto',
  },
  title: {
    "textAlign": 'center',
    "marginBottom": '20px',
  },
  content: {
    "textAlign": 'center',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  textField: {
    marginBottom: '20px',
  },
  button: {
    marginTop: '20px',
  },
};
type messageTo = "John Doe" | "Jane Smith" | "Alice Johnson"
export interface contactInfos {
    name: string,
    email: string,
    message: string,
    messageTo : messageTo
}

export let contatstate : contactInfos = {
    name : "",
    email : "",
    message : "",
    messageTo : 'Jane Smith'
};
export function Contact() {
      const [postContact] = usePostContactMutation();
      const [formValues, setFormValues] = useState(contatstate);
      const [state, setState] = useState(false);
      const {user} = useContext(AuthContext);
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          name : user.name,
          email : user.email,
          [name]: value,
        }));
      };
      useEffect(()=>{
        if(formValues.name !="" && formValues.email != ""){
          postContact(formValues);
        }
      },[state])
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setState((prev)=> prev? false : true);
      };
  return (
    <div className='container-fluid' >
        <div className="row">
        <div className='col-md-12'>
        <Box sx={useStyles.root} >
      <Typography variant="h4" sx={useStyles.title}>
        Hakkımızda
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={useStyles.card}>
            <Avatar
              alt="John Doe"
              src="https://via.placeholder.com/150"
              sx={useStyles.avatar}
            />
            <CardContent sx={useStyles.content}>
              <Typography variant="h5" component="div">
                John Doe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CEO & Kurucu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                John, teknolojiye olan tutkusuyla şirketimizi kurdu. Eğlenceli ve yenilikçi projelerle ekibimizi yönlendiriyor.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={useStyles.card}>
            <Avatar
              alt="Jane Smith"
              src="https://via.placeholder.com/150"
              sx={useStyles.avatar}
            />
            <CardContent sx={useStyles.content}>
              <Typography variant="h5" component="div">
                Jane Smith
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CTO
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jane, İş ortaklığı ve sürdürülebilirliği sağlamak için görev alıyor, bizimle çalışmak isterseniz. Jane'ye ulaşın!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={useStyles.card}>
            <Avatar
              alt="Alice Johnson"
              src="https://via.placeholder.com/150"
              sx={useStyles.avatar}
            />
            <CardContent sx={useStyles.content}>
              <Typography variant="h5" component="div">
                Alice Johnson
              </Typography>
              <Typography variant="body2" color="text.secondary">
                İK
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Alice, işe alım süreçleriyle doğrudan ilgileniyor İnsan Kaynaklarında görev alıyor alım süreçlerine operasyonel yönetiyor.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    <hr />
    <Box sx={useStyles.root}>
      <Typography variant="h4" align="center" gutterBottom>
        İletişim
      </Typography>
      <form style={useStyles.form} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Adınız"
              name="name"
              disabled={true}
              value={user.userName}
              onChange={handleChange}
              sx={useStyles.textField}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="E-posta"
              name="email"
              disabled={true}
              value={user.email}
              sx={useStyles.textField}
              variant="outlined"
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mesajınız"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              sx={useStyles.textField}
              variant="outlined"
              required
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
          <FormControl fullWidth variant="outlined" sx={useStyles.textField}>
              <InputLabel>İletişim Yöntemi</InputLabel>
              <Select
                name="contactMethod"
                value={formValues.messageTo}
                onChange={(e : SelectChangeEvent<messageTo>)=> setFormValues((prev)=>{
                    return {
                        ...prev,
                        messageTo : e.target.value as messageTo
                    }
                })}
                label="İletişim Yöntemi"
              >
                <MenuItem value="Alice Johnson">Alice Johnson</MenuItem>
                <MenuItem value="Jane Smith">Jane Smith</MenuItem>
                <MenuItem value="John Doe">John Doe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              disabled={user.id != "Empty"? false : true}
              fullWidth
              sx={useStyles.button}
            >
              {user.id!="Empty"? "Gönder" : "Önce Giriş Yapınız"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    </div>
        </div>
    </div>
   
  );
}