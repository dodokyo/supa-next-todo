"use client";
import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const TodoListItem = ({ todo, onDelete = () => {}, onUpdate = () => {} }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState(todo?.content ?? "");

  const onStartEdit = () => {
    setIsEdit(true);
  };
  // 수정이 끝났을때
  const onFinishEdit = () => {
    onUpdate(todo.id, userInput);
    setIsEdit(false);
  };
  // 삭제버튼 클릭했을때
  const onClickDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li
      className="
    min-h-[60px]
    bg-[#B280D9] border border-black rounded-2xl
    font-bold group
  "
    >
      <article
        className="
          min-h-[60px] p-4
          flex flex-col sm:flex-row gap-4
        "
      >
        <>
          {isEdit ? (
            <input
              className="flex-1 text-[18px]"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            ></input>
          ) : (
            <div
              onClick={onStartEdit}
              className="flex-1 text-[18px] cursor-pointer "
            >
              {todo?.content}
            </div>
          )}
        </>
        <div className="w-fit hidden group-hover:flex gap-[8px] self-end">
          {isEdit ? (
            <div
              onClick={onFinishEdit}
              className="
            h-[45px] w-[45px]
            flex justify-center items-center
            bg-[#7EBB95] border border-black rounded-2xl
            cursor-pointer
            "
            >
              <CiCircleCheck size={30} />
            </div>
          ) : (
            <div
              className="
            h-[45px] w-[45px]
            flex justify-center items-center
            bg-[#7EBB95] border border-black rounded-2xl
            cursor-pointer
            "
              onClick={onStartEdit}
            >
              <CiEdit size={30} />
            </div>
          )}
          <div
            className="
            h-[45px] w-[45px]
            flex justify-center items-center
            bg-[#ED7461] border border-black rounded-2xl
            cursor-pointer
            "
            onClick={onClickDelete}
          >
            <AiOutlineDelete size={30} />
          </div>
        </div>
      </article>
    </li>
  );
};

export default TodoListItem;
