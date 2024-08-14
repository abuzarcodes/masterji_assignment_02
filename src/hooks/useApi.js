import React, { useEffect, useState } from "react";
import axios from "axios";

function useApi(urlPath, reload) {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const Data = await axios(urlPath);
        setData(Data.data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        clg(error);
      }
    })();
  }, [reload]);

  return [data, Error, Loading];
}

export default useApi;
