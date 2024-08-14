import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import ChaiCode from "../components/ChaiCode";
import BioField from "../components/BioField";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";

function RandomUsers() {
  const [reload, setReload] = useState(0);
  const [user, Error, loading] = useApi(
    "https://api.freeapi.app/api/v1/public/randomusers/user/random",
    reload
  );
  if (Error) {
    return <ErrorPage />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full h-screen bg-[url(src/assets/backUser.svg)] bg-no-repeat bg-cover bg-black flex justify-center items-center">
      <div className="card w-[30%] h-[80%] p-3 rounded-2xl bg-[#B6B3F3] relative border-white border-[5px]">
        <div className="nav w-full flex justify-between items-center">
          <span className="cursor-pointer">
            <img src="src/assets/arrow.svg" alt="" />
          </span>
          <p>Profile Overview</p>
          <span
            className="cursor-pointer"
            onClick={() => setReload(reload + 1)}
          >
            <img src="src/assets/refresh.svg" alt="" />
          </span>
        </div>
        <div className="profile w-full  flex justify-center items-center flex-col gap-y-2 my-3">
          <div className="profilePic relative p-2">
            <div className="title bg-black min-w-6 h-4 text-white text-center text-[10px] rounded-xl absolute right-0 top-0 ">
              {user.name.title}
            </div>
            <img
              className="w-[100px] h-[100px] rounded-full"
              src={user.picture.large}
              alt=""
            />
          </div>
          <p className="name text-[24px] font-serif font-semibold">
            {user.name.first + " " + user.name.last}
          </p>
          <p className="userName text-[12px] font-sans">
            {user.login.username}
          </p>
        </div>
        <hr className="border-[#00000014]" />
        <div className="locateAndContact flex m-3 justify-center items-center gap-5">
          <a
            href={`https://www.google.com/maps/@${user.location.coordinates.latitude},${user.location.coordinates.longitude}`}
            target="_blank"
            className="location flex gap-1  items-center cursor-pointer"
          >
            {" "}
            <img src="src/assets/location.svg" alt="" />
            <span className="font-medium font-sans text-[#000000B2] text-[9px]">
              location
            </span>
          </a>

          <a
            href={`tel:${user.cell}`}
            className="contact flex gap-1 items-center cursor-pointer"
          >
            <img src="src/assets/call.svg" alt="" />
            <span className="font-medium font-sans text-[#000000B2] text-[9px]">
              call me
            </span>
          </a>
        </div>
        <hr className="border-[#00000014]" />
        <div className="bioData gap-y-3 w-full  my-3 flex justify-center items-center flex-wrap">
          <BioField small={"City"} big={user.location.city} />
          <BioField
            small={"Nationality"}
            big={countryCodeToFlagEmoji(user.nat) + "" + user.nat}
          />
          <BioField small={"Date of birth"} big={formatDate(user.dob.date)} />
          <BioField small={"Phone no."} big={user.phone} />
          <BioField
            small={"Time Zone"}
            big={shortenTimeZone(
              user.location.timezone.offset +
                " " +
                user.location.timezone.description
            )}
          />
          <BioField
            small={"Registered since"}
            big={formatDate(user.registered.date)}
          />
        </div>
        <ChaiCode y={"bottom-0"} x={"right-0"} size={5} />
      </div>
    </div>
  );
}

export default RandomUsers;

function formatDate(isoString) {
  const date = new Date(isoString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function shortenTimeZone(timeZoneString) {
  const parts = timeZoneString.split(",");
  const match = parts[0].match(/(\+\d{1,2}:\d{2}|\-\d{1,2}:\d{2})/);

  if (match) {
    const offset = match[0];
    const firstCity = parts[0].replace(offset, "").trim();
    return `${offset} ${firstCity}`;
  } else {
    return "Invalid format";
  }
}

function countryCodeToFlagEmoji(countryCode) {
  const code = countryCode.toUpperCase();
  const firstChar = String.fromCodePoint(code.charCodeAt(0) + 0x1f1e6 - 65);
  const secondChar = String.fromCodePoint(code.charCodeAt(1) + 0x1f1e6 - 65);
  return firstChar + secondChar;
}
