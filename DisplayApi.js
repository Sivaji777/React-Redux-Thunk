import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiFetching } from "./ActionApi";

function DisplayApi() {
  const [api, setApi] = useState();

  console.log(api);

  const select = useSelector((state) => state);
  console.log(select);
  const dispatch = useDispatch();

  useEffect(() => {
    setApi(select.Apidata);
  }, [select]);

  return (
    <div>
      <h1>Fetch Api</h1>
      <button type="button" onClick={() => dispatch(ApiFetching())}>
        Fetch Data
      </button>
      {
        api.map((ele, ind) => {
        return (
          <div>
            <h1>{ele.name}</h1>
          </div>
        );
      })
      }
    </div>
  );
}

export default DisplayApi;
