import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className={'title'}>Bienvenido al Diario de Vicente!</h1>
      <Link href="/login">
        <a>Iniciar Sesión</a>
      </Link>
    </MainLayout>
  );
}
