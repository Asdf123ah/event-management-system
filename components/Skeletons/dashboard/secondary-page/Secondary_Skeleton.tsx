import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export default function Secondary_Skeleton() {
  return (
    <div className="flex flex-col w-screen h-screen">
    <div className="h-[100%] w-[92%] bg-gray-300 rounded-md mt-1">
      <div className="flex flex-row justify-center space-x-5 mt-7">
        <div className="h-10 w-14 bg-gray-400 rounded-sm"></div>
        <div className="h-12 w-12 bg-gray-400 rounded-full"></div>
        <div className="h-10 w-14 bg-gray-400 rounded-sm"></div>
        <div className="h-12 w-12 bg-gray-400 rounded-full"></div>
      </div>

      <div className="flex flex-row ml-16 mt-9 space-x-40">
        <div className="h-16 w-16 bg-gray-400 rounded-full"></div>
        <div className="h-10 w-36 mt-3 bg-gray-400 rounded-sm"></div>
      </div>

      <div className="flex flex-row h-10 w-[43%] ml-16 mt-3 bg-gray-400 rounded-sm py-3">
        <Skeleton className="w-[85px] h-[15px] ml-3 rounded-md mt-200%" />
        <Skeleton className="w-[18px] h-[18px] ml-[79%] rounded-full mt-200%" />
      </div>

      <div className="flex flex-col h-[40%] w-[43%] ml-16 mt-3 bg-gray-400 rounded-md">
        <div className="flex flex-row mt-3 ml-5 space-x-10">
          <Skeleton className="w-[70px] h-[18px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[70px] h-[18px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[50px] h-[18px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[50px] h-[18px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[50px] h-[18px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[50px] h-[18px] ml-3 rounded-md mt-200%" />
        </div>
        <div className="flex flex-row mt-10 ml-5">
          <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[70px] h-[35px] ml-10 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[30px] ml-6 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[30px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[30px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[70px] h-[35px] ml-3 rounded-md mt-200%" />
        </div>
        <div className="flex flex-row mt-10 ml-5">
          <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[70px] h-[35px] ml-10 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[30px] ml-6 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[30px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[30px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[70px] h-[35px] ml-3 rounded-md mt-200%" />
        </div>
        <div className="flex flex-row mt-10 ml-5">
          <Skeleton className="w-[70px] h-[30px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[70px] h-[35px] ml-10 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[30px] ml-6 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[30px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[30px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[70px] h-[35px] ml-3 rounded-md mt-200%" />
        </div>
        <div className="flex flex-row mt-10 ml-5">
          <Skeleton className="w-[70px] h-[16px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[70px] h-[16px] ml-10 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[16px] ml-6 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[16px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[80px] h-[16px] ml-3 rounded-md mt-200%" />
          <Skeleton className="w-[70px] h-[16px] ml-3 rounded-md mt-200%" />
        </div>
      </div>

      <div className="flex flex-row ml-16 mt-4 space-x-9">
        <div className="h-10 w-16 bg-gray-400 rounded-sm"></div>
        <div className="h-10 w-[38%] bg-gray-400 rounded-sm"></div>
      </div>
    </div>
  </div>
  )
}
