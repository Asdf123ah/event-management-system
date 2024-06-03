"use client";
import { LoginFormFields, LoginFormSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { FaSpinner } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { signInUser } from "@/lib/actions";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({ resolver: zodResolver(LoginFormSchema) });

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    console.log(data);
    const signInUserResponse: any = await signInUser(data);

    if (signInUserResponse.status === 200) {
      toast({
        title: "Event Management System - Redirecting",
        description: "Successfully Signed in.",
        className: "bg-green-600 text-neutral-100",
      });
      console.log(signInUserResponse);
      router.push("/dashboard")
    } else {
      toast({
        variant: "destructive",
        title: "Event Management System",
        description: signInUserResponse.message,
      });
      console.log(signInUserResponse);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label
          className="block text-[#080067] text-lg font-bold mb-0"
          htmlFor="email"
        >
          Email
        </Label>
        <Input
          {...register("email")}
          className="w-[437px] h-[56px] px-4 py-2 text-black bg-[#8AC4D0] border border-gray-300 rounded-lg mb-0"
          id="email"
          placeholder="Enter your email"
          autoComplete="email"
        />
        <Label
          className="block text-[#080067] text-lg font-bold mb-0"
          htmlFor="password"
        >
          Password
        </Label>
        <Input
          {...register("password", { required: true })}
          className="w-[437px] h-[56px] px-4 py-2 text-black bg-[#8AC4D0] border border-gray-300 rounded-lg mb-0"
          id="password"
          type="password"
          placeholder="Enter your password"
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          className="ml-8 w-[365px] h-[56px] mx-auto text-white text-2xl font-bold bg-[#295279] rounded-lg hover:bg-blue-700 mb-0"
        >
          {isSubmitting ? (
            <h1 className="flex flex-row items-center justify-center space-x-2 text-lg">
              <FaSpinner className="mr-4 animate-spin" />
              {"Signing in..."}
            </h1>
          ) : (
            <h1 className="flex flex-row space-x-2 text-lg">Sign In</h1>
          )}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
