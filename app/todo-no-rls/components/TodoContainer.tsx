"use client";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  return (
    <div>
      <TodoList sharedUserFullName="test user" />
    </div>
  );
};

export default TodoContainer;
