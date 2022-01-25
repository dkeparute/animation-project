import React from "react";
import styled from "styled-components";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="logo">
        <img src="" alt=""></img>
      </div>

      <div className="nav-items">
        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#" className="active">
          Sign in
        </a>
      </div>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-items {
    display: flex;
    align-items: center;

    a {
      margin: 0 1rem;
    }

    a:hover {
      font-weight: bold;
    }

    .active {
      margin-left: 2rem;
      background-color: rgba(57, 95, 246, 0.6);
      padding: 0.9rem 1.5rem;
      border-radius: 8px;
      background: linear-gradient(130deg, #395ff6, #eb3fa9);
      cursor: pointer;
      transition: all 0.4s ease-in-out;

      &:hover {
        background: linear-gradient(120deg, #eb3fa9, #395ff6);
      }
    }

    .logo {
      img {
        width: 60px;
      }
    }
  }
`;
export default Navigation;
