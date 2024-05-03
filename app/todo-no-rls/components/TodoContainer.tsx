"use client";
import { getTodos, getTodosById, getTodosBySearch } from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    getTodosBySearch("");
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
