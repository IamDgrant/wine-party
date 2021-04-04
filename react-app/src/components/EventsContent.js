import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeEvent, deleteEvent } from "../store/event";
import { Collapse, Button, Modal } from "antd";
import "../components/styling/eventsContentStyling.css";
import party from "../assets/images/jason-leung-Xaanw0s0pMk-unsplash.jpeg";
// import party from "../assets/images/shutterstock_1006797736.jpeg";

const EventsContent = ({ id }) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteEditModalVisible] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const sessionEvent = useSelector((state) => state.event.event);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) dispatch(seeEvent());
    // else {
    //   dispatch();
    //   setData(id);
    // }
  }, [id]);

  const showEditModal = () => {
    setIsEditModalVisible(true);
  };

  const editHandleOk = () => {
    setIsEditModalVisible(false);
  };

  const editHandleCancel = () => {
    setIsEditModalVisible(false);
  };

  const showDeleteModal = () => {
    setIsDeleteEditModalVisible(true);
  };

  const deleteHandleOk = () => {
    setIsDeleteEditModalVisible(false);
  };

  const deleteHandleCancel = () => {
    setIsDeleteEditModalVisible(false);
  };

  const { Panel } = Collapse;

  const callback = (key) => {
    console.log(key);
  };

  const todaysDate = new Date();

  const upcomingEvents = sessionEvent.filter((events) => {
    return new Date(events.event_date) > todaysDate;
  });
  const pastEvents = sessionEvent.filter((events) => {
    return new Date(events.event_date) < todaysDate;
  });

  const trashButton = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="trash-alt"
      class="svg-inline--fa fa-trash-alt fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="#f62713"
        d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
      ></path>
    </svg>
  );

  const editButton = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="edit"
      class="svg-inline--fa fa-edit fa-w-18"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="#058532"
        d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
      ></path>
    </svg>
  );

  return (
    <div className="events-content-container">
      <div className="all-events">
        <div className="upcoming-events">
          <div className="events-title">Upcoming Events</div>
          <div ClassName="events-list">
            <Collapse defaultActiveKey={["1"]} onChange={callback}>
              {upcomingEvents &&
                upcomingEvents.map((event) => (
                  <Panel
                    header={event.event_name}
                    key={event.id}
                    style={{ fontWeight: "900" }}
                  >
                    <div>
                      <div>
                        <img src={party} alt="neon lights"></img>
                      </div>
                      <div>
                        <p>
                          {event.event_city}, {event.event_state}
                        </p>
                      </div>
                    </div>
                    <p>{event.event_date.slice(0, 16)}</p>
                    <div className="edit-delete">
                      <div className="edit-btn">
                        <Button
                          type="link"
                          className="edit-button"
                          onClick={showEditModal}
                        >
                          {editButton}
                        </Button>
                        <Modal
                          title="Edit Event"
                          visible={isEditModalVisible}
                          okText="Submit"
                          onOk={editHandleOk}
                          onCancel={editHandleCancel}
                          style={{
                            backgroundColor: "#f9fbf2",
                            color: "#0e1c36",
                          }}
                        >
                          {/* <Event /> */}
                        </Modal>
                      </div>
                      <div className="trash-btn">
                        <Button
                          type="link"
                          className="trash-button"
                          onClick={showDeleteModal}
                        >
                          {trashButton}
                        </Button>
                        <Modal
                          title="Delete Event"
                          visible={isDeleteModalVisible}
                          okText="Submit"
                          onOk={deleteHandleOk}
                          onCancel={deleteHandleCancel}
                          // style={{
                          //   backgroundColor: "#f9fbf2",
                          //   color: "#0e1c36",
                          // }}
                        >
                          {/* <Event /> */}
                        </Modal>
                      </div>
                    </div>
                  </Panel>
                ))}
            </Collapse>
          </div>
        </div>
        <div className="previous-events">
          <div className="events-title">Previous Events</div>
          <div ClassName="events-list">
            <Collapse defaultActiveKey={["1"]} onChange={callback}>
              {pastEvents &&
                pastEvents.map((event) => (
                  <Panel
                    header={event.event_name}
                    key={event.id}
                    style={{ fontWeight: "900" }}
                  >
                    <div>
                      <div>
                        <img
                          style={{ opacity: ".3" }}
                          src={party}
                          alt="neon lights"
                        ></img>
                      </div>
                      <div>
                        <p>
                          {event.event_city}, {event.event_state}
                        </p>
                      </div>
                    </div>
                    <p>{event.event_date.slice(0, 16)}</p>
                  </Panel>
                ))}
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsContent;
