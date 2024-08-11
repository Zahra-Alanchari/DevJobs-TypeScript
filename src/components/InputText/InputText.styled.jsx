import styled from "styled-components";

export const TextBtn = styled.input`
  width: 315px;
  height: 80px;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(205, 202, 202, 0.809);
  position: absolute;
  top: -26px;
  left: 22px;
  z-index: 1;
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  &::placeholder {
    /* padding-left: 18px; */
    color: #6e8098;
  }
  &[placeholder] {
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
    padding-left: 35px;
  }
  @media screen and (min-width: 768px) {
    width: 190px;
    height: 80px;
    position: static;
    border-radius: 0;
    top: 0;
    left: 33px;
    border-right: 1px solid gray;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 80px;
    left: 145px;
  }
`;
export const LocBtn = styled.input`
  display: none;
  border-radius: 5px;
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  &::placeholder {
    color: #6e8098;
  }
  &[placeholder] {
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
    padding-left: 50px;
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 150px;
    height: 80px;
    top: 0;
    border-right: 1px solid gray;
    border-radius: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 80px;
  }
`;
export const SearchIconbtn = styled.button`
  background-color: #5964e0;
  height: 48px;
  width: 48px;
  position: absolute;
  top: -10px;
  right: 55px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  & span:last-child {
    display: none;
    @media screen and (min-width: 768px) {
      display: inline-block;
      color: white;
    }
  }
  & span:first-child {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 48px;
    right: 76px;
  }
  @media screen and (min-width: 1440px) {
    width: 123px;
    height: 48px;
    right: 187px;
  }
`;

export const InputContainer = styled.div`
  & input + label {
    display: none;
    margin-right: 82px;
    @media screen and (min-width: 768px) {
      background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
      width: 240px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ darkMode }) => (darkMode ? "#19202D" : "white")};
    }
    @media screen and (min-width: 1440px) {
      width: 415px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 640px;
    height: 80px;
    border-radius: 5px;
    background-color: ${({ darkMode }) =>
      darkMode ? "white" : "#19202D"};
    position: absolute;
    top: -26px;
    left: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  @media screen and (min-width: 1440px) {
    width: 1110px;
    height: 80px;
    left: 170px;
  }
`;
export const Dialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 280px;
  height: 217px;
`;
export const OverLay = styled.div`
  position: fixed;
  top: 0;
  width: 375px;
  margin: 0 auto;
  height: 100%;
  background: ${({ darkMode }) => (darkMode ? "#bab7b786" : "#19202d99")};
  z-index: 99;
`;
export const CloseModalBtn = styled.button`
  background-color: #5964e0;
  height: 48px;
  width: 289px;
  position: absolute;
  top: 180px;
  right: 16px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;
export const ModalLocBtn = styled.input`
  position: absolute;
  left: 0;
  border-bottom: 1px solid lightgray;
  width: 320px;
  height: 80px;
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  &::placeholder {
    padding-left: 50px;
    color: #6e8098;
  }
  &[placeholder] {
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  }
`;
export const WorkTime = styled.label`
  position: absolute;
  top: 126px;
  left: 40px;
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
`;