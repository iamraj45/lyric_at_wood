import React from "react";
import Common from "./Common";
import web from "./images/abc.jpg";

const About = () => {
  return (
    <>
      <Common
        detail2="My name is "
        detail=". I am a final year Computer Science student who loves reading poems and also writing them."
        name="Hello guys! "
        imgsrc={web}
        visit="/contact"
        btnname="Contact Me"
      />
    </>
  );
};

export default About;
