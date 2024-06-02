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
import { FaInfo, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import Signout_Button from "@/components/Signout_Button";

export default function dashboard_page() {
  return (
    <Card className="bg-[#28527A]">
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle className="w-full flex justify-end space-x-2">
          <Link href={"/dashboard/about-team"}>
            <button className="rounded-full text-xl text-[#28527A] bg-white p-2">
              <FaInfo />
            </button>
          </Link>
          <Signout_Button />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <div className="flex flex-row justify-center items-center col-span-1">
          <Image
            src={"/images/event.png"}
            alt="Logo"
            width={500}
            height={250}
          />
        </div>
        <div className="text-white flex flex-col justify-center items-center col-span-1">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 className="text-4xl">WELCOME,</h1>
            <h1 className="text-4xl">USERNAME DITO</h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <Button className="bg-white text-black font-semibold text-lg">
              Buy Event Ticket
            </Button>
            <Button className="bg-white text-black font-semibold text-lg">
              See BRGY M.S.
            </Button>
          </div>

          <div className="flex flex-col justify-center items-center mt-24">
            <p className="mt-2">
              This online web-based event management system is a digital
              platform that allows users to browse events, select ticket types,
              make payments, and receive electronic tickets. This system
              provides a seamless experience for both event organizers and
              participants by offering these features.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
