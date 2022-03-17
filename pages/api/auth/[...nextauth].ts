import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { JWT } from "next-auth/jwt";

import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

const refreshAccessToken = async (token: JWT) => {
  try {
    if (!token.accessToken) {
      throw Error("Missing access token");
    }

    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.accessToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log("REFRESHED TOKEN IS", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
};

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: <string>process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: <string>process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }): Promise<JWT> {
      console.log("JWT CALLBACK");

      // Initial sign in
      if (account && user) {
        console.log("INITIAL SIGN IN");

        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at
            ? account.expires_at * 1000
            : 0,
        };
      }

      // Return previous token if the access token has not expired yet
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        console.log("VALID ACCESS TOKEN");
        return token;
      }

      // Access token has expired, try to update it
      console.log("STALE ACCESS TOKEN");
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
});
