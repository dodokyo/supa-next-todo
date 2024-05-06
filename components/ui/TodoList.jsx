import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";

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
      </div>
    </section>
  );
};

export default TodoList;
