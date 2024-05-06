import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";
import { IoSearchOutline } from "react-icons/io5";

const TodoList = ({ sharedUserFullName = "", owerUserId = "" }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = () => {
    const shareLink = `${"todoList공유할 링크"}/share/${owerUserId}`;
    copy(shareLink)
      .then(() => {
        window.alert(`공유링크 복사완료! \n${shareLink}`);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <section className=" min-h-[70vh] bg-[#69CFCF] ">
      <div className=" w-full max-w-[800px] p-[20px] mx-auto ">
        <article className=" flex flex-row justify-between items-center">
          <div className=" font-bold text-[32px]">
            {sharedUserFullName && <div>{sharedUserFullName}</div>}
            Things to do:
          </div>
          {owerUserId && (
            <div
              onClick={() => handleCopy()}
              className="font-bold text-[20px] flex flex-row items-center
          cursor-pointer
          "
            >
              Share
              <IoShareSocialOutline />
            </div>
          )}
        </article>
        <article className=" flex flex-col sm:flex-row gap-4 mt-8">
          <div className=" flex flex-1 h-[60px]">
            <input
              className="
                p-4
                flex-1
                bg-[#F7CB66]
                border border-black rounded-l-2xl font-bold
            "
            ></input>
            <div
              className=" w-[60px]
            flex justify-center items-center
            bg-black rounded-r-2xl
            cursor-pointer
            "
            >
              <IoSearchOutline size={40} color="#fff" />
            </div>
          </div>
          <div
            className="
            h-[60px] w-[200px]
            flex justify-center items-center
            bg-[#7EBB95] border border-black rounded-2xl
            font-bold cursor-pointer text-[20px]
          "
          >
            New Task
          </div>
        </article>
        <div className="h-[2px] my-10 bg-black"></div>
      </div>
    </section>
  );
};

export default TodoList;
