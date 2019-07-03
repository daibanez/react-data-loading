import React, { useReducer, useEffect } from "react";
import callApiService from "./callApiService";

function stateReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "DATA_LOADED": {
      return {
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
}

function getDataHOC(Component) {
  function Wrapper(props) {
    const [state, dispatch] = useReducer(stateReducer, undefined);

    useEffect(() => {
      callApiService(dispatch);
    }, []);

    return <Component data={state} {...props} />;
  }
  return Wrapper;
}

export default getDataHOC;
