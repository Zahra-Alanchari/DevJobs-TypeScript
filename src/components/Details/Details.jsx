import React from "react";
import Header from "../Header/Header";
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import JobDetails from "../JobDetails/JobDetails";
import { useSelector } from "react-redux";
import { MainContent } from "./Details.styled";



export default function Details() {
  const mode = useSelector((state) => state.job.lightMode);
  return (
    <>
      <Header />
      <MainContent darkMode={mode}>
        <CompanyProfile />
        <JobDetails />
      </MainContent>
    </>
  );
}
