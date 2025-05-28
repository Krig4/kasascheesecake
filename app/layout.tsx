
import "../styles/globals.css";
import { ReactNode } from "react";
import ClientLayout from "@/components/ClientLayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Kasas Cheesecake",
  description: "Tartas caseras con amor",
  metadataBase: new URL("https://www.kasascheesecake.com"),
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Kasas Cheesecake",
    description: "Descubre nuestras tartas caseras artesanas",
    url: "https://www.kasascheesecake.com",
    siteName: "Kasas Cheesecake",
    images: [
      {
        url: "/img/compartir.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasas Cheesecake",
    description: "Las mejores tartas caseras en Alcalá de Henares",
    images: ["/img/compartir.jpeg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="pt-20 bg-[#f8f1e1] text-[#3b3b3b] font-sans min-h-screen">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
