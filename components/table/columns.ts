"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  event: string
  venue: string
  date: string
  time: string
  price: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "event",
    header: "Event",
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
]
