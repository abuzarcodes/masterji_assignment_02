import React from "react";
import CatTag from "./components/CatTag";

function CatCard({ cat }) {
  return (
    <div className="card bg-white rounded-3xl min-w-[30%] max-h-[80vh] overflow-hidden mx-3">
      <div className="image min-w-full h-1/2 bg-white">
        <img
          className="w-full h-full object-cover"
          src={cat.image}
          alt={cat.name}
        />
      </div>
      <div className="p-3 w-full h-1/2 relative">
        <h1 className="name text-[28px] font-medium">{cat.name}</h1>
        <p className="description text-[14px] max-h-[30%] overflow-hidden overflow-ellipsis">
          {cat.description}
        </p>
        <span className="origin font-semibold text-[14px] my-[1vh]">
          Origin
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="text-[14px font-normal">{cat.origin}</span>
        </span>
        <div className="tags lifeSpan font-semibold text-[14px] my-[1vh">
          Temprament:
          <div className="flex gap-3 items-center my-2">
            {threeTags(cat.temperament).map((value, index) => {
              return <CatTag temper={value} key={index} />;
            })}
          </div>
        </div>
        <div className="lifeSpan font-semibold text-[14px]">
          Life span
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="font-normal text-[14px]">{cat.life_span}</span>
        </div>
        <a
          href={cat.wikipedia_url}
          className="text-[#7D99E2] text-[14px] py-5 "
          target="_blank"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default CatCard;

function threeTags(string) {
  let tags = string.split(",");
  tags.splice(3, tags.length - 3);
  return tags;
}
