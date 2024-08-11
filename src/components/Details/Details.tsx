import React from "react";
import Header from "../Header/Header";
import CompanyProfile from "../CompanyProfile/CompanyProfile";
// import JobDetails from "../JobDetails/JobDetails";
import { useSelector } from "react-redux";
import { MainContent } from "./Details.styled";
import { RootState } from "../../Type/type";
import JobDetails from "../JobDetails/JobDetails";



export default function Details() {
  const mode = useSelector((state:RootState) => state.job.lightMode);
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
