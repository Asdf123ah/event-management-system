import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Signout_Button from "@/components/Signout_Button";
import { FaInfoCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { getUserFromCookie } from "@/lib/actions";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function page() {
  const generateImagePaths = () => {
    const imagePaths = [];
    for (let i = 1; i <= 17; i++) {
      imagePaths.push(`/images/uploaded/${i}.jpg`);
    }
    return imagePaths;
  };

  const images = generateImagePaths();

  return (
    <Card className="bg-[#28527A]">
      <div className="absolute mt-4 ml-8">
        <Link href="/dashboard">
          <IoArrowBackCircleSharp className="absolute text-[80px] text-[#ffffff] cursor-pointer text-start" />
        </Link>
      </div>
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle className="w-full flex justify-end space-x-2">
          <Link href={"/dashboard/about-team"}>
            <FaInfoCircle className="text-[64px] text-white cursor-pointer mx-4" />
          </Link>
          <Signout_Button />
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="flex flex-row justify-center items-center">
          {/* <Image
            src={"/images/event.png"}
            alt="Logo"
            width={540}
            height={250}
          /> */}{" "}
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex flex-row justify-center items-center">
                    <Image
                      className="rounded-lg border"
                      src={image}
                      alt="Logo"
                      width={1000}
                      height={300}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </CardContent>
      <div className="w-[90%] flex text-center justify-center items-center mt-0 px-10 mx-auto mb-4">
        <p className="text-[24px] text-white">
          Experience the pulse of excitement with our upcoming events! Get ready
          to immerse yourself in a world of entertainment, discovery, and
          inspiration. From electrifying concerts that will make your heart race
          to thought-provoking seminars that will ignite your intellect, there's
          something for everyone. Join us as we celebrate the joy of community
          and the thrill of new experiences. Mark your calendars and prepare to
          be captivated by unforgettable moments. Don't miss out on the
          excitement—join us for our upcoming events and create memories that
          will last a lifetime!
        </p>
      </div>
    </Card>
  );
}
