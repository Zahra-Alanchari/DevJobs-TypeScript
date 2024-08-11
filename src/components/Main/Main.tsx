import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import Item from "../Item/Item";
// import { MainBody, MainContent } from "./Main.styled";
import { RootState } from "../../Type/type";
import { MainBody, MainContent } from "./Main.styled";



export default function Main() {
  const mode = useSelector((state:RootState) => state.job.lightMode);

  return (
    <div>
      <Header />
      <MainContent>
        <MainBody darkMode={mode}>
          <Item />
        </MainBody>
      </MainContent>
    </div>
  );
}
