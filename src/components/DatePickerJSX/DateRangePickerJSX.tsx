import React, { useState } from "react";
import "react-date-range-ts/dist/styles.css"; // main style file
import "react-date-range-ts/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range-ts";
import RoomBookingBar from "../Room/Booking/RoomBookingBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { setEndDate, setStartDate } from "../../redux/reducers/dateReducer";

type Props = {};

export default function DateRangePickerJSX({}: Props) {
  
  const { startDate, endDate } = useSelector(
    (state: RootState) => state.dateReducer
  );

  const dispatch = useDispatch();

  const handleSelect = (ranges: any) => {
    // setStartDate(ranges.selection.startDate);
    // setEndDate(ranges.selection.endDate);
    dispatch(setStartDate(ranges.selection.startDate));
    dispatch(setEndDate(ranges.selection.endDate));
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <>
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#fd5b61"]}
        onChange={handleSelect}
        staticRanges={[]}
        inputRanges={[]}
      />
    </>
  );
}
