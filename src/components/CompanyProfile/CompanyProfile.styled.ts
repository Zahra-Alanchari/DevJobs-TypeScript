import styled from "styled-components";

export const Profile = styled.div<{darkMode:boolean}>`
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  width: 327px;
  height: 205px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 5;
  margin: 0 auto;
  border-radius: 5px;
  & a {
    width: 147px;
    height: 48px;
    background-color: ${({ darkMode }) =>
      darkMode ? "#939bf466" : " #28324366"};
    color: #5964e0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
  @media screen and (min-width: 768px) {
    width: 689px;
    height: 140px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
export const LogoContainer = styled.div<{logoColor?:string}>`
  background-color: ${({ logoColor }) => logoColor || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 10px;
  position: absolute;
  width: 50px;
  height: 50px;
  left: 157px;
  top: -24px;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
    left: 42px;
    top: 0px;
  }
  @media screen and (min-width: 1440px) {
    width: 140px;
    height: 140px;
    left: 377px;
  }

  & img {
    @media screen and (min-width: 768px) {
      width: 81px;
      height: 21px;
    }
  }
`;

export const CompanySite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
  }
`;
