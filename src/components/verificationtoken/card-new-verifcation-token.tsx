"use client";

import { LoginRegisterCard } from '../login/CardLogin';
import {FidgetSpinner} from 'react-loader-spinner'
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from '@/actions/new-verification';
import { FormError } from '../messages/form-error';
import { FormSuccess } from '../messages/form-success';
import Link from 'next/link';
import { poppins } from '@/utils/fonts';

export const NewVerificationTokenCard = () => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const params = useSearchParams();
  const token = params.get("token");

  const onTokenSubmit = useCallback(() => {
    if (!token) {
      setError("El token no existe!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      })
      .catch(() => {
        setError("Algo fue mal");
      });
  }, [token]);

  useEffect(() => {
    onTokenSubmit();
  }, []);

  return (
    <div className={`relative cardRegister flex flex-col items-center gap-4 bg-primary-ice-color max-w-96 mx-auto p-3 rounded-lg ${poppins.className} pb-6  pt-4 `}>
    <div className='flex flex-col items-center gap-4'>
        <h3 className='text-3xl font-bold text-primary-bue mt-2 text-center'>Verificación de correo electrónico</h3>
    </div>
    <div
        className={`${
          !error && !success ? "mt-5" : ""
        } flex flex-col items-center w-full justify-center bg-primary-ice-color my-6`}
      >
        {!error && !success && 
        <FidgetSpinner 
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        backgroundColor='#326299'
        ballColors={["#CEE9ED", "#CEE9ED", "#CEE9ED"]} />}
        <FormError message={error} />
        <FormSuccess message={success} />
      </div>
    <Link href={'/'} className='text-sm mx-auto text-center w-max underline decoration-dotted mt-1 '>"Volver al inicio"</Link>
    </div>
    // <LoginRegisterCard
    //   title={"Verificación de correo electrónico"}
    //   subtitle='¡Verifica tu correo electrónico para poder comprar productos!'
    //   changeMessage={"Volver al inicio"}
    //   changeURL={"/"}
    // >
    //   <div
    //     className={`${
    //       !error && !success ? "mt-5" : ""
    //     } flex flex-col items-center w-full justify-center bg-primary-ice-color`}
    //   >
    //     {!error && !success && 
    //     <FidgetSpinner 

    //     visible={true}
    //     height="80"
    //     width="80"
    //     ariaLabel="fidget-spinner-loading"
    //     backgroundColor='#326299'
    //     ballColors={["#CEE9ED", "#CEE9ED", "#CEE9ED"]} />}
    //     <FormError message={error} />
    //     <FormSuccess message={success} />
    //   </div>
    // </LoginRegisterCard>
  );
};