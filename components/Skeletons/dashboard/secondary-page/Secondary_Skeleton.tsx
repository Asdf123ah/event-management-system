import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Main_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="h-[100%] w-[92%] bg-gray-300 rounded-md mt-1">
        <div className="flex flex-row ml-[23%] mt-7">
          <div className="h-12 w-12 bg-gray-400 rounded-full"></div>
          <div className="h-10 w-32 bg-gray-400 ml-4 rounded-sm"></div>
          <div className="h-12 w-12 bg-gray-400 ml-28 rounded-full"></div>
          <div className="h-10 w-32 bg-gray-400 ml-4 rounded-sm"></div>
          <div className="h-12 w-12 bg-gray-400 ml-28 rounded-full"></div>
          <div className="h-16 w-36 bg-gray-400 ml-4 rounded-sm"></div>
        </div>

        <div className="flex flex-row ml-24 mt-9 space-x-[38%]">
          <div className="h-16 w-16 bg-gray-400 rounded-full"></div>
          <div className="h-10 w-36 mt-3 bg-gray-400 rounded-sm"></div>
        </div>

        <div className="flex flex-row h-10 w-[89%] ml-20 mt-3 bg-gray-400 rounded-sm py-3">
          <Skeleton className="w-[85px] h-[15px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[18px] h-[18px] ml-[89%] rounded-full mt-200%" />
        </div>

        <div className="flex flex-col h-[50%] w-[89%] ml-20 mt-3 bg-gray-400 rounded-md">
          <div className="flex flex-row mt-3 ml-5 space-x-28">
            <Skeleton className="w-[70px] h-[18px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[18px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[18px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[18px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[18px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[18px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[18px] ml-3 rounded-md " />
          </div>
          <div className="flex flex-row mt-14 ml-5 space-x-28">
            <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[35px] ml-10 rounded-md " />
            <Skeleton className="w-[70px] h-[30px] ml-6 rounded-md " />
            <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[35px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[70px] ml-3 mt-[-1%] rounded-md " />
          </div>
          <div className="flex flex-row mt-14 ml-5 space-x-28">
            <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md" />
            <Skeleton className="w-[70px] h-[35px] ml-10 rounded-md" />
            <Skeleton className="w-[70px] h-[30px] ml-6 rounded-md" />
            <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md" />
            <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md" />
            <Skeleton className="w-[70px] h-[35px] ml-3 rounded-md" />
            <Skeleton className="w-[70px] h-[70px] ml-3 mt-[-1%] rounded-md " />
          </div>
          <div className="flex flex-row mt-14 ml-5 space-x-28">
            <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md %" />
            <Skeleton className="w-[70px] h-[35px] ml-10 rounded-md " />
            <Skeleton className="w-[70px] h-[30px] ml-6 rounded-md " />
            <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md %" />
            <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md %" />
            <Skeleton className="w-[70px] h-[35px] ml-3 rounded-md " />
            <Skeleton className="w-[70px] h-[70px] ml-3 mt-[-1%] rounded-md " />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <Skeleton className="w-[100px] h-[20px] rounded-full mt-200%" /> */
}
