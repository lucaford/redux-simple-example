import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddActivity = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    duration: "",
  });

  const handleChange = (e) => {
    e.persist();
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const add = () => {
    dispatch({
      type: "CREATE_ACTIVITY",
      payload: {
        name: data.name,
        duration: data.duration,
      },
    });
  };

  return (
    <div className="add">
      <div className="input-section">
        <p>Activity:</p>
        <input
          onChange={(e) => handleChange(e)}
          placeholder="Activity name ..."
          name="name"
        />
      </div>
      <div className="input-section">
        <p>Duration:</p>
        <input
          onChange={(e) => handleChange(e)}
          placeholder="Duration ..."
          name="duration"
        />
      </div>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AddActivity;
