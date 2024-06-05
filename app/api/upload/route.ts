// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const data = await req.formData();
  const file = data.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(
    process.cwd(),
    "public",
    "images",
    "uploaded",
    file.name
  );

  await fs.promises.writeFile(filePath, buffer);

  return NextResponse.json({
    fileName: file.name,
    message: "File uploaded successfully",
  });
}
