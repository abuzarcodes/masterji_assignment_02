import React, { useState } from "react";
import useApi from "../hooks/useApi";
import CatCard from "../components/CatCard";
import ChaiCode from "../components/ChaiCode";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";

function CatListings() {
  const [page, setPage] = useState(1);
  const [apiLimit, setApiLimit] = useState(3);
  const [cat, error, loading] = useApi(
    `https://api.freeapi.app/api/v1/public/cats?page=1&limit=${apiLimit}`,
    [apiLimit]
  );
  if (error) {
    return <ErrorPage />;
  }
  if (loading) {
    return <Loading />;
  }
  if (apiLimit - 2 >= cat.totalItems) {
    return (
      <div className="w-full h-screen bg-[url(/assets/catBack.svg)] flex justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <p className="text-[20vw] font-sans font-semibold">Empty</p>
          <button
            onClick={() => {
              setApiLimit(3);
              setPage(1);
            }}
            className="bg-blue-500 p-3 text-center rounded-2xl flex justify-center items-center hover:bg-blue-300 animate-bounce h-[50px] text-[30px]"
          >
            Return to page 1
          </button>
        </div>
      </div>
    );
  }
  console.log(cat.data);
  return (
    <div className="w-full h-screen bg-[url(/assets/catBack.svg)] bg-no-repeat bg-cover">
      <div className="fore w-full h-screen absolute bg-black/20">
        <div className="nav relative w-full h-[15vh] flex items-center p-3">
          <h1 className="font-sans text-[48px] font-bold text-white">
            Cats around us
          </h1>
          <ChaiCode y={"top-0"} x={"right-0"} />
        </div>
        <div className="flex justify-evenly overflow-x-auto">
          {page > 1 ? (
            <div
              className=" h-[80vh] w-[20%] bg-white rounded-r-3xl cursor-pointer"
              onClick={() => {
                setPage(page - 1);
              }}
            ></div>
          ) : null}
          {cat.data.slice(page * 3 - 3, page * 3).map((value, index) => {
            console.log(value);
            return <CatCard key={index} cat={value} />;
          })}
          {cat.data.length > 2 ? (
            <div
              className=" h-[80vh] w-[20%] bg-white rounded-l-3xl cursor-pointer"
              onClick={() => {
                setApiLimit(apiLimit + 3);
                setPage(page + 1);
              }}
            ></div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CatListings;
