
import {z} from 'zod'

export const LoginSchema = z.object({
    email : z.string({
        message : 'Cadena de carácteres esperado.'
    }).email({
        message : 'Correo electrónico inválido'
    }),
    password : z.string({
        message : 'Contraseña inválida'
    }).min(1, {
        message : 'La contraseña es requerida'
    })
})