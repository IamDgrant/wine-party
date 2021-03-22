import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "antd";
import { message } from "antd";
import "../components/styling/buttonStyle.css"


const FindHost = () => {
  const [search, setSearch] = useState("");
  const [sommelier, setSommelier] = useState(false);
  const [mixologist, setMixologist] = useState(false);

  return (
    <>
      <Button
        htmlType="submit"
        type="text"
        size="small"
        className="host-btn"
        style={{
          color: "#f9fbf2",
          fontFamily: "Montserrat",
          // fontWeight: "lighter",
          // backgroundColor: "#f9fbf2",
          // borderColor: "#f9fbf2",
        }}
        // onClick={}
      >
        Find a Host
      </Button>
      {/* <Modal
        title="Find a Host"
        // visible={}
        // onOk={}
        // onCancel={}
      >
        <SearchForm
          search={search}
          setSearch={setSearch}
          sommelier={sommelier}
          setSommelier={setSommelier}
          mixologist={mixologist}
          setMixologist={setMixologist}
        />
      </Modal> */}
    </>
  );
};

export default FindHost;
