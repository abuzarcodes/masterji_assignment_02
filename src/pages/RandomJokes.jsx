import React from "react";
import useApi from "../hooks/useApi";
import ChaiCode from "../components/ChaiCode";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";
import { CiHeart } from "react-icons/ci";

function RandomJokes() {
  const [joke, error, loading] = useApi(
    "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
  );
  if (error) {
    return <ErrorPage />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen bg-[url(/assets/back.svg)] bg-no-repeat bg-cover py-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-xl border bg-black text-white border-gray-300 rounded-2xl py-3 px-5">
        <div className="flex">
          <div className="mr-2">
            <img className="rounded-full" src="/assets/elon.svg" alt="Elon" />
          </div>
          <div>
            <div className="flex space-x-1">
              <span className="font-bold">Elon Musk</span>
              <span className="text-blue-500 flex justify-center items-center">
                <img src="/assets/twitterVerification.svg" alt="" />
              </span>
            </div>
            <div className="text-gray-500 leading-4">@elonmusk</div>
          </div>
          <div className="text-blue-500 ml-auto">
            <img src="/assets/dropDown.svg" alt="Verification Icon" />
          </div>
        </div>
        <div className="py-3">
          <p className="text-lg">{joke.content}</p>
          <div className="flex">
            <p className="text-gray-500 pt-1">
              11:18 PM · Jul 30, 2024 ·{" "}
              <span className="text-white font-semibold">20.5M</span> Views
            </p>
          </div>
        </div>
        <div className="flex justify-evenly items-center pt-3 text-gray-500 border-t border-gray-300 text-[15px]">
          <div className="flex ">
            <img src="/assets/twitterLikes.svg" alt="" />
            <span>{randomNumberGen()}</span>
          </div>
          <div className="flex ">
            <img src="/assets/retweet.svg" alt="retweet" />
            <span>{randomNumberGen()}</span>
          </div>
          <div className="flex ">
            <img src="/assets/twitterComment.svg" alt="Comments" />
            <span>{randomNumberGen()}</span>
          </div>
          <div className="flex">
            <img src="/assets/bookmark.svg" alt="bookmark" />
            <span>{randomNumberGen()}</span>
          </div>
          <div className="flex">
            <img src="/assets/upload.svg" alt="upload" />
          </div>
        </div>
      </div>
      <ChaiCode y={"bottom-0"} x={"right-0"} />
    </div>
  );
}

export default RandomJokes;

function randomNumberGen() {
  const randomNum = Math.floor(Math.random() * 400 + 1);
  return randomNum + "k";
}
