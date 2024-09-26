import {v4 as uuidv4} from 'uuid'
import { db } from './db'
import { getVerificationTokenByEmail } from '@/data/verification-token'


export const generateVerificationToken = async (email: string) => {
    
    const token = uuidv4()
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    
    const existingToken = await getVerificationTokenByEmail(email);

    if(existingToken){
        await db.verificationToken.delete({
            where : {
                id : existingToken.id
            }
        })
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            email: email,
            token: token,
            expires: expires
        }
    })

    return verificationToken;
}