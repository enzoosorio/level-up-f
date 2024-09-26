import { db } from "@/lib/db"


export const getVerificationTokenByEmail = async (email: string) => {
    try {
        
        const token = await db.verificationToken.findFirst({
            where: {
                email: email
            }
        })

        return token;

    } catch (error) {
        console.log(error)
    }
}

export const getVerificationTokenByToken = async (token: string) => {
    try {
        
        const verifiedToken = await db.verificationToken.findUnique({
            where: {
                token: token
            }
        })

        return verifiedToken;

    } catch (error) {
        console.log(error)
    }
}