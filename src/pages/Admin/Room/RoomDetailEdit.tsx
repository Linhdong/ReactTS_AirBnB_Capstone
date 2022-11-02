import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { getRoomByIdApi, Room } from "../../../redux/reducers/roomReducer";
import Loading from "../../../components/Loading/Loading";

interface Amenities {
  [key: string]: string | number | boolean;
}

const amenities: Amenities[] = [
  {
    key: `banLa`,
    value: false,
  },
  {
    key: "mayGiat",
    value: false,
  },
  {
    key: "tivi",
    value: false,
  },
  {
    key: "wifi",
    value: false,
  },
  {
    key: "hoBoi",
    value: false,
  },
  {
    key: "doXe",
    value: false,
  },
  {
    key: "bep",
    value: false,
  },
  {
    key: "dieuHoa",
    value: false,
  },
];

const amenitiesNames: Amenities = {
  banLa: "Bàn là",
  bep: "Bếp",
  dieuHoa: "Điều hoà",
  doXe: "Chỗ đậu xe",
  hoBoi: "Hồ bơi",
  mayGiat: "Máy giặt",
  tivi: "Tivi",
  wifi: "Wifi",
};

type Props = {};

export default function RoomDetailEdit({}: Props) {
  const { room } = useSelector((state: RootState) => state.roomReducer);
  console.log(room);

  const { roomId } = useParams();

  const getAmenities = (values: Room) => {
    for (const amenity of amenities) {
      amenity.value = values[amenity.key as keyof typeof room];
    }
    return [...amenities];
  };

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomByIdApi(roomId));
  }, [roomId]);

  return <div>{JSON.stringify(room)}</div>;
}
