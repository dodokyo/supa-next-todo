"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";

// todoList 가져오기
export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", {
      ascending: false,
    });

  return result.data;
};

// todoList 가져오기 + by Id
export const getTodosById = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);

  return result.data;
};

// todoList 가져오기 + search
export const getTodosBySearch = async (terms: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`)
    .order("id", { ascending: false })
    .limit(500);

  return result.data;
};
