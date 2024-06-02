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
      <Card>
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-4xl bg-white rounded-lg shadow-lg flex overflow-hidden">
            <div className="w-1/2">
              <Image
                src="/login.png"
                alt="Image description"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/2 p-8">
              <h1>LOGIN</h1>
              <form id="cardForm" className="space-y-4">
              <label htmlFor="">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-[#295279] rounded-lg hover:bg-blue-700"
                >
                  LOGIN
                </button>
                <p>CREATE YOUR ACCOUNT</p>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
