import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: "BelezaEstética Premium - Experiência Exclusiva em Estética Avançada",
  description: "Clínica de estética premium especializada em tratamentos exclusivos e personalizados realizados com produtos e tecnologias de ponta para realçar sua beleza natural.",
  keywords: "estética avançada, tratamentos premium, beleza natural, spa de luxo, rejuvenescimento facial, estética corporal, serviços exclusivos",
  openGraph: {
    title: "BelezaEstética Premium - Experiência Exclusiva em Estética",
    description: "Tratamentos estéticos exclusivos com a mais alta qualidade e tecnologia para realçar sua beleza natural.",
    url: "https://belezaestetica.com.br",
    siteName: "BelezaEstética Premium",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${montserrat.variable} ${cormorant.variable}`}>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
