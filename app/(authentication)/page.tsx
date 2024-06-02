import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Card className="">
        <div className="flex items-center justify-center rounded-lg">
          <div className="max-w-4xl bg-white rounded-lg shadow-lg flex overflow-hidden">
            <div className="w-1/2">
              <Image
                src="/images/login.png"
                alt="Image description"
                width={445}
                height={690}
                className="object-cover w-[445px] h-[690px] p-10"
              />
            </div>
            <div className="w-1/2 p-8 m-auto">
              <h1 className="text-[#080067] text-5xl font-bold text-center">
                LOGIN
              </h1>
              <form id="cardForm" className="space-y-4">
                <label htmlFor="" className="text-[#080067] font-[24px]">
                  EMAIL
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="asasa"
                  className="w-full h-[56px] px-4 py-2 text-white bg-[#8AC4D0] border border-gray-300 rounded-lg"
                />
                <label htmlFor="" className="text-[#080067]">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="sasas"
                  className="w-full px-4 py-2 text-white bg-[#8AC4D0] border border-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full h-[56px] px-4 py-2 text-white text-2xl font-bold bg-[#295279] rounded-lg hover:bg-blue-700"
                >
                  LOGIN
                </button>
                <p className="text-[#696969] text-lg text-center ">
                  CREATE YOUR ACCOUNT
                </p>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
