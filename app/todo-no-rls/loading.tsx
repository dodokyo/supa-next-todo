"use client";
import React from "react";
import { DotLoader } from "react-spinners";

const Error = () => {
  return (
    <div className=" flex flex-col items-center mt-12">
      <div>
        <DotLoader />
      </div>
      <div className=" font-bold my-2">loading...</div>
    </div>
  );
};

export default Error;
