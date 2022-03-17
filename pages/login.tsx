import { NextPage } from "next";
import { AppProviders } from "next-auth/providers";
import { getProviders } from "next-auth/react";

import { LoginPage } from "../pagesComponents/LoginPage/LoginPage";

// TODO: create separate pages components folder

export interface LoginPageProps {
  providers: AppProviders;
}

const Login: NextPage<LoginPageProps> = ({ providers }) => {
  return <LoginPage providers={providers} />;
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
