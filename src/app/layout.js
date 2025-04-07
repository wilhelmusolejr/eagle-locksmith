import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify the font weights you need
  variable: "--font-poppins", // Custom CSS variable
});

export const metadata = {
  title: "Secure Your Home & Business | Eagle Locksmith",
  description:
    "Eagle Locksmith provides fast, professional, and reliable locksmith services for homes, businesses, and vehicles in Washington D.C., Maryland, and Northern Virginia. Your security is our top priority.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
