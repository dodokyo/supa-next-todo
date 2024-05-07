import { getTodoAction } from "@/actions/todo/todo.action";
import { createServerSideClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  const result = await getTodoAction();
  console.log("todo GET API income", result);
  return NextResponse.json({ ...result });
};
