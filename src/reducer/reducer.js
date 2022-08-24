const initialData = {
  list: [],
};

const DataReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_DATA":
      const data = action.payload;
      return {
        ...state.list,
        list: [...state.list, data],
      };

    default:
      return state;
  }
};
export default DataReducers;
