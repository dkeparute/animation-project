import React from "react";
import worldGlobe from "../img/marketing.mp4";
import styled from "styled-components";
import circles from "../img/circles.svg";
import { InnerLayout } from "../Layouts";
import MainContent from "./MainContent";

function MainArea() {
  return (
    <MainAreaStyled>
      <video src={worldGlobe} muted playsInline autoPlay loop></video>
      <img src={circles} alt="circles" className="overlay" />
      <InnerLayout>
        <MainContent />
      </InnerLayout>
    </MainAreaStyled>
  );
}

const MainAreaStyled = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  overflow: hidden;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    right: -400px;
    top: -300px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

export default MainArea;
