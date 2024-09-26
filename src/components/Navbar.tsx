import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { Session } from "next-auth";
import { ButtonToggleHomeOpen } from "./partOfComponents/navbar/buttonToggleHomeOpen";
import { SignOutDropdownUser } from "./partOfComponents/navbar/signOutDropdownUser";
import { poppins } from "@/utils/fonts";

interface NavbarProps{
  session? : Session | null
}

export const Navbar = ({session} : NavbarProps) => {


  return (
    <nav className="relative flex flex-col gap-4 items-center justify-center w-11/12 mx-auto mt-10 text-white xl:max-w-[1200px]">
      <ul className="bg-primary-orange hidden md:flex flex-row items-center gap-10 p-2 text-center text-pretty rounded-lg">
        <li className="text-sm">
          <Link
            className="cursor-pointer hover:font-bold transition-all font-onest"
            href="/products"
          >
            TODOS LOS PRODUCTOS
          </Link>
        </li>
        <li className="text-sm">
          <Link
            className="cursor-pointer hover:font-bold transition-all font-buenard"
            href="#"
          >
            OFERTAS
          </Link>
        </li>
        <li className="text-sm">
          <Link
            className="cursor-pointer hover:font-bold transition-all"
            href="#"
          >
            PUBLICAR PRODUCTOS
          </Link>
        </li>
      </ul>
      <button className="relative group/buttonCart hidden md:block bg-primary-orange w-max rounded-full p-3">
        <svg
          width="28"
          height="20"
          viewBox="0 0 42 34"
          className="group-hover/buttonCart:scale-110 transition-all fill-gray-900 group-hover/buttonCart:stroke-white group-hover/buttonCart:stroke-2"
        >
          <path
            d="M12.6667 25.3333C11.8426 25.3333 11.037 25.5776 10.3518 26.0355C9.66659 26.4933 9.13254 27.144 8.81717 27.9054C8.50181 28.6668 8.41929 29.5045 8.58006 30.3128C8.74083 31.121 9.13767 31.8635 9.72039 32.4462C10.3031 33.0289 11.0455 33.4258 11.8538 33.5865C12.662 33.7473 13.4998 33.6648 14.2612 33.3494C15.0225 33.0341 15.6733 32.5 16.1311 31.8148C16.589 31.1296 16.8333 30.324 16.8333 29.4999C16.8322 28.3952 16.3929 27.336 15.6117 26.5549C14.8306 25.7737 13.7714 25.3344 12.6667 25.3333ZM12.6667 31.5833C12.2546 31.5833 11.8518 31.4611 11.5092 31.2321C11.1666 31.0032 10.8996 30.6779 10.7419 30.2972C10.5842 29.9165 10.543 29.4976 10.6234 29.0935C10.7038 28.6894 10.9022 28.3181 11.1935 28.0268C11.4849 27.7354 11.8561 27.537 12.2602 27.4566C12.6644 27.3762 13.0832 27.4175 13.4639 27.5752C13.8446 27.7329 14.17 27.9999 14.3989 28.3425C14.6278 28.6851 14.75 29.0879 14.75 29.4999C14.7493 30.0522 14.5296 30.5817 14.139 30.9723C13.7485 31.3628 13.219 31.5825 12.6667 31.5833Z"
            fill="white"
          />
          <path
            d="M33.4999 25.3333C32.6758 25.3333 31.8702 25.5776 31.185 26.0355C30.4998 26.4933 29.9658 27.144 29.6504 27.9054C29.3351 28.6668 29.2525 29.5045 29.4133 30.3128C29.5741 31.121 29.9709 31.8635 30.5536 32.4462C31.1364 33.0289 31.8788 33.4258 32.687 33.5865C33.4953 33.7473 34.3331 33.6648 35.0944 33.3494C35.8558 33.0341 36.5065 32.5 36.9644 31.8148C37.4222 31.1296 37.6666 30.324 37.6666 29.4999C37.6655 28.3952 37.2261 27.336 36.445 26.5549C35.6638 25.7737 34.6047 25.3344 33.4999 25.3333ZM33.4999 31.5833C33.0879 31.5833 32.6851 31.4611 32.3425 31.2321C31.9999 31.0032 31.7329 30.6779 31.5752 30.2972C31.4175 29.9165 31.3762 29.4976 31.4566 29.0935C31.537 28.6894 31.7354 28.3181 32.0268 28.0268C32.3181 27.7354 32.6894 27.537 33.0935 27.4566C33.4976 27.3762 33.9165 27.4175 34.2972 27.5752C34.6779 27.7329 35.0032 27.9999 35.2322 28.3425C35.4611 28.6851 35.5833 29.0879 35.5833 29.4999C35.5825 30.0522 35.3628 30.5817 34.9723 30.9723C34.5817 31.3628 34.0522 31.5825 33.4999 31.5833Z"
            fill="white"
          />
          <path
            d="M41.3135 6.11638L40.1558 16.533C40.0153 17.8074 39.4092 18.9851 38.4539 19.8402C37.4986 20.6953 36.2612 21.1676 34.9791 21.1666H13.7083C12.3275 21.1649 11.0037 20.6157 10.0273 19.6393C9.05088 18.6629 8.50161 17.3391 8.49996 15.9583V5.54158C8.49902 4.71307 8.16948 3.91876 7.58363 3.33291C6.99778 2.74706 6.20347 2.41752 5.37496 2.41659H1.20829C0.932025 2.41659 0.667074 2.30684 0.471723 2.11149C0.276373 1.91614 0.166626 1.65119 0.166626 1.37492C0.166626 1.09865 0.276373 0.8337 0.471723 0.638349C0.667074 0.442999 0.932025 0.333252 1.20829 0.333252H5.37496C6.75579 0.334906 8.07959 0.884171 9.05598 1.86056C10.0324 2.83696 10.5816 4.16076 10.5833 5.54158V15.9583C10.5842 16.7868 10.9138 17.5811 11.4996 18.1669C12.0855 18.7528 12.8798 19.0823 13.7083 19.0833H34.9791C35.7484 19.0838 36.4907 18.8004 37.0639 18.2873C37.637 17.7742 38.0005 17.0676 38.0848 16.303L39.2422 5.88638C39.2905 5.44961 39.2463 5.00758 39.1124 4.58905C38.9785 4.17052 38.758 3.78487 38.4652 3.45721C38.1736 3.12789 37.815 2.86469 37.4134 2.68522C37.0118 2.50575 36.5765 2.41416 36.1366 2.41659H17.875C17.5987 2.41659 17.3337 2.30684 17.1384 2.11149C16.943 1.91614 16.8333 1.65119 16.8333 1.37492C16.8333 1.09865 16.943 0.8337 17.1384 0.638349C17.3337 0.442999 17.5987 0.333252 17.875 0.333252H36.1366C36.869 0.333464 37.5932 0.488098 38.2618 0.787064C38.9304 1.08603 39.5285 1.52261 40.017 2.06832C40.5055 2.61403 40.8734 3.2566 41.0968 3.95411C41.3202 4.65163 41.3941 5.38841 41.3135 6.11638Z"
            fill="white"
          />
        </svg>
        <span className="group-hover/buttonCart:font-bold absolute top-[70%] right-0 text-primary-orange rounded-xl transition-colors">
          0
        </span>
      </button>
      {/* HOME FOR MOBILE */}
      <>
        <ButtonToggleHomeOpen session={session} />
      </>
      {session && session?.user  ? 
      <div className={` relative md:absolute md:top-0 md:right-10 `}>
        <DropdownMenu>
        <DropdownMenuTrigger>
        <div
        className={` bg-primary-orange block md:absolute md:top-0 md:right-10 w-max p-2 rounded-lg logoutButton outline-none `}>
          {/* SVG USER LOGGED IN CAT*/} 
          <svg width="24" height="24" viewBox="0 0 16 16" className="fill-slate-100 svgLogoutButton"><path  d="M14.7 5.34c.13-.32.55-1.59-.13-3.31c0 0-1.05-.33-3.44 1.3c-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3c-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69C0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35c0-.76.38-1.48 1.02-2.07c1.07-.98 2.9-.46 4.96-.46c2.07 0 3.88-.52 4.96.46c.65.59 1.02 1.3 1.02 2.07c0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z" /></svg>

        </div> 
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute  md:top-4 left-[-95px] md:left-[-230px] bg-primary-orange w-48" >
          <DropdownMenuLabel className="text-white whitespace-nowrap text-ellipsis overflow-x-hidden">{session.user.name ? `Hola, ${session.user.name}!` : `Mi cuenta`}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="text-white">
            <DropdownMenuItem>Tu perfil</DropdownMenuItem>
            <DropdownMenuItem>Compras</DropdownMenuItem>
            <DropdownMenuItem>Lista de favoritos</DropdownMenuItem>
            
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-white font-bold group/itemLogout">
            <SignOutDropdownUser/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    : 
      <Link 
      href={'/login'}
      className="bg-primary-orange hidden md:block absolute top-0 right-10 w-max p-2 rounded-lg linkToLogin  ">
        {/* SVG USER WITHOUT LOGIN */}
        <svg width="24" height="24" viewBox="0 0 24 24" className="svgLinkToLogin">
          <path
            fill="#FFFFFF"
            d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z"
          />
        </svg>
      </Link>}
      <Link
        href="/"
        className={`text-primary-blue text-5xl w-max mx-auto text-primary-bue hover:scale-105 transition-transform mt-2 nikeFontForTitleCard`}
      >
        LEVEL UP
      </Link>

    </nav>
  );
};
