import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <Card className="bg-[#28527A]">
      <CardContent className="grid grid-cols-2">
        <div className="flex flex-row justify-center items-center col-span-1">
          Table 1
        </div>
        <div className="flex flex-row justify-center items-center col-span-1">
          Table 2
        </div>
      
      </CardContent>
    </Card>
  );
}
