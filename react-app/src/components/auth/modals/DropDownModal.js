import React, { useState } from "react";
import { useSelector, useEffect } from "react-redux";
import Popper from "popper.js";
import DropDownModal from "../../styling/DropDownModal.css";

const Dropdown = ({ color }) => {
  // const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-transparent")
    : (bgColor = "bg-" + color + "-500");


    // useEffect(() => {
    //   // else {
    //   //   dispatch();
    //   //   setData(id);
    //   // }
    // }, [dispatch]);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="btn relative inline-flex align-middle w-full">
            Welcome, 
            <button
              className={
                "name-btn text-white underline hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " +
                bgColor
              }
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >{" "}
              {color === "white"
                ? `${sessionUser.firstName}` 
                : color + " Dropdown"}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm dropMenu py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Events
              </a>
              <a
                href="#pablo"
                className={
                    
                  "text-sm dropMenu py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Find a Host
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Profile Settings
              </a>
              {/* <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" /> */}
              {/* <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                Seprated link
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}
