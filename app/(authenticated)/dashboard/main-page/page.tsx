"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { EventDetails, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import HostForm from "@/components/Forms/HostForm";
import { DataTable_Buyer } from "@/components/table/buyticket/data-table";
import BuyerForm from "@/components/Forms/BuyerForm";
import { columns_buyer } from "@/components/table/buyticket/columns";

async function getData(): Promise<EventDetails[]> {
  const usersResponse = await fetch("http://localhost:5000/events");
  if (!usersResponse.ok) {
    throw new Error("Failed to fetch events");
  }
  const users = await usersResponse.json();
  return users;
}

async function getData_purchased(): Promise<EventDetails[]> {
  const usersResponse = await fetch("http://localhost:5000/events-purchased");
  if (!usersResponse.ok) {
    throw new Error("Failed to fetch events");
  }
  const users = await usersResponse.json();
  return users;
}

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [isHosting, setIsHosting] = useState<"Host" | "Buyer">("Host");
  const [data, setData] = useState<EventDetails[]>([]);

  const [ticketBought, setTicketBought] = useState<EventDetails[]>([]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  //Table Selecting Row
  const [selectedRow, setSelectedRow] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData_purchased();
      setTicketBought(result);
    };

    fetchData();
  }, [!isHosting]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsHosting(event.target.value as "Host" | "Buyer");
    setSelectedRow(undefined);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file.");
      } else {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target?.result as string);
          setError(null);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setError(null);
  };

  return (
    <Card className="bg-[#28527A]">
      <CardHeader className="flex flex-row items-center justify-center space-x-12">
        <div className="flex flex-row w-auto justify-center items-center">
          <Input
            type="radio"
            name="role"
            value="Host"
            checked={isHosting === "Host"}
            onChange={handleRoleChange}
          />
          <Label className="w-72 text-xl text-white font-bold -ml-8">
            Host an event
          </Label>
        </div>
        <div className="flex flex-row w-auto justify-center items-center">
          <Input
            type="radio"
            name="role"
            value="Buyer"
            checked={isHosting === "Buyer"}
            onChange={handleRoleChange}
          />
          <Label className="w-72 text-xl text-white font-bold -ml-8">
            Buy a ticket
          </Label>
        </div>
      </CardHeader>

      <CardContent className="">
        <div className="flex items-center justify-between mt-0 ml-20">
          <Link href="/dashboard">
            <IoArrowBackCircleSharp className="text-[80px] text-[#ffffff] cursor-pointer" />
          </Link>
          <div className="flex flex-1 items-center justify-center">
            <h1 className="text-white text-[36px] font-bold">EVENTS</h1>
            {isHosting === "Buyer" && (
              <h1 className="text-white text-[36px] font-bold ml-[45%]">
                PURCHASED
              </h1>
            )}
          </div>
          <div className="w-[80px]"></div>
          {/* Empty div to take up the same space as the icon */}
        </div>
        {isHosting === "Host" ? (
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <div className="flex flex-col justify-center items-center py-4">
                <DataTable
                  columns={columns}
                  data={data}
                  setSelectedRow={setSelectedRow}
                />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className=" flex flex-row w-full">
                <HostForm />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center col-span-1 space-y-0">
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center items-center gap-4">
                {" "}
                {/* Center the DataTable horizontally */}
                <DataTable
                  columns={columns}
                  data={data}
                  setSelectedRow={setSelectedRow}
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                {" "}
                {/* Center the DataTable_Buyer horizontally */}
                <DataTable_Buyer columns={columns_buyer} data={ticketBought} />
              </div>
            </div>
            {selectedRow && (
              <>
                <BuyerForm values={selectedRow} />
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
