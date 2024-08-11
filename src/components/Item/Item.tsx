import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputText from "../InputText/InputText";
import { RootState } from "../../Type/type";
import { Detail, Items, Location, LogoContainer, Position, Wrapper, WrapperLink } from "./Item.styled";
import { fetchgetAllJobs } from "../../redux/action";
import { updateSelectedId } from "../../redux/Slice";
import { AppDispatch } from "../../redux/store";

const Item = () => {
  const mode = useSelector((state:RootState) => state.job.lightMode);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchgetAllJobs());
  }, [dispatch]);
  const data = useSelector((state:RootState) => state.job.job);
  const showFilteredData = useSelector((state:RootState) => state.job.filteredData);

  function handleClick(e: React.MouseEvent<HTMLImageElement | HTMLUListElement>) {
    const target = e.currentTarget.id;
    dispatch(updateSelectedId(target));
  }

  return (
    <>
      <div>
        <InputText />
      </div>
      <Wrapper>
        <WrapperLink to={"/detail"}>
          {(showFilteredData || data)?.map((item) => {
            return (
              <Items
                darkMode={mode}
                onClick={handleClick}
                key={item.id}
                id={String(item.id)}
              >
                <li>
                  <LogoContainer logoColor={item.logoBackground}>
                    <img
                      onClick={handleClick}
                      key={item.id}
                      src={item.logo}
                      alt={item.company}
                    />
                  </LogoContainer>
                </li>
                <li>
                  <Detail>
                    {item && item.postedAt} . {item && item.contract}
                  </Detail>
                  <Position darkMode={mode}>
                    <h4>{item.position}</h4>
                  </Position>
                  <Detail>{item.company}</Detail>
                  <Location>{item.location}</Location>
                </li>
              </Items>
            );
          })}
        </WrapperLink>
      </Wrapper>
    </>
  );
};

export default Item;
