import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agência de design digital",
  description: "Projeto DevMedia: Missão 28",
  keywords: "Agência, design, digital, DevMedia",
  author: "Robson Lima Jr"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
