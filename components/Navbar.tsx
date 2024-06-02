import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#28527A] text-white px-4 py-2 relative z-10 h-16">
      <div className="flex justify-between items-center h-full">
        <div className="relative">
          <div className="ml-8 bg-white">
            <Image
              src={"/images/header.png"}
              alt="Logo"
              width={200}
              height={125}
              /*  className="w-[200px] h-auto" // Adjust as needed */
            />
          </div>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
