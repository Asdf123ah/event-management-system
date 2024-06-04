"use client";

import React, { useState, useEffect } from "react";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoArrowBackCircleSharp } from "react-icons/io5";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.

  const usersResponse = await fetch("http://localhost:5000/events");
  if (!usersResponse.ok) {
    throw new Error("Failed to fetch events");
  }
  const users = await usersResponse.json();
  return users;
  /* return [
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
    {
      event: "Event 4",
      venue: "Venue 4",
      date: "06/04/2024",
      time: "12:00pm",
      price: "1,200",
    },
    {
      event: "Event 5",
      venue: "Venue 5",
      date: "06/04/2024",
      time: "12:00pm",
      price: "1,200",
    },
    {
      event: "Event 6",
      venue: "Venue 6",
      date: "06/04/2024",
      time: "12:00pm",
      price: "1,200",
    },
    // ...
  ]; */
}

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [isHosting, setIsHosting] = useState<"Host" | "Buyer">("Host");
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsHosting(event.target.value as "Host" | "Buyer");
  };
  return (
    <Card className="bg-[#28527A]">
      <CardHeader className="flex flex-row items-center justify-center space-x-2">
        <div className="flex flex-row w-auto justify-center items-center space-x-2">
          <Label className="w-full">Host an Event</Label>
          <Input
            type="radio"
            name="role"
            value="Host"
            checked={isHosting === "Host"}
            onChange={handleRoleChange}
          />
        </div>
        <div className="flex flex-row w-auto justify-center items-center space-x-2">
          <Label>Buy a Ticket</Label>
          <Input
            type="radio"
            name="role"
            value="Buyer"
            checked={isHosting === "Buyer"}
            onChange={handleRoleChange}
          />
        </div>
      </CardHeader>

      <CardContent className="grid grid-cols-2">
        <div className="absolute mt-4 ml-8">
          <Link href="/dashboard">
            <IoArrowBackCircleSharp className="text-[80px] text-[#ffffff] cursor-pointer " />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-white text-[36px] font-bold mt-8">EVENTS</h1>
          <DataTable columns={columns} data={data} />
          <div className="flex flex-row w-[90%]">
            <Label className="text-white text-[20px] mr-[9%]">EVENT</Label>
            <Input></Input>
          </div>

          <div className="flex flex-row w-full">
            {/* First half */}
            <div className="w-1/2">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row w-[90%]">
                  <Label className="text-white text-[20px] mr-[9%]">
                    VENUE
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row w-[90%]">
                  <Label className="text-white text-[20px] mr-[11%]">
                    DATE
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row w-[90%]">
                  <Label className="text-white text-[20px] mr-[11%]">
                    TIME
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row w-[90%]">
                  <Label className="text-white text-[20px] mr-[10%]">
                    PRICE
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row w-[90%]">
                  <Label className="text-white text-[20px] mr-[10%]">
                    HOST
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row w-[90%] items-center">
                  <Label className="text-white text-[20px] mr-[4%] mb-4">
                    QUANTITY
                  </Label>
                  <div
                    onClick={handleDecrement}
                    className="bg-[#FFFFFF] text-[#0C092E] text-[27px] font-bold px-4 rounded-tl-[16px] rounded-bl-[16px] mb-4"
                  >
                    -
                  </div>
                  <Input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-[100px] text-[27px] text-center font-bold mx-0 rounded-none mb-4"
                  />
                  <div
                    onClick={handleIncrement}
                    className="bg-[#FFFFFF] text-[#0C092E] text-[27px] font-bold px-4 rounded-tr-[16px] rounded-br-[16px] mb-4"
                  >
                    +
                  </div>
                </div>
              </div>
            </div>

            {/* Second half */}
            <div className="w-1/2">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/images/Rectangle 25.png"
                  alt="Event Image"
                  width={280}
                  height={280}
                />
                <Button className="w-[280px] bg-[#8AC4D0] text-[#0C092E] text-[21px] font-bold rounded-[25px] mb-4">
                  PURCHASE
                </Button>
                <div className="flex flex-row justify-around">
                  <Button className="w-[130px] h-[33px] bg-[#51B94F] text-[18px] text-[#0C092E] font-bold rounded-[25px]">
                    UPDATE
                  </Button>
                  <Button className="w-[130px] h-[33px] bg-[#D65A5A] text-[18px] text-[#0C092E] font-bold rounded-[25px]">
                    REMOVE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isHosting === "Buyer" && (
          <div className="flex flex-col items-center col-span-1 space-y-4">
            <h1 className="text-white text-[36px] font-bold mt-8">PURCHASED</h1>
            <DataTable columns={columns} data={data} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
