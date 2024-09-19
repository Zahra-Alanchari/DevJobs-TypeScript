import React from 'react';
import { useSelector } from 'react-redux';
import {
  ApplyButton,
  ApplyButtonend,
  Detail,
  Footer,
  FooterApply,
  FooterPosition,
  Introduction,
  Items,
  JobDescription,
  ListDec,
  ListDic,
  Location,
  Position,
  Title,
} from './JobDetail.styled';
import { RootState } from '../../Type/type';

const JobDetails = () => {
  const mode = useSelector((state: RootState) => state.job.lightMode);
  const data = useSelector((state: RootState) => state.job.job);
  const id = useSelector((state: RootState) => state.job.id);
  const selectedJob = id && data.find(item => item.id === +id);

  return (
    selectedJob && (
      <JobDescription darkMode={mode}>
        <Items>
          <li>
            <Detail>
              {selectedJob?.postedAt} . {selectedJob?.contract}
            </Detail>
            <Position darkMode={mode}>
              <h4>{selectedJob?.position}</h4>
            </Position>
            <Location>{selectedJob?.location}</Location>
          </li>
        </Items>

        <ApplyButton>Apply now </ApplyButton>

        <Introduction>
          <p>{selectedJob?.description}</p>
          <Title darkMode={mode}>Requirements</Title>
          <p>{selectedJob?.requirements.content}</p>
          <ul>
            {selectedJob?.requirements.items.map(item => (
              <ListDic>{item}</ListDic>
            ))}
          </ul>
          <Title darkMode={mode}>what you will do</Title>
          <p>{selectedJob?.role.content}</p>
          <ul>
            {selectedJob?.role.items.map(item => <ListDec>{item}</ListDec>)}
          </ul>
          <ApplyButtonend>Apply now </ApplyButtonend>
        </Introduction>
        <Footer darkMode={mode}>
          <FooterPosition darkMode={mode}>
            <h4>{selectedJob?.position}</h4>
            <p>so Digital .Inc</p>
          </FooterPosition>
          <FooterApply>Apply now </FooterApply>
        </Footer>
      </JobDescription>
    )
  );
};

export default JobDetails;
