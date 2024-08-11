import styled from "styled-components";

export const JobDescription = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  border-radius: 5px;
  width: 327px;
  position: absolute;
  top: 220px;
  left: 28px;
  display: flex;
  height: 1600px;
  z-index: 5;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 689px;
    height: 1150px;
    left: 38px;
  }
  @media screen and (min-width: 1440px) {
    left: 377px;
  }
`;
export const Items = styled.ul`
  padding: 22px;
  margin: 23px;
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
export const ApplyButton = styled.button`
  width: 279px;
  height: 48px;
  position: absolute;
  top: 130px;
  left: 20px;
  border-radius: 5px;
  background-color: #5964e0;
  color: white;
  @media screen and (min-width: 768px) {
    width: 141px;
    top: 50px;
    left: 500px;
  }
`;
export const ApplyButtonend = styled.button`
  width: 279px;
  height: 48px;
  border-radius: 5px;
  background-color: #5964e0;
  color: white;
  &::after {
    clear: both;
    display: block;
    content: "";
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Introduction = styled.div`
  width: 300px;
  height: auto;
  position: absolute;
  top: 210px;
  left: 23px;
  color: #6e8098;
  @media screen and (min-width: 768px) {
    width: 593px;
  }
`;
export const Title = styled.h3`
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  margin: 30px 0;
`;
export const ListDec = styled.li`
  list-style-type: decimal;
  margin: 15px;
`;
export const ListDic = styled.li`
  list-style-type: disc;
  margin: 15px;
`;
export const Footer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    width: 768px;
    position: absolute;
    height: 96px;
    background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
    top: 110%;
    left: -38px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    left: -374px;
  }
`;
export const FooterApply = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 141px;
    height: 48px;
    border-radius: 5px;
    background-color: #5964e0;
    color: white;
  }
`;
export const FooterPosition = styled.div`
  display: none;
  color: ${({ darkMode }) => (darkMode ? "#19202d" : "white")};
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;