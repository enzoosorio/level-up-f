import { poppins } from "@/utils/fonts";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="mt-8 xl:max-w-[1200px] mx-auto relative">
      <div
        className={`relative cardRegister flex flex-col items-center gap-4 bg-primary-ice-color max-w-96 mx-auto p-3 rounded-lg ${poppins.className} py-20 `}
      >
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-8xl font-bold text-primary-bue mt-2">404</h3>
          <small className="text-xl text-gray-500 font-bold mb-2">
            PAGINA NO ENCONTRADA
          </small>
        </div>
        <Link
          href={"/"}
          className="text-md mx-auto text-center w-max underline decoration-dotted mt-1 "
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
