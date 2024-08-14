import React from "react";

function BioField({small,big}) {
  return (
    <div className="w-1/2">
      <p className="font-sans leading-none text-[9px] text-[#000000B2]">{small}</p>
      <p className="text-[18px] font-serif text-[#000000B2]">{big}</p>
    </div>
  );
}

export default BioField;
