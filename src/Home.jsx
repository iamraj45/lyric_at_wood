import React from "react";
import Common from "./Common";
import web from "./images/def.png";

const Home = () => {
  return (
    <>
      <Common
        detail2="- "
        name="Welcome to the collection of poems"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
