import { TypeUser } from "@prisma/client";
import {type DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession['user'] & {
    role : TypeUser
}

declare module "next-auth" {
    interface Session{
        user : ExtendedUser;
    }

}