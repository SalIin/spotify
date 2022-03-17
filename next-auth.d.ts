import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

type User = Omit<JWT, "accessTokenExpires">;

declare module "next-auth/jwt" {
  interface JWT {
    accessTokenExpires?: number;
    accessToken?: string;
    refreshToken?: string;
    username?: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
