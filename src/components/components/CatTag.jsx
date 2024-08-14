import React from "react";

function CatTag({ temper }) {
  return (
    <div className="bg-[#EFEFEF] min-w-[48px] p-2 cursor-pointer hover:bg-[#D482DB] h-[18px] rounded-2xl text-center flex justify-center items-center text-[12px] font-sans text-[#353535]">
      {temper}
    </div>
  );
}

export default CatTag;
