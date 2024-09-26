'use server'

import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schemas/LoginSchema";
import { z } from "zod";
import bcryptjs from 'bcryptjs'
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async (valuesLogin : z.infer<typeof LoginSchema>) => {

    const validateValues = LoginSchema.safeParse(valuesLogin);

    if(!validateValues.success){
        return {error : 'Valores invalidos'}
    }

    const {email, password} = validateValues.data

    const existingUser = await getUserByEmail(email);

    if(!existingUser || !existingUser.email || !existingUser.password){
        return {error : 'No existe el email!'}
    }

    const passwordMatch = await bcryptjs.compare(password, existingUser.password);

    if(!passwordMatch){
        return {error : 'La contraseña es incorrecta.'}
    }

    if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(existingUser.email)
        await sendVerificationEmail(verificationToken.email, verificationToken.token)
        return {advertisement : "Se te ha enviado un correo de confirmación a tu bandeja."}
    }


    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo : DEFAULT_LOGIN_REDIRECT,
        })


    } catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case 'CredentialsSignin' :
                    return {error : 'Datos incorrectos.'}
                default :
                    return {error : 'Algo fue mal, contacta con nosotros.'}
                }
        }

        throw error;
    }

    return {success : 'Logueo exitoso!'}


}