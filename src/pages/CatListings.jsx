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
  console.log(apiLimit);
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
          {page > 1 || apiLimit - 1 > cat.totalItems ? (
            <div
              className=" h-[80vh] w-[20%] bg-white rounded-r-3xl cursor-pointer"
              onClick={() => {
                setApiLimit(apiLimit - 3);
                setPage(page - 1);
              }}
            ></div>
          ) : null}
          {cat.data.slice(page * 3 - 3, page * 3).map((value, index) => {
            console.log(value);
            return <CatCard key={index} cat={value} />;
          })}
          {cat.data.length > 2 && apiLimit < cat.totalItems ? (
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
