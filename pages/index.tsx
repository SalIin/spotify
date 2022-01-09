import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
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
