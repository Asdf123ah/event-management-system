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

const Signout_Button = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-white rounded-full text-xl text-[#28527A] p-2">
        <FaSignOutAlt />
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
