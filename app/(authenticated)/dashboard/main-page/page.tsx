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
import { Payment, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      event: "Event 1",
      venue: "Venue 1",
      date: "06/02/2024",
      time: "12:00pm",
      price: "1,000",
    },
    {
      event: "Event 2",
      venue: "Venue 2",
      date: "06/03/2024",
      time: "12:00pm",
      price: "1,100",
    },
    {
      event: "Event 3",
      venue: "Venue 3",
      date: "06/04/2024",
      time: "12:00pm",
      price: "1,200",
    },
    // ...
  ];
}

export default async function page() {
  const data = await getData();

  return (
    <Card className="bg-[#28527A]">
      <CardContent className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center col-span-1">
          <h1 className="text-white text-2xl">EVENTS</h1>
          <DataTable columns={columns} data={data} />
        </div>
        <div className="flex flex-col justify-center items-center col-span-1">
          <h1 className="text-white text-2xl">PURCHASED</h1>
          <DataTable columns={columns} data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
