import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";

const TodoList = ({ sharedUserFullName = "" }) => {
  const handleCopy = () => {};

  return (
    <section className=" min-h-[70vh] bg-[#69CFCF] ">
      <div className=" w-full max-w-[800px] p-[20px] mx-auto ">
        <article className=" flex flex-row justify-between items-center">
          <div className=" font-bold text-[32px]">
            {sharedUserFullName && <div>{sharedUserFullName}</div>}
            Things to do:
          </div>
          <div
            onClick={() => handleCopy()}
            className="font-bold text-[32px] flex flex-row items-center
          cursor-pointer
          "
          >
            Share
            <IoShareSocialOutline />
          </div>
        </article>
      </div>
    </section>
  );
};

export default TodoList;
