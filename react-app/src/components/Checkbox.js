import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Checkbox = () => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const updateOne = () => setCheckedOne(!checkedOne);
  const updateTwo = () => setCheckedTwo(!checkedTwo);

  const dispatch = useDispatch();

  console.log(checkedOne, checkedTwo);

  return (
    <>
      <label class="container">
        Sommelier
        <input
          type="checkbox"
          name="a"
          checked={checkedOne}
          onChange={updateOne}
        />
        <span class="checkmark"></span>
      </label>
      <label class="container">
        Mixologist
        <input
          type="checkbox"
          name="b"
          checked={checkedTwo}
          onChange={updateTwo}
          //   disabled={true}
        />
        <span class="checkmark"></span>
      </label>
    </>
  );
};

export default Checkbox;
