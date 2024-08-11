import styled from "styled-components";
//@ts-ignore
import bgPatternHeader from "../../assets/mobile/bg-pattern-header.svg";
//@ts-ignore
import tbPatternHeader from "../../assets/tablet/bg-pattern-header.svg";
//@ts-ignore
import dsPatternHeader from "../../assets/desktop/bg-pattern-header.svg";

export const Head = styled.div<{darkMode:boolean}>`
height: 136px;
width: 375px;
margin: 0 auto;
background-image: url(${bgPatternHeader});
@media screen and (min-width: 768px) {
  background-image: url(${tbPatternHeader});
  background-color: ${({ darkMode }) =>
    darkMode ? "rgb(244, 246, 248)" : "#121721"};
  width: 768px;
  height: 160px;
}
@media screen and (min-width: 1440px) {
  background-image: url(${dsPatternHeader});
  width: 1440px;
  height: 162px;
}
`;

export const HeaderIcon = styled.div`
padding-top: 20px;
display: flex;
justify-content: space-around;
align-items: center;
padding: 20px;
@media screen and (min-width: 1440px) {
  padding: 20px 170px;
}
`;