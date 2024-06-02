import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function page() {
  return (
    <div>
      <Card className="bg-[#28527A]">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle className="uppercase">Information Page</CardTitle>
          <CardDescription>About Us</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2">
          <div className="flex flex-row justify-center items-center col-span-1">
            Image Here
          </div>
          <div className="flex flex-col justify-center items-center col-span-1">
            <p className="uppercase">Team Members</p>
            <p className="">Calabia, Mackrislan A.</p>
            <p className="">Guevarra, Jonathan A.</p>
            <p className="">Llanes, Mark Gregorie A.</p>
            <p className="">Remorin, Aeron John G.</p>
            <p className="">Reyes, Benjamin M.</p>

            <div className="flex flex-col justify-center items-center mt-24">
              <p className="uppercase">Instructor</p>
              <p className="">Mr. Norris Alexis Amora</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
