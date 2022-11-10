import { Room } from "../redux/reducers/roomReducer";

export interface Amenities {
  [key: string]: string | number | boolean;
}

export const amenities: Amenities[] = [
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

export const amenitiesNames: Amenities = {
  banLa: "Bàn là",
  bep: "Bếp",
  dieuHoa: "Điều hoà",
  doXe: "Chỗ đậu xe",
  hoBoi: "Hồ bơi",
  mayGiat: "Máy giặt",
  tivi: "Tivi",
  wifi: "Wifi",
};

export const getAmenities = (values: any, room: Room) => {
    for (const amenity of amenities) {
      amenity.value = values[amenity.key as keyof typeof room];
    }
    return [...amenities];
  };
