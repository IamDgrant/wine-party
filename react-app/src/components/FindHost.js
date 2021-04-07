import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import seeHost from "../store/host"
import { Modal, Button } from "antd";
import { message } from "antd";
import SearchForm from "../components/auth/forms/SearchHostForm"
import "../components/styling/buttonStyling.css";

const FindHost = () => {
  const dispatch = useDispatch();
  // const sessionHosts = useSelector((state) => state.host.host);
  const sessionHostId = useSelector((state) =>
  state.host.host ? state.host.host : null
);

  const [search, setSearch] = useState("");
  const [sommelier, setSommelier] = useState(false);
  const [mixologist, setMixologist] = useState(false);
  const [redWine, setRedWine] = useState(false);
  const [whiteWine, setWhiteWine] = useState(false);
  const [roseWine, setRoseWine] = useState(false);
  const [bourbon, setBourbon] = useState(false);
  const [brandy, setBrandy] = useState(false);
  const [cognac, setCognac] = useState(false);
  const [gin, setGin] = useState(false);
  const [liqueurs, setLiqueurs] = useState(false);
  const [rum, setRum] = useState(false);
  const [scotch, setScotch] = useState(false);
  const [tequila, setTequila] = useState(false);
  const [vodka, setVodka] = useState(false);
  const [whiskey, setWhiskey] = useState(false);

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(seeHost(search, sommelier, mixologist, sessionHostId)).then(
      (res) => {
        if (res.Host === "Not found") {
          message.error(`User ${search} not found`);
        }
        // else {
        //   message.success(`User ${search} added to Event!`);
        // }
      }
    );
  };

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
