"use client";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

interface TodoContainerProps {
  sharedUserFullName?: string;
  owerUserId?: string;
}

const TodoContainer = ({
  sharedUserFullName,
  owerUserId,
}: TodoContainerProps) => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onDeleteTodos,
    onSearchTodos,
    onUpdateTodos,
  } = useTodosController(owerUserId);

  return (
    <div>
      <TodoList
        sharedUserFullName={sharedUserFullName}
        owerUserId={owerUserId}
        loading={loading}
        todoListData={todos}
        isReadOnly
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
