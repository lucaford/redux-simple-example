const initialState = [
  {
    id: 1,
    name: "gym",
    duration: "2 hours",
  },
];

const activitiesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_ACTIVITY":
      return [
        ...state,
        {
          id: 5,
          name: payload.name,
          duration: payload.duration,
        },
      ];
    case "DELETE_ACTIVITY":
      const copyState = [...state];

      const index = copyState.findIndex((item) => item.name === payload.name);

      copyState.slice(index, 1);

      return [...copyState];
    default:
      return state;
  }
};

export default activitiesReducer;
