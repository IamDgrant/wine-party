import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "antd";
import { message } from "antd";
import SearchForm from "../components/auth/forms/SearchHostForm"
import "../components/styling/buttonStyle.css";

const FindHost = () => {
  const dispatch = useDispatch();
  const sessionHosts = useSelector((state) => state.host.host);

  const [search, setSearch] = useState("");
  const [sommelier, setSommelier] = useState(false);
  const [mixologist, setMixologist] = useState(false);
  const [redWine, setRedWine] = useState(false);
  const [whiteWine, setWhiteWine] = useState(false);
  const [roseWine, setRoseWine] = useState(false);
  const [bourbon, setbourbon] = useState(false);
  const [brandy, setBrandy] = useState(false);
  const [cognac, setCognac] = useState(false);
  const [gin, setGin] = useState(false);
  const [liqeurs, setLiqeurs] = useState(false);
  const [rum, setRum] = useState(false);
  const [scotch, setScotch] = useState(false);
  const [tequila, setTequila] = useState(false);
  const [vodka, setVodka] = useState(false);
  const [whiskey, setWhiskey] = useState(false);

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
        Find Host
      </Button>
      <Modal
        title="Find Host"
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
      </Modal>
    </>
  );
};

export default FindHost;
