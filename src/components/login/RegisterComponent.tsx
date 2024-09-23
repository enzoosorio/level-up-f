'use client'

import React, { useState, useTransition } from 'react'
import { LoginRegisterCard } from './CardLogin'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { RegisterSchema } from '@/schemas/RegisterSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormError } from '../messages/form-error'
import { FormSuccess } from '../messages/form-success'
import { registerUser } from '@/actions/register'

export const RegisterComponent = () => {

    const {register, handleSubmit, formState : {errors}} = useForm<z.infer<typeof RegisterSchema>>({
        resolver : zodResolver(RegisterSchema),
        defaultValues : { 
            username : '',
            email : '',
            password : '',
            repeatPassword : ''
        }
    })

    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string>();
    const [success, setSuccess] = useState<string>();

    const onsubmit = (data : z.infer<typeof RegisterSchema>) => { 
        setError("");
        setSuccess("");
    
        startTransition(() => {
          registerUser(data).then((data) => {
            setError(data?.error);
            setSuccess(data?.success);
          });
        });
    }

    const ID_FORM = 'registerForm'

  return (
    <LoginRegisterCard
    title = {'Registrarse'}
    subtitle='¡Registrarte e interactúa en nuestra página!'
    messageGoogle='Registrate con'
    titleButton='Registrarse'
    changeMessage='¿Ya tienes una cuenta registrada? Inicia sesión'
    changeURL='/login'
    idForm={ID_FORM}
    isPending={isPending}
    >
        <form 
        id={ID_FORM}
        onSubmit={handleSubmit(onsubmit)}
        className='flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center gap-4'>
                <label htmlFor='nameUser'>Nombre de usuario</label>
                <input type='text' id='nameUser' {...register('username')}  name='username' placeholder='juan09'/>
                {errors && errors.username && <FormError message={errors?.username.message} />}
            </div>
            <div className='flex flex-col items-center gap-4 '>
                <label htmlFor='emailUser'>Correo electrónico</label>
                <input type='email' id='emailUser' {...register('email')} name='email' placeholder='juanperez123@gmail.com'/>
                {errors && errors.email && <FormError message={errors?.email.message} />}
            </div>
            <div className='flex flex-col items-center gap-4 '>
                <label htmlFor='passwordUser'>Contraseña</label>
                <input type='password' id='passwordUser' {...register('password')} name='password' placeholder='******'/>
                {errors && errors.password && <FormError message={errors?.password.message} />}
            </div>
            <div className='flex flex-col items-center gap-4 '>
                <label htmlFor='repeatPasswordUser'>Repetir contraseña</label>
                <input type='password' id='repeatPasswordUser' {...register('repeatPassword')} name='repeatPassword' placeholder='******'/>
                {errors && errors.repeatPassword && <FormError message={errors?.repeatPassword.message} />}
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
        </form>
        <FormError message={error} />
        <FormSuccess message={success} />
    </LoginRegisterCard>
  )
}
