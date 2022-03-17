import Head from "next/head";
import type { NextPage } from "next";

import Sidebar from "../components/Sidebar";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  // const session = useSession();
  // console.log(session);

  return (
    <>
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <main>
        <Sidebar />
        <section>{/* Main */}</section>
      </main>
      <div>{/* Player */}</div>
    </>
  );
};

export default Home;
