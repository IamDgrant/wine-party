import React, {useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, notification } from "antd";
import "../components/styling/userHomeContentStyling.css";

const UserHomeContent = () => {
  const sessionUser = useSelector((state) => state.session.user);
  // const sessionHostId = useSelector((state) =>
  //   state.host.host ? state.host.host : null
  // );

  // const [search, setSearch] = useState("");
  // const [sommelier, setSommelier] = useState(false);
  // const [mixologist, setMixologist] = useState(false);

  // const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      openNotification("topLeft");
    }, 750);
  });

  // const onSearch = async (e) => {
  //   e.preventDefault();
  //   history.push(
  //     `/search?search=${search}&sommelier=${sommelier}&mixologist=${mixologist}`
  //   );
  // };

  // const updateSearch = (e) => setSearch(e.target.value);
  // const updateSommelier = () => setSommelier(!sommelier);
  // const updateMixologist = () => setMixologist(!mixologist);
  //   const updateRedWine = () => setIsRedWine(!isRedWine);
  //   const updateWhiteWine = () => setIsWhiteWine(!isWhiteWine);
  //   const updateRoseWine = () => setIsRoseWine(!isRoseWine);

  const close = () => {
    // console.log(
    //   "Notification was closed. Either the close button was clicked or duration time elapsed."
    // );
  };

  const openNotification = (placement) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          history.push("/events", notification.close(key));
        }}
      >
        Add Event
      </Button>
    );
    notification.open({
      message: `WELCOME TO WINE PARTY ${sessionUser.first_name.toUpperCase()}!`,
      description: "Let's get started by adding a new event.",
      btn,
      key,
      duration: 5,
      placement: "topLeft",
      top: "125px",
      onClose: close,
    });
  };

  return (
    <div className="userHome-content-container">
      <div className="user-home-image-container">
        
        <div className="user-home-image-inner"></div>
      </div>
    </div>
  );
};
export default UserHomeContent;
