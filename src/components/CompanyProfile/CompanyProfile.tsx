import React from "react";
import { useSelector } from "react-redux";
import { CompanySite, LogoContainer, Profile } from "./CompanyProfile.styled";
import { RootState } from "../../Type/type";
export default function CompanyProfile() {
  const mode = useSelector((state:RootState) => state.job.lightMode);
  const data = useSelector((state:RootState) => state.job.job);
  const id = useSelector((state:RootState) => state.job.id);
  const selectedJob =id && data.find((item) => item.id === +id);

  return (
    selectedJob &&
    <>
      <Profile darkMode={mode}>
        <LogoContainer logoColor={selectedJob?.logoBackground}>
          <img src={selectedJob?.logo} alt={selectedJob?.company} />
        </LogoContainer>
        <CompanySite>
          <span>{selectedJob?.company}</span>
          <span>{selectedJob?.company}.com</span>
        </CompanySite>
        <a href={selectedJob?.website}>Company Site</a>
      </Profile>
    </>
  );
}
