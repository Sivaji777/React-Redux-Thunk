const InitialState = {
  Data: [],
};

export const ReducerApi = (state = InitialState, action) => {

    console.log(action);

  switch (action.type) {
    case "FETCH_API":
      return { Apidata: action.apiData };
    case "SUCCESS_API":
      return { Apidata: action.apiData };
    default:
      return state;
  }
};
