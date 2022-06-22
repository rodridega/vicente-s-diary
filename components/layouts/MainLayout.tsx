import Head from "next/head";
import styles from "./MainLayout.module.css";
import { PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

export const MainLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title || "Diario de Vicente"} </title>
        <meta name="description" content="Diario para Vicente" />
        <meta name="author" content="Rodrigo Degnautti" />
        <meta name="keywords" content="diario, bebe, hitos" />
      </Head>

      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
