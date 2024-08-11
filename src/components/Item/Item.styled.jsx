import { Link } from "react-router-dom";
import styled from "styled-components";

export const Items = styled.ul`
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  padding: 22px;
  margin: 23px;
  border-radius: 5px;

  & li {
    margin-bottom: 15px;
    &:last-of-type {
      @media screen and (min-width: 768px) {
        margin-top: 35px;
      }
    }
  }
  & img {
    width: 34px;
    height: 20px;
    border-radius: 5px;
    vertical-align: middle;
    position: absolute;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
    height: 200px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 689px;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    width: 1110px;
    justify-content: center;
  }
`;
export const Detail = styled.li`
  color: #6e8098;
`;
export const Position = styled.li`
  color: ${({ darkMode }) => (darkMode ? "#19202d" : "white")};
`;
export const Location = styled.li`
  color: #5964e0;
`;
export const WrapperLink = styled(Link)`
  display: flex;
  flex-wrap: wrap;
`;
export const LogoContainer = styled.div`
  background-color: ${({ logoColor }) => logoColor || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 10px;
  position: absolute;
  margin-top: -40px;
  margin-left: -10px;
`;
