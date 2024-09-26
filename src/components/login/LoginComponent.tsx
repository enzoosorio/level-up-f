"use client";

import React, { useState, useTransition } from "react";
import { LoginRegisterCard } from "./CardLogin";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../messages/form-error";
import { login } from "@/actions/login";
import { FormSuccess } from "../messages/form-success";
import { useSearchParams } from "next/navigation";
import { FormAdvertisement } from "../messages/form-advertisement";
import Link from "next/link";

export const LoginComponent = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const [advertisement, setAdvertisement] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "El email esta vinculado a otro proveedor!"
      : "";

  const ID_FORM = "loginForm";

  const onsubmit = (data: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    setAdvertisement("");

    startTransition(() => {
      login(data).then((data) => {
        console.log(data);
        setError(data?.error);
        setSuccess(data?.success);
        setAdvertisement(data?.advertisement);
      });
    });
  };

  const message = `Hola! Olvidé mi contraseña, ¿puedes ayudarme?`;

  return (
    <LoginRegisterCard
      title={"Iniciar Sesión"}
      subtitle="¡Inicia sesión para poder comprar productos!"
      messageGoogle="Inicia sesión con"
      titleButton="Iniciar sesión"
      changeMessage="¿No tienes una cuenta aún? Regístrate"
      changeURL="/register"
      idForm={ID_FORM}
      isPending={isPending}
    >
      <form
        id={ID_FORM}
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col items-center gap-6"
      >
        <div className="flex flex-col items-center gap-4 ">
          <label htmlFor="emailUser">Correo electrónico</label>
          <input
            type="email"
            id="emailUser"
            {...register("email")}
            name="email"
            placeholder="juanperez123@gmail.com"
          />
          {errors && errors.email && (
            <FormError message={errors?.email.message} />
          )}
        </div>
        <div className="flex flex-col items-center gap-4 ">
          <label htmlFor="passwordUser">Contraseña</label>
          <input
            type="password"
            id="passwordUser"
            {...register("password")}
            name="password"
            placeholder="********"
          />
          {errors && errors.password && (
            <FormError message={errors?.password.message} />
          )}
        </div>
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
        <FormAdvertisement message={advertisement} />
      </form>
      <small className="w-full text-center mx-auto text-xs flex flex-row items-center gap-2">
       <span> ¿Olvidaste tú contraseña?</span>
        <Link
          target="_blank"
          href={`https://wa.me/+51950306310?text=${encodeURIComponent(
            message
          )}`}
          className={`font-bold border-b-2 border-primary-bue border-dotted text-primary-bue`}
        >
          <span>Ponte en contacto con nosotros</span>
        </Link>
      </small>
    </LoginRegisterCard>
  );
};
