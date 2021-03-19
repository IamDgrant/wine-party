import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seeRandomHost } from "../store/host";
import { Card } from "antd";

const { Meta } = Card;

const RandomHost = () => {
  const dispatch = useDispatch();
  const sessionHost = useSelector((state) => state.host.host);

  useEffect(() => {
    dispatch(seeRandomHost());
  }, [dispatch]);

  return (
    sessionHost && (
      <div className="random-host">
        <Card
          size="small"
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
          title={`${sessionHost.first_name} ${sessionHost.last_name}`}
          // extra={<a href="#">More</a>}
          style={{ width: 250 }}
        >
          <p>Rated: ⭐⭐⭐⭐</p>
          {sessionHost.about}
          <p>Add to your Party!</p>
        </Card>
      </div>
    )
  );
};

export default RandomHost;
