import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="h-[100%] w-[92%] bg-gray-300 rounded-md mt-1">
        <div className="flex flex-row justify-end mt-6 mr-8 space-x-4">
          <div className="h-14 w-14 bg-gray-400 rounded-full"></div>
          <div className="h-14 w-14 bg-gray-400 rounded-full"></div>
        </div>
        <div className="flex flex-row ml-28 mt-20 ">
          <div className="h-[480px] w-[480px] bg-gray-400 rounded-lg"></div>

          <div className="flex flex-col ml-20 mt-6">
            <div className="h-[50px] w-[250px] bg-gray-400 rounded-lg"></div>
            <div className="h-[80px] w-[520px] mt-2 bg-gray-400 rounded-lg"></div>
            <div className="h-[50px] w-[350px] mt-64 bg-gray-400 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
