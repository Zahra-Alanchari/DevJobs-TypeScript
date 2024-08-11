import React from "react";
import Moon from "../../icon/moon";
import SunIcon from "../../icon/SunIcon";
import LogoIcon from "../../icon/LogoIcon";
import ToggleIcon from "../../icon/ToggleIcon";
import { useSelector } from "react-redux";
import { Head, HeaderIcon } from "./Header.styled";

export default function Header() {
  const mode = useSelector((state) => state.job.lightMode);
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
