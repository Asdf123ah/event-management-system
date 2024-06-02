import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaSignOutAlt } from "react-icons/fa";
import { Button } from "./ui/button";

const Signout_Button = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="flex justify-center items-center text-center bg-white rounded-full w-16 h-16">
          <FaSignOutAlt className="text-[40px] text-[#28527A] cursor-pointer" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to Sign out?</AlertDialogTitle>
          <AlertDialogDescription>
            You will be signed out if you clicked yes.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Signout_Button;
