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
          hoverable
          style={{ width: "25vw", height: "25vh"}}
          cover={
            <img
              alt="african-american woman Sommelier"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title={sessionHost.first_name} description={sessionHost.about} />
        </Card>
        <h1>
          
        </h1>
        
      </div>
    )
  );
};

export default RandomHost;
