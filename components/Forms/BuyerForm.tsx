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

const BuyerForm = ({ values }: any) => {
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

    const buyEventSubmit = await buyTicket(data, values.host);
    /*  const signInUserResponse: any = await signInUser(data);

    if (signInUserResponse.status === 200) {
      toast({
        title: "Event Management System - Redirecting",
        description: "Successfully Signed in.",
        className: "bg-green-600 text-neutral-100",
      });
      console.log(signInUserResponse);
      router.push("/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Event Management System",
        description: signInUserResponse.message,
      });
      console.log(signInUserResponse);
    } */
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label
          className="block text-[#080067] text-[21px] font-bold mb-0"
          htmlFor="event"
        >
          Event
        </Label>
        <Input
          {...register("eventName")}
          className="w-[437px] h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-16"
          id="event"
          placeholder="Enter The Name of the Event"
          value={values.eventName}
        />

        <Label
          className="block text-[#080067] text-[21px] font-bold mb-0"
          htmlFor="venue"
        >
          Venue
        </Label>
        <Input
          {...register("venue")}
          className="w-[437px] h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-16"
          id="venue"
          placeholder="Enter The Venue of the Event"
          value={values.venue}
        />

        <Label
          className="block text-[#080067] text-[21px] font-bold mb-0"
          htmlFor="date"
        >
          Date
        </Label>
        <Input
          {...register("date")}
          className="w-[437px] h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-16"
          id="date"
          placeholder="Enter The Date of the Event"
          value={values.date}
        />

        <Label
          className="block text-[#080067] text-[21px] font-bold mb-0"
          htmlFor="time"
        >
          Time
        </Label>
        <Input
          {...register("time")}
          className="w-[437px] h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-16"
          id="time"
          placeholder="Enter The Time of the Event"
          value={values.time}
        />
        <Label
          className="block text-[#080067] text-[21px] font-bold mb-0"
          htmlFor="price"
        >
          Price
        </Label>
        <Input
          {...register("price", { valueAsNumber: true })}
          className="w-[437px] h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-16"
          id="price"
          placeholder="Enter The Price of a ticket for the Event"
          value={values.price}
        />

        <div className="flex flex-row w-[90%] items-center">
          <Label className="text-white text-[20px] mr-[12%] mb-4">
            QUANTITY
          </Label>

          <Input
            {...register("quantity", { valueAsNumber: true, required: true })}
            type="number"
            min={1}
            className="w-[100px] text-[27px] text-center font-bold mx-0 rounded-none mb-4"
          />
        </div>

        <Label
          className="block text-[#080067] text-[21px] font-bold mb-0"
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
          width={900}
          height={900}
          src={values.imagePath || "/images/Rectangle 27.png"}
          alt="Event Image"
          className="w-full h-full object-cover"
        />

        <div className="flex">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="ml-16 w-[365px] h-[56px] mx-auto text-white text-2xl font-bold bg-[#295279] rounded-lg hover:bg-blue-700 mb-0"
          >
            {isSubmitting ? (
              <h1 className="flex flex-row items-center justify-center space-x-2 text-lg">
                <FaSpinner className="mr-4 animate-spin" />
                {"Signing in..."}
              </h1>
            ) : (
              <h1 className="flex flex-row space-x-2 text-lg">Buy Ticket/s</h1>
            )}
          </Button>
        </div>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default BuyerForm;
