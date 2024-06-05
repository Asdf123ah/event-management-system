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
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Card className="bg-[#28527A]">
        <div className="absolute mt-4 ml-8">
          <Link href="/dashboard">
            <IoArrowBackCircleSharp className="absolute text-[80px] text-[#ffffff] cursor-pointer text-start" />
          </Link>
        </div>
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="text-white text-[51px] font-bold uppercase">
            Information Page
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2">
          <div className="flex flex-row justify-center items-center col-span-1">
            <Image
              src={"/images/team.png"}
              alt="Logo"
              width={700}
              height={250}
              className="flex justify-center items-center"
            />
          </div>
          <div className="text-white flex flex-col justify-center items-center col-span-1">
            <div className="flex flex-col items-center justify-center space-y-0 mt-24">
              <h1 className="text-[41px] font-bold">TEAM MEMBERS</h1>
              <p className="text-[30px]">Calabia, Mackrislan A.</p>
              <p className="text-[30px]">Guevarra, Jonathan A.</p>
              <p className="text-[30px]">Llanes, Mark Gregorie A.</p>
              <p className="text-[30px]">Remorin, Aeron John G.</p>
              <p className="text-[30px]">Reyes, Benjamin M.</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-24 mb-12">
              <h1 className="text-[41px] font-bold">INSTRUCTOR</h1>
              <p className="text-[30px]">Mr. Norris Alexis Amora</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
