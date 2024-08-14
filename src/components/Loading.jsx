import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[20vw] h-[20vw] rounded-full border-t-black border-[10px] animate-spin"></div>
    </div>
  );
}

export default Loading;
