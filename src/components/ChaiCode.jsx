import React from "react";

function ChaiCode({ y, x, size }) {
  return (
    <a href="https://chaicode.com/" target="_blank">
      <img
        className={`absolute ${x} ${y} m-3 w-[${size}vmax] rounded-2xl cursor-pointer`}
        src="src\assets\chaicodelogo.png"
        alt="chaicodelogo"
      />
    </a>
  );
}

export default ChaiCode;
