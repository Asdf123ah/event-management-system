"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";
import { SignUpFormFields, SignUpFormSchema } from "@/types/types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { FaSpinner } from "react-icons/fa";
import { createUser } from "@/lib/actions";

const SignUpForm = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormFields>({ resolver: zodResolver(SignUpFormSchema) });

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    console.log(data);
    const signUpUser: any = await createUser(data);

    if (signUpUser) {
      if (signUpUser === "Email is already registered.") {
        toast({
          title: "Account Creation Failed",
          description: "Email is already taken.",
          variant: "destructive",
        });
      } else {
        toast({
          className: "bg-green-600 text-neutral-100",
          title: "Event Management System",
          description: "Successfully Created the User.",
        });
        console.log(signUpUser);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label
          className="block text-[#080067] text-[21px] font-bold mb-0"
          htmlFor="name"
        >
          FULL NAME
        </Label>
        <Input
          {...register("name")}
          className="w-[437px] h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-6"
          id="name"
          placeholder="Enter your full name"
          autoComplete="additional-name"
        />
        <Label
          className="block text-[#080067] text-lg font-bold mb-0"
          htmlFor="email"
        >
          EMAIL
        </Label>
        <Input
          {...register("email")}
          className="w-[437px] h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-6"
          id="email"
          placeholder="Enter your email"
          autoComplete="email"
        />
        <Label
          className="block text-[#080067] text-lg font-bold mb-0"
          htmlFor="password"
        >
          PASSWORD
        </Label>
        <Input
          {...register("password", { required: true })}
          className="w-[437px] h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-6"
          id="password"
          type="password"
          placeholder="Enter your password"
        />

        <Label
          className="block text-[#080067] text-lg font-bold mb-0"
          htmlFor="confirmPassword"
        >
          CONFIRM PASSWORD
        </Label>
        <Input
          {...register("confirmPassword", { required: true })}
          className="w-[437px] h-[56px] px-4 py-2 text-black text-[21px] bg-[#8AC4D0] border border-gray-300 rounded-lg mb-12"
          id="confirmPassword"
          type="password"
          placeholder="Re-enter your password"
        />
        <div className="flex">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="ml-8 w-[365px] h-[56px] mx-auto text-white text-[21px] font-bold bg-[#295279] rounded-lg hover:bg-blue-700 mb-0"
          >
            {isSubmitting ? (
              <h1 className="flex flex-row items-center justify-center space-x-2 text-lg">
                <FaSpinner className="mr-4 animate-spin" />
                {"Creating..."}
              </h1>
            ) : (
              <h1 className="flex flex-row space-x-2 text-lg">SIGN UP</h1>
            )}
          </Button>
        </div>
      </form>
      {/*    <DevTool control={control} />  */}
    </>
  );
};

export default SignUpForm;
