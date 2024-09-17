import type { Metadata } from "next";
import "./globals.css";
import {font_main} from './fonts';
import Layout from './componentes/layout_nav'

export const metadata: Metadata = {
  title: "Eric Portfolio",
  description: "Portafolio de Eric",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${font_main.className}`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
