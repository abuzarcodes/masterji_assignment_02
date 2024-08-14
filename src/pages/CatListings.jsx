import React from "react";
import useApi from "../hooks/useApi";
import CatCard from "../components/CatCard";
import ChaiCode from "../components/ChaiCode";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";

function CatListings() {
  const [cat, error, loading] = useApi(
    "https://api.freeapi.app/api/v1/public/cats?page=1&limit=65"
  );

  if (error) {
    return <ErrorPage />;
  }
  if (loading) {
    return <Loading />;
  }
  console.log(cat.data);
  return (
    <div className="w-full h-screen bg-[url(src/assets/catBack.svg)] bg-no-repeat bg-cover">
      <div className="fore w-full h-screen absolute bg-black/20">
        <div className="nav relative w-full h-[15vh] flex items-center p-3">
          <h1 className="font-sans text-[48px] font-bold text-white">
            Cats around us
          </h1>
          <ChaiCode y={"top-0"} x={"right-0"} size={5} />
        </div>
        <div className="flex justify-evenly overflow-x-auto">
          {cat.data.map((value, index) => {
            return <CatCard key={index} cat={value} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CatListings;
