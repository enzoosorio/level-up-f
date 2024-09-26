import { LoginRegisterCard } from "@/components/login/CardLogin";


export default function ErrorPage() {
  return (
    <main className="mt-8 xl:max-w-[1200px] mx-auto relative">
    <LoginRegisterCard
      title={"Error"}
      subtitle={"Al parecer hubo un error al momento de loguearte"}
      changeMessage={"Regresar al login"}
      changeURL="/login"
    >
      <p className="mt-5 text-lg text-center">
        Intenta contactar con nosotros para ayudarte!
      </p>
    </LoginRegisterCard>
    </main>
  );
}