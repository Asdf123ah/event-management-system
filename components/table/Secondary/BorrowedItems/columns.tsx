"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export type itemDetails = {
  code: string;
  item: string;
  quantity: string;
  image: string;
};

export const columns_BorrowedItem: ColumnDef<itemDetails>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Item Code
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "quantity",
    header: "Item Stocks",
  },
  {
    accessorKey: "borrower",
    header:"Borrower"
  },
  {
    accessorKey: "imageFile",
    header: "Image",
    cell: ({ row }) => {
      const format: string = row.getValue("imageFile");
      return (
        <>
          <Image src={format} alt="Pic" height={100} width={100} />
        </>
      );
    },
  },
];
