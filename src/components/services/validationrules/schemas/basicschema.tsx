import * as Yup from "yup";

export const basicSchema = Yup.object().shape({
    name : Yup.string().required("Name is required").min(5).max(10),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required").min(6).max(12), 
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
    userName : Yup.string().min(3, "3 Haneden Kısa Olamaz.").max(10,"10 Haneden Fazla Olamaz").required("Boş Geçilemez"),
})