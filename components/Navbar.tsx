"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="bg-[#28527A] text-white px-4 py-2 relative z-10 h-16">
      <div className="flex justify-between items-center h-full">
        <div className="relative">
          <div className="ml-8 bg-white">
            {pathName !== "/dashboard/secondary-page" ? (
              <Image
                src={"/images/header.png"}
                alt="Logo"
                width={200}
                height={125}
              />
            ) : (
              <Image
                src={"/images/brgy.png"}
                alt="Logo"
                width={200}
                height={125}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
