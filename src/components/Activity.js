import React from "react";
import { useDispatch } from "react-redux";

const Activity = ({ name, duration }) => {
  const dispatch = useDispatch();

  const deleteActivity = () => {
    dispatch({
      type: "DELETE_ACTIVITY",
      payload: {
        name: { name },
      },
    });
  };

  return (
    <div className={"activity-wrapper"}>
      <p>
        Activity: {name}. Duration: {duration}
      </p>
      <button onClick={deleteActivity}>Delete</button>
    </div>
  );
};

export default Activity;
