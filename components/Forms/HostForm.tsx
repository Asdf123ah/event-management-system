"use client";
import { hostEvent, signInUser } from "@/lib/actions";
import { HostFormFields, HostFormSchema } from "@/types/types";
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

const HostForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imagePath, setImagePath] = useState<string>("");

  const [errorImg, setErrorImg] = useState<string | null>(null);

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
    control,
    formState: { errors, isSubmitting },
  } = useForm<HostFormFields>({ resolver: zodResolver(HostFormSchema) });

  const onSubmit: SubmitHandler<HostFormFields> = async (data: any) => {
    console.log(data);

    const formData = new FormData();
    formData.append("file", data.imageFile[0]);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const response = await res.json();
      console.log(response);
      // Set the image path from the response
      const imagePath = `/images/uploaded/${response.fileName}`;

      // Prepare data to save in the database
      const { imageFile, ...eventData } = data;
      const objToDB = { ...eventData, imagePath };

      // Submit the event data
      const hostEventSubmit = await hostEvent(objToDB);
      toast({
        title: "Event Management System",
        description: "Event created successfully.",
        className: "bg-green-600 text-neutral-100",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Event Management System",
        description: "Failed to create event.",
      });
    }

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
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="h-[480px]">
        <div className="flex flex-row gap-8 ml-[8%] mt-8 w-5/6">
          {/* firsthalf */}
          <div className="flex flex-col gap-4 w-3/5">
            <div className="flex flex-row w-full justify-center">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[8%]"
                htmlFor="event"
              >
                Event
              </Label>
              <Input
                {...register("eventName")}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="event"
                placeholder="Enter The Name of the Event"
              />
            </div>

            <div className="flex flex-row w-full">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[7%]"
                htmlFor="venue"
              >
                Venue
              </Label>
              <Input
                {...register("venue")}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="venue"
                placeholder="Enter The Venue of the Event"
              />
            </div>

            <div className="flex flex-row w-full">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[9%]"
                htmlFor="date"
              >
                Date
              </Label>
              <Input
                {...register("date")}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="date"
                placeholder="Enter The Date of the Event"
              />
            </div>

            <div className="flex flex-row w-full">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[8%]"
                htmlFor="time"
              >
                Time
              </Label>
              <Input
                {...register("time")}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="time"
                placeholder="Enter The Time of the Event"
              />
            </div>

            <div className="flex flex-row w-full">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[8%]"
                htmlFor="price"
              >
                Price
              </Label>
              <Input
                {...register("price", { valueAsNumber: true })}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-0"
                type="number"
                id="price"
                placeholder="Enter The Price of a ticket for the Event"
              />
            </div>

            <div className="flex flex-row w-full">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[8%]"
                htmlFor="quantityAvailable"
              >
                Quantity of Tickets Available
              </Label>
              <Input
                {...register("quantityAvailable", { valueAsNumber: true })}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-0"
                type="number"
                id="quantityAvailable"
              />
            </div>
          </div>

          {/* secondhalf */}
          <div className="flex flex-col gap-4 w-2/5">
            <Label
              className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-[8%]"
              htmlFor="imageUpload"
            >
              Image Upload
            </Label>

            <Input
              {...register("imageFile", { required: true })}
              type="file"
              id="imageUpload"
              accept="image/*"
              className=""
              onChange={handleImageChange}
            />
            <Image
              width={700}
              height={700}
              src={selectedImage || "/images/Rectangle 27.png"}
              alt="Event Image"
              className="w-[100%] h-[32%] object-cover"
            />

            <Button
              disabled={isSubmitting}
              type="submit"
              className="flex justify-center mx-auto w-[50%] h-[56px] text-[#0C092E] text-2xl font-bold bg-[#8AC4D0] rounded-[25px] mb-0"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <FaSpinner className="mr-4 animate-spin" />
                  {"Adding..."}
                </div>
              ) : (
                <span className="flex justify-centerw-[50%] h-[56px] text-[#0C092E] text-2xl font-bold bg-[#8AC4D0] rounded-[25px] mb-0">
                  Add event
                </span>
              )}
            </Button>
          </div>
        </div>
        {/* <DevTool control={control} /> */}
      </form>
    </div>
  );
};

export default HostForm;
