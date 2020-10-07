import React, { useState } from "react";
import { useSelector } from "react-redux";

import Activity from "./Activity";
import AddActivity from "./AddActivity";

const Workouts = () => {
  const [add, setAdd] = useState(false);
  const activities = useSelector((state) => state.activities);

  return (
    <div className={"workouts-wrapper"}>
      <h2>My Workouts</h2>
      <button onClick={() => setAdd(!add)}>Add Activity</button>
      {add && <AddActivity />}
      {activities.map((activity, index) => (
        <Activity
          key={index}
          id={activity.id}
          name={activity.name}
          duration={activity.duration}
        />
      ))}
    </div>
  );
};

export default Workouts;
