"use client";
import { borrowItem, buyTicket } from "@/lib/actions";
import { ListItemFields, ListItemSchema } from "@/types/types";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { useToast } from "../../ui/use-toast";

const BorrowerForm = ({ values, onFormSubmit }: any) => {
  const { toast } = useToast();
  const router = useRouter();

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
  } = useForm<ListItemFields>({ resolver: zodResolver(ListItemSchema) });

  useEffect(() => {
    setValue("item", values.item);

    setValue("imageFile", values.imagePath);
  }, [values]);

  const onSubmit: SubmitHandler<ListItemFields> = async (data: any) => {
    console.log(data);

    const borrowItemSubmit: any = await borrowItem(data, values);

    if (borrowItemSubmit === "Success") {
      toast({
        title: "Brgy Inventory Management System",
        description: "Successfully Borrowed Items.",
        className: "bg-green-600 text-neutral-100",
      });
    } else if (borrowItemSubmit === "Out of Stock") {
      toast({
        variant: "destructive",
        title: "Brgy Inventory Management System",
        description: "Borrowing Item Failed - Out of Stocks",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Brgy Inventory Management System",
        description: "Borrowing Item Failed",
      });
    }
    onFormSubmit();
  };
  return (
    <div className="w-full flex justify-center items-center">
      {" "}
      {/* Center the form horizontally and vertically */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full w-full max-w-4xl"
      >
        {" "}
        {/* Limit the width of the form */}
        <div className="flex flex-col gap-8 mt-8 w-full items-center">
          {" "}
          {/* Center form content */}
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="flex flex-row w-full justify-center items-center">
              <Label
                className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-4"
                htmlFor="item"
              >
                Item
              </Label>
              <Input
                {...register("item")}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
                id="item"
                placeholder="Enter The Name of the Event"
                value={values.eventName}
              />
            </div>

            <div className="flex flex-row w-full justify-center items-center">
              <Label className="block text-[#FFFFFF] text-[21px] font-bold mb-0 mr-4">
                Quantity
              </Label>
              <Input
                {...register("quantity", {
                  valueAsNumber: true,
                  required: true,
                })}
                type="number"
                min={1}
                className="w-full h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-4"
              />
            </div>

            <Label
              className="text-[#FFFFFF] text-[21px] font-bold mb-4"
              htmlFor="imageUpload"
            >
              Item Image
            </Label>
            <Input
              {...register("imageFile", { required: true })}
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="flex justify-center w-full">
              <Image
                width={700}
                height={700}
                src={values.imagePath || "/images/Rectangle 27.png"}
                alt="Event Image"
                className="w-[40%] h-[40%] max-h-[53%] max-w-[65%] object-fill"
              />
            </div>

            <div className="flex justify-center w-full mt-4">
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-[365px] h-[56px] text-white text-2xl font-bold bg-[#8AC4D0] rounded-2xl hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <h1 className="flex flex-row items-center justify-center space-x-2 text-lg">
                    <FaSpinner className="mr-4 animate-spin" />
                    {"Borrowing..."}
                  </h1>
                ) : (
                  <h1 className="flex flex-row space-x-2 text-lg">
                    Borrow Items
                  </h1>
                )}
              </Button>
            </div>

            {/* <DevTool control={control} /> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BorrowerForm;
