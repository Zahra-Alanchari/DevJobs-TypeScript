import React from "react";
import { useSelector } from "react-redux";
import { Head, HeaderIcon } from "./Header.styled";
import { RootState } from "../../Type/type";
import SunIcon from "../../icon/SunIcon";
import LogoIcon from "../../icon/LogoIcon";
import ToggleIcon from "../../icon/ToggleIcon";
import Moon from "../../icon/moon";

export default function Header() {
  const mode = useSelector((state:RootState) => state.job.lightMode);
  return (
    <Head darkMode={mode}>
      <HeaderIcon>
        <LogoIcon />
        <SunIcon />
        <ToggleIcon />
        <Moon />
      </HeaderIcon>
    </Head>
  );
}
