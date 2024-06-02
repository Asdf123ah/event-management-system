import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-12 h-screen">
          <div className="col-span-6 bg-[#8AC4D0] "></div>
          <div className="col-span-6 bg-[#28527A] "></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              {/* Card content here */}
              {children}
              This is a centered card.  
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
