import React from "react";
import { signIn } from "next-auth/react";

import Button from "../../components/Button";

import { LoginPageProps } from "../../pages/login";

import SpotifyLogo from "../../public/assets/logos/spotify-logo.svg";

import styles from "./LoginPage.module.scss";

export const LoginPage: React.FC<LoginPageProps> = ({ providers }) => {
  const handleSignIn = (id: string) => signIn(id, { callbackUrl: "/" });

  return (
    <main className={styles.MainPage}>
      {Object.values(providers).map(({ id }) => (
        <Button
          key={id}
          icon={<SpotifyLogo />}
          onClick={() => handleSignIn(id)}
        />
      ))}
    </main>
  );
};
