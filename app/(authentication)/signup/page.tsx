import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import SignUpForm from "@/components/Forms/SignUpForm";

export default function signup_page() {
  return (
    <>
      <Card className="w-[1287px] h-[859px] mx-auto">
        <div className="flex items-center justify-center rounded-lg h-full">
          <div className="w-full bg-white rounded-lg shadow-lg flex overflow-hidden h-full">
            <div className="w-1/2">
              <Image
                src="/images/login.png"
                alt="Image description"
                width={858}
                height={859}
                className="object-cover w-full h-full p-16"
              />
            </div>
            <div className="w-1/2 p-0 m-auto flex flex-col items-center">
              <h1 className="text-[#080067] text-[47px] font-bold text-center mb-16">
                SIGNUP
              </h1>
              {/* <form id="cardForm" className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[#080067] text-lg font-bold mb-0"
                  >
                    FULLNAME
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="text"
                    className="w-[437px] h-[56px] px-4 py-2 text-black bg-[#8AC4D0] border border-gray-300 rounded-lg mb-0"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#080067] text-lg font-bold mb-0"
                  >
                    EMAIL
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-[437px] h-[56px] px-4 py-2 text-black bg-[#8AC4D0] border border-gray-300 rounded-lg mb-0"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-[#080067] text-lg font-bold mb-0"
                  >
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-[437px] h-[56px] px-4 py-2 text-black bg-[#8AC4D0] border border-gray-300 rounded-lg mb-0"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-[#080067] text-lg font-bold mb-2"
                  >
                    CONFIRM PASSWORD
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-[437px] h-[56px] px-4 py-2 text-black bg-[#8AC4D0] border border-gray-300 rounded-lg mb-16"
                  />
                </div>
                <button
                  type="submit"
                  className="ml-8 w-[365px] h-[56px] mx-auto text-white text-2xl font-bold bg-[#295279] rounded-lg hover:bg-blue-700 mb-0"
                >
                  SIGNUP
                </button>
              </form> */}
              <SignUpForm />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
