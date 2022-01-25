import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import human from "../img/human.png";
import button1 from "../img/button1.png";
import button2 from "../img/button2.png";
import CtaButton from "../Components/CtaButton";

function MainContent() {
  return (
    <MainContentStyled>
      <Navigation />
      <div className="content">
        <div className="left">
          <h1 className="gradientText">We promote artists</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            saepe corporis cumque ipsa recusandae consequuntur consectetur iure,
            odit nisi quo, quis mollitia rem alias explicabo!
          </p>
          <div className="btns-con">
            <CtaButton name={"discover more"} />
          </div>
        </div>
        <div className="right">
          <img src={human} alt="human"></img>
          <img className="button1" src={button1} alt="button" />
          <img className="button2" src={button2} alt="button"></img>
        </div>
      </div>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;

    .btns-con {
      margin-top: 2rem;
    }

    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      h1 {
        padding: 1.8rem 0;
        margin-top: -400px;
        font-size: 50px;
        text-transform: uppercase;
      }
    }
    .right {
      img {
        position: absolute;
        right: -11%;
        bottom: -1%;
        width: 90%;
      }
      .button1 {
        position: fixed;
        width: 40%;
        right: 10%;
        bottom: 12%;
        animation: spin 20s linear infinite;
      }
      .button2 {
        width: 25%;
        right: -1%;
        bottom: 34%;
      }
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default MainContent;
