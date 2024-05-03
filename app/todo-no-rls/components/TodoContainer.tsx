"use client";
import { getTodos } from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    getTodos();
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
