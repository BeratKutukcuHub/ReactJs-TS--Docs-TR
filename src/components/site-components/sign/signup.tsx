import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useFormik } from 'formik';
import { useGetUsersQuery, usePostUserMutation } from '../../services/apis/user';
import { basicSchema } from '../../services/validationrules/schemas/basicschema';

const SignUp: React.FC = () => {
    const {data} = useGetUsersQuery();
    const [postUser] = usePostUserMutation();

    const formik = useFormik({
        initialValues: {
            name : "",
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema : basicSchema,
        onSubmit : (values)=> {
            postUser({name: "", email: values.email, password: values.password,age :0,role:"member",userName:values.name});
            formik.setValues({
                name : "",
                email : "",
                password : "",
                confirmPassword : ""
            });
            formik.setErrors({name:"",email:"",password:"",confirmPassword:""});
        },
        validate : (values) => {
            const errors: { [key: string]: string } = {}
            if (data?.find((user) => user.email === values.email)) {
              errors.email = 'Bu email zaten kullanılıyor'
            }
            if (data?.find((user) => user.name === values.name)) {
              errors.name = 'Bu kullanıcı adı zaten kullanılıyor'
            }
            return errors
        },
        
    })
    

    return (
        <Container component="main" maxWidth="lg" >
            <Box 
                sx={{
                    width: '100%',height: '78vh',
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                }}
            >
                <Typography component="h1" variant="h5" sx={{textAlign: 'center'}}>
                    Kayıt Ol ve Gelecek Ürün ve Haberlerden Haberdar Ol!
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1, width:"500px" }}>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Kullanıcı Adınızı Giriniz"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    <Typography color='error'>{formik.errors.name}</Typography>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email : merhaba@gmail.com"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <Typography color='error'>{formik.errors.email}</Typography>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Şifre Giriniz"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <Typography color='error'>{formik.errors.password}</Typography>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Şifre Tekrar Giriniz"
                        type="password"
                        id="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                    />
                    <Typography color='error'>{formik.errors.confirmPassword}</Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;