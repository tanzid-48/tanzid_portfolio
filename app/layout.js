import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Tanzid Mondol — Full Stack Developer",
  description: "Full Stack Developer specializing in MERN Stack, Next.js, Flutter, and Java.",
  icons: {
  icon: "/favicon.svg",
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${space.variable} ${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
