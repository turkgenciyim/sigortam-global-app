import "./globals.css";
import { DM_Sans, Lato } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmSans" });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`bg-white ${dmSans.className} ${dmSans.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
