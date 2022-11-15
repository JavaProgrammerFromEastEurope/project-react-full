import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const arg = 1;
    console.log(`Updated ${arg}`);
  }, []);

  return <h1>This app has been created for educational purposes.</h1>;
};

export default About;
