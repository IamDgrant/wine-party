import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Checkbox = () => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const updateOne = () => setCheckedOne(!checkedOne);
  const updateTwo = () => setCheckedTwo(!checkedTwo);

  const dispatch = useDispatch();

  return (
    <>
      <label className="container">
        Sommelier
        <input
          type="checkbox"
          name="a"
          checked={checkedOne}
          onChange={updateOne}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Mixologist
        <input
          type="checkbox"
          name="b"
          checked={checkedTwo}
          onChange={updateTwo}
          //   disabled={true}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

export default Checkbox;
