"use client";
import { buyTicket, hostEvent, signInUser } from "@/lib/actions";
import {
  BuyerFormFields,
  BuyerFormSchema,
  HostFormFields,
  HostFormSchema,
} from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "../ui/use-toast";
import Image from "next/image";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

const BuyerForm = ({ values, onFormSubmit }: any) => {
  const { toast } = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imagePath, setImagePath] = useState<string>("");

  const [errorImg, setErrorImg] = useState<string | null>(null);

  // Ticket Quantity
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrorImg("Please select an image file.");
      } else {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target?.result as string);
          setErrorImg(null);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    watch,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BuyerFormFields>({ resolver: zodResolver(BuyerFormSchema) });

  useEffect(() => {
    setValue("eventName", values.eventName);
    setValue("venue", values.venue);
    setValue("date", values.date);
    setValue("time", values.time);
    setValue("price", values.price);
    setValue("imageFile", values.imagePath);
  }, [values]);

  const onSubmit: SubmitHandler<BuyerFormFields> = async (data: any) => {
    console.log(data);

    /* const formData = new FormData();
    formData.append("file", data.imageFile[0]);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const response = await res.json();
      setImagePath(`/images/uploaded/${data.imageFile[0].name}`);
      alert("File uploaded successfully!");
    } else {
      alert("File upload failed!");
    }
    const { imageFile, ...eventData } = data;
    const objToDB = { ...eventData, imagePath };
    console.log(objToDB); */

    const buyEventSubmit: any = await buyTicket(data, values.host);

    if (buyEventSubmit === "Success") {
      toast({
        title: "Event Management System - Redirecting",
        description: "Successfully Bought Tickets.",
        className: "bg-green-600 text-neutral-100",
      });
      onFormSubmit();
      /* window.location.reload(); */
    } else {
      toast({
        variant: "destructive",
        title: "Event Management System",
        description: "Ticket Buying Failed",
      });
    }
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <div className="flex flex-row gap-8 ml-[8%] mt-8 w-full">
          <div className="flex flex-col gap-4 w-3/4">
            <div className="flex flex-row w-full justify-center">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[11%]"
                htmlFor="event"
              >
                Event
              </Label>
              <Input
                {...register("eventName")}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="event"
                placeholder="Enter The Name of the Event"
                value={values.eventName}
              />
            </div>

            <div className="flex flex-row w-full">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[11%]"
                htmlFor="venue"
              >
                Venue
              </Label>
              <Input
                {...register("venue")}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="venue"
                placeholder="Enter The Venue of the Event"
                value={values.venue}
              />
            </div>

            <div className="flex flex-row w-full">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[12%]"
                htmlFor="date"
              >
                Date
              </Label>
              <Input
                {...register("date")}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="date"
                placeholder="Enter The Date of the Event"
                value={values.date}
              />
            </div>

            <div className="flex flex-row w-full">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[12%]"
                htmlFor="time"
              >
                Time
              </Label>
              <Input
                {...register("time")}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="time"
                placeholder="Enter The Time of the Event"
                value={values.time}
              />
            </div>

            <div className="flex flex-row w-full">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[12%]"
                htmlFor="price"
              >
                Price
              </Label>
              <Input
                {...register("price", { valueAsNumber: true })}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="price"
                placeholder="Enter The Price of a ticket for the Event"
                value={values.price}
              />
            </div>

            <div className="flex flex-row w-full">
              <Label className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[9%]">
                Quantity
              </Label>

              <Input
                {...register("quantity", {
                  valueAsNumber: true,
                  required: true,
                })}
                type="number"
                min={1}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-0"
              />
            </div>

            <Label
              className="text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[8%]"
              htmlFor="imageUpload"
            >
              Event Image
            </Label>

            <Input
              {...register("imageFile", { required: true })}
              className="hidden"
              onChange={handleImageChange}
              value={values.imagePath}
            />
            <Image
              width={700}
              height={700}
              src={values.imagePath || "/images/Rectangle 27.png"}
              alt="Event Image"
              className="flex w-[40%] h-[40%] max-h-[53%] max-w-[65%] object-fill items-center justify-center mx-auto"
            />

            <div className="flex justify-center">
              <Button
                disabled={isSubmitting}
                type="submit"
                className="ml-16 w-[365px] h-[56px] text-white text-2xl font-bold bg-[#8AC4D0] rounded-2xl hover:bg-blue-700 mb-0"
              >
                {isSubmitting ? (
                  <h1 className="flex flex-row items-center justify-center space-x-2 text-lg">
                    <FaSpinner className="mr-4 animate-spin" />
                    {"Buying..."}
                  </h1>
                ) : (
                  <h1 className="flex flex-row space-x-2 text-lg">
                    Buy Ticket/s
                  </h1>
                )}
              </Button>
            </div>

            <DevTool control={control} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyerForm;
