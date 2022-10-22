import React, { useState } from "react";
import "react-date-range-ts/dist/styles.css"; // main style file
import "react-date-range-ts/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range-ts";
import RoomBookingBar from "../Room/Booking/RoomBookingBar";

type Props = {};

export default function DateRangePickerJSX({}: Props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  let numsOfDays = Math.round(
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
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
