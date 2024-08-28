import { Inter } from "next/font/google";
import "../styles/main.scss";
import Providers from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loksell",
  description: "Loksell is b2b platform for restaurants",
  manifest:"/manifest.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
