import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendVerificationEmail = async(email : string, token : string ) => {

     const confirmLink = `${domain}/new-verification?token=${token}`

     await resend.emails.send({
        from : 'onboarding@resend.dev',
        to : email,
        subject : 'Confirma tu correo para poder acceder a nuestra web!',
        html : `
        <div>
        <h3>Verifica tu email para poder comprar en nuestra web!</h3>
        <p>Click <a href="${confirmLink}">aquí</a> para poder confirmar tu correo electrónico</p>
        </div>`
     })
}