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
  return [
    {
      event: "Event 1",
      venue: "Venue 1",
      date: "06/02/2024",
      time: "12:00pm",
      price: "1,000",
      host: "Maloi",
      image: "maloi.png",
    },
    {
      event: "Event 2",
      venue: "Venue 2",
      date: "06/03/2024",
      time: "12:00pm",
      price: "1,100",
      host: "Sheena",
      image: "sheena.png",
    },
    {
      event: "Event 3",
      venue: "Venue 3",
      date: "06/04/2024",
      time: "12:00pm",
      price: "1,200",
      host: "Jhoanna",
      image: "jhoanna.png",
    },
    {
      event: "Event 4",
      venue: "Venue 4",
      date: "06/04/2024",
      time: "12:00pm",
      price: "1,200",
      host: "Aiah",
      image: "aiah.png",
    },
    {
      event: "Event 5",
      venue: "Venue 5",
      date: "06/04/2024",
      time: "12:00pm",
      price: "1,200",
      host: "Mikha",
      image: "mikha.png",
    },
    {
      event: "Event 6",
      venue: "Venue 6",
      date: "06/04/2024",
      time: "12:00pm",
      price: "1,200",
      host: "Gwen",
      image: "gwen.png",
    },
    // ...
  ];
}

export default function Page() {
  const [quantity, setQuantity] = useState(1);
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

  return (
    <Card className="bg-[#28527A]">
      <CardContent className="grid grid-cols-2">
        <div className="absolute mt-4 ml-8">
          <IoArrowBackCircleSharp className="text-[80px] text-[#ffffff] cursor-pointer " />
        </div>
        <div className="flex flex-col justify-center items-center col-span-1 space-y-4">
          <h1 className="text-white text-[36px] font-bold mt-8">BRGY ITEMS</h1>
          <DataTable columns={columns} data={data} />
          <div className="flex flex-row w-[90%]">
            <Label className="text-white text-[20px] mr-[3%]">BORROWER</Label>
            <Input></Input>
          </div>

          <div className="flex flex-row w-full">
            {/* First half */}
            <div className="w-1/2">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row w-[90%]">
                  <Label className="text-white text-[20px] mr-[9%]">
                    CODE
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row w-[90%]">
                  <Label className="text-white text-[20px] mr-[11%]">
                    ITEM
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
                  <Label className="text-white text-[20px] mr-[10%]">
                    TIME
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
                  src="/images/Rectangle 26.png"
                  alt="Event Image"
                  width={280}
                  height={280}
                />
                <Button className="w-[280px] bg-[#8AC4D0] text-[#0C092E] text-[21px] font-bold rounded-[25px] mb-4">
                  BORROW
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
        <div className="flex flex-col items-center col-span-1 space-y-4">
          <h1 className="text-white text-[36px] font-bold mt-8">
            BORROWED ITEMS
          </h1>
          <DataTable columns={columns} data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
