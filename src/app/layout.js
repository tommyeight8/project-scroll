import "./globals.css";

import Menu from "@/components/menu/Menu";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: "NextJS x GSAP Responsive Navigation",
  description: "by Codegrid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
