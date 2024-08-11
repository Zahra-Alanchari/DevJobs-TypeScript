import React from "react";
import { useSelector } from "react-redux";
import { CompanySite, LogoContainer, Profile } from "./CompanyProfile.styled";
export default function CompanyProfile() {
  const mode = useSelector((state) => state.job.lightMode);
  const data = useSelector((state) => state.job.job);
  const id = useSelector((state) => state.job.id);
  const selectedJob = data.find((item) => item.id === id);
  return (
    <>
      <Profile darkMode={mode}>
        <LogoContainer logoColor={selectedJob.logoBackground}>
          <img src={selectedJob.logo} alt={selectedJob.company} />
        </LogoContainer>
        <CompanySite>
          <span>{selectedJob.company}</span>
          <span>{selectedJob.company}.com</span>
        </CompanySite>
        <a href={selectedJob.website}>Company Site</a>
      </Profile>
    </>
  );
}
