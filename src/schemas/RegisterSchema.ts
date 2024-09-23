import * as z from 'zod';



export const RegisterSchema = z.object({
    username : z.string().min(3 , {
        message : 'Minimo de caracteres : 3.'
    }),
    email : z.string().email({
        message : 'Debes ingresar un email válido'
    }),
    password: z.string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    repeatPassword: z.string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
}).refine(data => data.password === data.repeatPassword, {
    path: ['repeatPassword'],
    message: 'Las contraseñas deben ser iguales'
});