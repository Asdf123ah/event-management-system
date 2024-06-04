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
import { Payment, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

async function getData(): Promise<Payment[]> {
  const usersResponse = await fetch("http://localhost:5000/events");
  if (!usersResponse.ok) {
    throw new Error("Failed to fetch events");
  }
  const users = await usersResponse.json();
  return users;
}

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [isHosting, setIsHosting] = useState<"Host" | "Buyer">("Host");
  const [data, setData] = useState<Payment[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
      <CardHeader className="flex flex-row items-center justify-center space-x-2">
        <div className="flex flex-row w-auto justify-center items-center space-x-2">
          <Label className="w-full">Host an Item</Label>
          <Input
            type="radio"
            name="role"
            value="Host"
            checked={isHosting === "Host"}
            onChange={handleRoleChange}
          />
        </div>
        <div className="flex flex-row w-auto justify-center items-center space-x-2">
          <Label>Borrow an Item</Label>
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
          <h1 className="text-white text-[36px] font-bold mt-8">BRGY ITEMS</h1>
          <div className="relative w-[90%]">
            <Input className="w-full" />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800" />
          </div>
          <DataTable columns={columns} data={data} />
          <div className="flex flex-row w-[90%]">
            <Label className="text-white text-[20px] mr-[4%]">BORROWER</Label>
            <Input></Input>
          </div>

          <div className="flex flex-row w-full">
            {/* First half */}
            <div className="w-2/3">
              <div className="flex flex-col gap-4 ml-[7%]">
                <div className="flex flex-row">
                  <Label className="text-white text-[20px] mr-[18%]">
                    CODE
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row">
                  <Label className="text-white text-[20px] mr-[18%]">
                    ITEM
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row">
                  <Label className="text-white text-[20px] mr-[18%]">
                    DATE
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row">
                  <Label className="text-white text-[20px] mr-[18%]">
                    TIME
                  </Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row">
                  <Label className="text-white text-[20px] mr-[17%]">HOST</Label>
                  <Input></Input>
                </div>
                <div className="flex flex-row w-[90%] items-center">
                  <Label className="text-white text-[20px] mr-[12%] mb-4">
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
            <div className="w-1/3 mx-4">
              <div className="flex flex-col justify-center items-center">
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="imageUpload"
                  className="w-56 h-52 mb-4 cursor-pointer relative"
                >
                  <Image
                    width={900}
                    height={900}
                    src={selectedImage || "/images/Rectangle 27.png"}
                    alt="Event Image"
                    className="w-full h-full object-cover"
                  />
                  {error && (
                    <div className="absolute bottom-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {error}
                    </div>
                  )}
                </label>
                <Button className="w-[241px] bg-[#8AC4D0] text-[#0C092E] text-[21px] font-bold rounded-[25px] mb-4">
                  BORROW
                </Button>
                <div className="flex flex-row justify-evenly w-full">
                  <Button className="w-[110px] h-[33px] bg-[#51B94F] text-[18px] text-[#0C092E] font-bold rounded-[25px]">
                    UPDATE
                  </Button>
                  <Button className="w-[110px] h-[33px] bg-[#D65A5A] text-[18px] text-[#0C092E] font-bold rounded-[25px]">
                    REMOVE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isHosting === "Buyer" && (
          <div className="flex flex-col items-center col-span-1 space-y-4">
            <h1 className="text-white text-[36px] font-bold mt-8">BORROWED ITEMS</h1>
            <DataTable columns={columns} data={data} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
