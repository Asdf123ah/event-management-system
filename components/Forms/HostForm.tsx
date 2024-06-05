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
      setImagePath(`/images/uploaded/${data.imageFile[0].name}`);
      alert("File uploaded successfully!");
    } else {
      alert("File upload failed!");
    }
    const { imageFile, ...eventData } = data;
    const objToDB = { ...eventData, imagePath };
    console.log(objToDB);

    const hostEventSubmit = await hostEvent(objToDB);
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
        />

        <Label
          className="block text-[#080067] text-[21px] font-bold mb-0"
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
          width={900}
          height={900}
          src={selectedImage || "/images/Rectangle 27.png"}
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
              <h1 className="flex flex-row space-x-2 text-lg">SIGN IN</h1>
            )}
          </Button>
        </div>
        {/* <DevTool control={control} /> */}
      </form>
    </div>
  );
};

export default HostForm;
