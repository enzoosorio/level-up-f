'use server'
import { RegisterSchema } from '@/schemas/RegisterSchema';
import * as z from 'zod'
import bcryptjs from 'bcryptjs';
import { db } from '@/lib/db';
import { getUserByEmail } from '../data/user';


export const registerUser = async(valuesRegister : z.infer<typeof RegisterSchema>) => {
    const validateValuesRegister = RegisterSchema.safeParse(valuesRegister);

    if(!validateValuesRegister.success){
        return {error : 'Valores invalidos'}
    }

    const {email, username, password} = validateValuesRegister.data
    const hashedPassword = await bcryptjs.hash(password, 10)

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return {error : 'Email ya existe! inicia sesión'}
    }

    await db.user.create({
        data: { 
            name : username,
            email : email,
            password : hashedPassword
        }
    });

    // const verificationToken = await generateVerificationToken(email);
    // await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return {success : 'Cuenta creada!'}
}