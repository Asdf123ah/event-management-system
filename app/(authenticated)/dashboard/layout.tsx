import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="py-8">
          <Navbar />
          <div className="p-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
