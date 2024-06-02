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

export default function page() {
  return (
    <div>
      <Card className="bg-[#28527A]">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="text-white uppercase">
            Information Page
          </CardTitle>
          <CardDescription>About Us</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2">
          <div className="flex flex-row justify-center items-center col-span-1">
            <Image
              src={"/images/team.png"}
              alt="Logo"
              width={500}
              height={250}
            />
          </div>
          <div className="text-white flex flex-col justify-center items-center col-span-1">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h1 className="text-4xl">TEAM MEMBERS</h1>

              <p className="">Calabia, Mackrislan A.</p>
              <p className="">Guevarra, Jonathan A.</p>
              <p className="">Llanes, Mark Gregorie A.</p>
              <p className="">Remorin, Aeron John G.</p>
              <p className="">Reyes, Benjamin M.</p>
            </div>

            <div className="flex flex-col justify-center items-center mt-24">
              <h1 className="text-4xl uppercase">Instructor</h1>
              <p className="mt-2">Mr. Norris Alexis Amora</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
