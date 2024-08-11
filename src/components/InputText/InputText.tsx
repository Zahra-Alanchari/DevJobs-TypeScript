import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { CloseModalBtn, Dialog, InputContainer, LocBtn, ModalLocBtn, OverLay, SearchIconbtn, TextBtn, WorkTime } from "./InputText.styled";
import { RootState } from "../../Type/type";
import { fullFilter, setLocationFilter, updateInput, workTimeFilter } from "../../redux/Slice";
import SearchIcon from "../../icon/SearchIcon";
import FilterIcon from "../../icon/FilterIcon";


export default function InputText() {
  const [open, setOpen] = useState(false);
  const mode = useSelector((state:RootState) => state.job.lightMode);
  const inputContent = useSelector((state:RootState) => state.job.input);
  const locationInput = useSelector((state:RootState) => state.job.location);
  const data = useSelector((state:RootState) => state.job.job);
  const dispatch = useDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const data = e.target.value.toLowerCase();
    dispatch(updateInput(data));
  }
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLocationFilter(e.target.value));
  };
  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const status = e.target.checked;
    dispatch(workTimeFilter(status));
  }

  function handleOpenModal() {
    setOpen(true);
  }
  function handleCloseModal() {
    setOpen(false);
  }

  const selectedTitleData = useSelector((state:RootState) => state.job.input);
  const selectedLocationData = useSelector((state:RootState) => state.job.location);
  const selectedTimeData = useSelector((state:RootState) => state.job.fullTime);
  const showFilteredData = useSelector((state:RootState) => state.job.filteredData);

  function handleGetJob() {
    const filterData = data.filter((job) => {
      if (
        selectedTitleData === "" &&
        selectedLocationData === "" &&
        (selectedTimeData === "" 
          // || selectedTimeData === false
        )
      ) {
        return job;
      } else {
        return (
          job.position.toLowerCase().includes(selectedTitleData) &&
          job.location.toLowerCase().includes(selectedLocationData) &&
          (selectedTimeData ? job.contract === "Full Time" : true)
        );
      }
    });
    dispatch(fullFilter(filterData));
  }
  return (
    <div>
      <InputContainer darkMode={mode}>
        <TextBtn
          darkMode={mode}
          onChange={handleChange}
          type="text"
          placeholder="filter by title"
          value={inputContent}
        ></TextBtn>
        <LocBtn
          darkMode={mode}
          type="text"
          onChange={handleLocationChange}
          value={locationInput}
          placeholder="filter by location"
        ></LocBtn>
        <label>
          <input onChange={handleCheck} type="checkbox" />
          Full Time only
        </label>
        <button onClick={handleOpenModal}>
          <FilterIcon />
        </button>
      </InputContainer>
      <SearchIconbtn onClick={handleGetJob}>
        <span>
          <SearchIcon />
        </span>
        <span>Search</span>
      </SearchIconbtn>
      {open && (
        <OverLay darkMode={mode}>
          <Dialog open darkMode={mode}>
            <ModalLocBtn darkMode={mode}
              type="text"
              onChange={handleLocationChange}
              value={locationInput}
              placeholder="filter by location"
            ></ModalLocBtn>
            <WorkTime darkMode={mode}>
              <input  onChange={handleCheck} type="checkbox" />
              Full Time only
            </WorkTime>
            <CloseModalBtn onClick={handleCloseModal}>
              <span>Search</span>
            </CloseModalBtn>
          </Dialog>
        </OverLay>
      )}
    </div>
  );
}
