import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seeEvent, deleteEvent } from "../store/event";
import { CSSGrid, measureItems, makeResponsive } from "react-stonecutter";
import TimeUntilEvent from "../components/TimeLeft";
import { Card, Col, Row, Modal, Button, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// import "./styling/futureEventStyle.css";

const FutureEvent = ({ id }) => {
  const [isSeeEventModalVisible, setSeeEventModalVisible] = useState(false);
  const dispatch = useDispatch();

  const sessionEvent = useSelector((state) => state.event.event);
  const sessionHost = useSelector((state) => state.host.host);

  const getEvent = (i) => () => {
    setModalEvent(i);
    showSeeEventModal(true);
  };

  const showSeeEventModal = () => {
    setSeeEventModalVisible(true);
  };

  const seeEventHandleOk = () => {
    setSeeEventModalVisible(false);
  };

  const seeEventHandleCancel = () => {
    setSeeEventModalVisible(false);
  };

  useEffect(() => {
    if (!id) dispatch(seeEvent());
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [dispatch, id]);

  const todaysDate = new Date();
  const futureEvents = sessionEvent?.filter((events) => {
    return new Date(events.event_date) > todaysDate;
  });

  const Grid = measureItems(CSSGrid)

  const party = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="glass-cheers"
      class="svg-inline--fa2 fa-glass-cheers fa-w-20"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        fill="#00000"
        d="M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"
      ></path>
    </svg>
  );

  // const modalSessionEvents = (sessionEvent.map(sessionEvent))

  const [modalEvent, setModalEvent] = useState(0);

  const { Meta } = Card;

  return (
    <>
      <div className="event-results">
        <div
          className="upcoming-events"
          style={{
            color: "#0e1c36",
            fontFamily: "Bebas Neue",
            fontSize: "4vh",
            width: "fit-content",
          }}
        >
          <h1>Upcoming Events</h1>
        </div>
        <Grid
          className="grid"
          component="ul"
          columns={3}
          columnWidth={250}
          itemHeight={250}
          itemWidth={50}
          duration={0}
        >
          {sessionEvent &&
            futureEvents?.map((futureEvent, i) => (
              <div className="event-cards" key={futureEvent.id}>
                <button
                  htmlType="submit"
                  type="text"
                  size="medium"
                  style={{
                    color: "#0e1c36",
                    backgroundColor: "#ffff",
                    size: "large",
                    borderColor: "#f9fbf2",
                    fontFamily: "Bebas Neue",
                  }}
                  onClick={getEvent(i)}
                >
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt={futureEvent.event_date.slice(0, 16)}
                        src="https://images.pexels.com/photos/2324423/pexels-photo-2324423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      />
                      // <img
                      //   alt={futureEvent.event_date.slice(0, 16)}
                      //   src="https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      // />
                    }
                  >
                    <Meta
                      title={futureEvent.event_name}
                      // description={<TimeUntilEvent />}
                    />
                  </Card>
                </button>
              </div>
            ))}
          <Modal
            // title={futureEvent.event_name}
            visible={isSeeEventModalVisible}
            onOk={seeEventHandleOk}
            onCancel={seeEventHandleCancel}
            style={{
              backgroundColor: "#f9fbf2",
              color: "#0e1c36",
            }}
          >
            <Card
              // style={{ width: 240 }}
              // cover={
              //   <img
              //     alt={futureEvent.event_date.slice(0, 16)}
              //     src="../assets/images/shutterstock_1006797736.jpeg"
              //   />
              // }
              actions={[<EditOutlined key="edit" />]}
            >
              {futureEvents && futureEvents.length > 0 && (
                <Meta
                  avatar={<Avatar src={party} />}
                  title={futureEvents[modalEvent].event_date.slice(0, 16)}
                  description={futureEvents[modalEvent].event_city}
                  // description="This is the description"
                />
              )}
            </Card>
          </Modal>
        </Grid>
      </div>
      {/* </div> */}
    </>
  );
};

export default FutureEvent;
