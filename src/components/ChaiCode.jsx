import React from "react";

function ChaiCode({ y, x }) {
  return (
    <a href="https://chaicode.com/" target="_blank">
      <img
        className={`absolute ${x} ${y} m-3 w-[5vmax] rounded-2xl cursor-pointer`}
        src="/assets/ChaiCodeLogo.png"
        alt="chaicodelogo"
      />
    </a>
  );
}

export default ChaiCode;
