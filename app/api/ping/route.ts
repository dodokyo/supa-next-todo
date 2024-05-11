import { NextResponse } from "next/server";

export const GET = async () => {
  console.log("ping GET API income");
  return NextResponse.json({ message: "pong" });
};
