import type { Metadata } from "next";
import Link from 'next/link';

// Importar estilos CSS
import './layout.css';

export const metadata: Metadata = {
  title: "Eric Portfolio",
  description: "Portafolio de Eric",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
<header>
  <nav>
    <div className="navbar-container">
      <div className="brand"><p className="esc">Portafolio de Eric &lt;/&gt;</p></div>
      <div className="links">
        <Link href="/presentacion">Presentación</Link>
        <Link href="/proyectos">Proyectos</Link>
        <Link href="/contactos">Contacto</Link>
      </div>
    </div>
  </nav>
</header>
      {children}
    </>
  );
}
