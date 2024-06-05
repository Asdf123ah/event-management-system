"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Payment = {
  name: any;
  event: string;
  venue: string;
  date: string;
  time: string;
  price: string;
  host: string;
  image: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "event",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Event
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "venue",
    header: "Venue",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "host",
    header: "Host",
  },
  {
    accessorKey: "image",
    header: "Image",
  },
];
