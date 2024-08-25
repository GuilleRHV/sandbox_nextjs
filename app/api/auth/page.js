import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: "hola",
      clientSecret: "ee",
    }),
  ],
  secret: "ee",  // Para mayor seguridad
};

export default NextAuth(authOptions);
