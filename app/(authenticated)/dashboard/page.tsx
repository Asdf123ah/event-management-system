import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Signout_Button from "@/components/Signout_Button";
import { FaInfoCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

export default function dashboard_page() {
  return (
    <Card className="bg-[#28527A]">
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle className="w-full flex justify-end space-x-2">
          <Link href={"/dashboard/about-team"}>
            <FaInfoCircle className="text-[64px] text-white cursor-pointer mx-4" />
          </Link>
          <Signout_Button />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <div className="flex flex-row justify-center items-center col-span-1">
          <Image
            src={"/images/event.png"}
            alt="Logo"
            width={540}
            height={250}
          />
        </div>
        <div className="text-white flex flex-col justify-start items-start col-span-1">
          <div className="flex flex-col text-left mt-24">
            <h1 className="text-[54px] font-bold">WELCOME,</h1>
            <h1 className="text-[101px] font-bold -mt-10">USERNAME DITO</h1>
            <Button className="w-[377px] h-[65px] bg-white text-black font-bold text-[28px] rounded-[24px] mt-8 mb-4">
              BUY EVENT TICKET
            </Button>
            <Button className="w-[377px] h-[65px] bg-white text-black font-bold text-[28px] rounded-[24px]">
              SEE BRGY M.S.
            </Button>
          </div>

          <div className="flex flex-col items- justify-start space-y-2"></div>
        </div>
      </CardContent>
      <div className="w-[90%] flex text-center justify-center items-center mt-0 px-10 mx-auto mb-4">
        <p className="text-[24px] text-white">
          This online web-based event management system is a digital platform
          that allows users to browse events, select ticket types, make
          payments, and receive electronic tickets. This system provides a
          seamless experience for both event organizers and participants by
          offering these features.
        </p>
      </div>
    </Card>
  );
}
