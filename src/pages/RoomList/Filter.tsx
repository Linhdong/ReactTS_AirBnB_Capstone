import React, { useEffect, useState } from "react";
import * as _ from "lodash";
import { AnyIfEmpty } from "react-redux";

interface Room {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  bep: boolean;
  doXe: boolean;
  hoBoi: boolean;
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
}

type Props = {
  ID: string | null;
  arrRoomList: Room[];
  arrRoom: Room[],
  getfilter: (x: any) => void;
  setStateRender: (x: number) => void;
};

const arrFilter = [
  { id: 0, value: "mayGiat", name: "Washer" },
  { id: 1, value: "banLa", name: "Iron" },
  { id: 2, value: "tivi", name: "Television" },
  { id: 3, value: "dieuHoa", name: "Air Conditioning" },
  { id: 4, value: "wifi", name: "Wifi" },
  { id: 5, value: "bep", name: "Kitchen" },
  { id: 6, value: "doXe", name: "Parking" },
  { id: 7, value: "hoBoi", name: "Pool" },
];

const objectId = arrFilter.map((obj, index) => {
  return { id: obj.id };
});

let timeout:ReturnType<typeof setTimeout>; 

export default function Filter({ ID, arrRoomList, getfilter, arrRoom, setStateRender }: Props) {
  console.log("Filter: ", arrRoomList);
  const [btnState, setBtnState] = useState<any>({
    activeObject: null,
    objects: objectId,
  });

  const [filterBy, setFilterBy] = useState<string[]>([]);

  const [item, setItemFilter] = useState<string>("");

  const [statePrice, setStatePrice] = useState<string>("0");

  const SearchByItem = () => {
    if (!(item.trim() === "")) {
      let fd = -1;
      let state = filterBy.findIndex((obj) => obj === item);
      if (state === fd) {
        filterBy.push(item);
      } else {
        let index = filterBy.findIndex((newObj) => newObj === item);
        filterBy.splice(index, 1);
      }
    }
  };

  const filterArray = (arr1: any[], arr2: any[]) => {
    const filtered = arr1.filter((item) => arr2.every((x) => item[x]));
    getfilter(filtered);
    return filtered;
  };

  useEffect(() => {
    SearchByItem();
    filterArray(arrRoomList, filterBy);
    if(filterBy.length === 0){
      setStateRender(1);
      getfilter(arrRoom);
    }
  }, [item, filterBy]);

  useEffect(() => {
    setFilterBy(filterBy.splice(0));
  }, [ID]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {value, id} = event.currentTarget;
    console.log(value);
    if(value === '0'){
      arrRoomList = arrRoomList.slice().sort((nextRoom:Room, room:Room) => {
        return  nextRoom.giaTien - room.giaTien;
      })
      getfilter(arrRoomList);
    }
    if(value === '1'){
      arrRoomList = arrRoomList.slice().sort((nextRoom:Room, room:Room) => {
        return  room.giaTien - nextRoom.giaTien;
      })
      getfilter(arrRoomList);
    }

  }


  console.log("Filter By: ", filterBy);
  const toggleActive = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value, id } = event.currentTarget;
    setItemFilter(value);
    setBtnState({ ...btnState, activeObject: btnState.objects[id] });
  };

  const toggleActiveStyle = (index: number) => {
    if (btnState.objects[index] === btnState.activeObject) {
      return "btn active btn-outline-secondary me-2 mb-2";
    } else {
      return "btn btn-outline-secondary me-2 mb-2";
    }
  };
  return (
    <div className="filter my-3 py-3 border-bottom">
      <div className="d-flex justify-content-start">
        <div className="d-flex">
          <div className="btn-group-sm me-2 price">
            <select className="btn btn-outline-secondary" onChange={handleSelect}>
              <option>Price </option>
              <option value={0}>Ascending</option>
              <option value={1}>Decreasing</option>
            </select>
          </div>
          <div className="btn-group-sm price">
            <select className="btn btn-outline-secondary">
              <option selected>Type of place </option>
              <option value={1} className="text-center">
                100$
              </option>
              <option value={2}>200$</option>
              <option value={3}>300$</option>
            </select>
          </div>
        </div>

        <div className="btn-group-sm mx-1 ms-4 multiple-choice">
          {arrFilter.map((itemFilter, index) => {
            return (
              <>
                <button
                  id={`${index}`}
                  className={toggleActiveStyle(index)}
                  type="button"
                  value={itemFilter.value}
                  onClick={toggleActive}
                >
                  {itemFilter.name}
                </button>
              </>
            );
          })}
          <button
            className="btn btn-outline-secondary me-2 mb-2 position-relative"
            onClick={() => {
              setItemFilter('');
              setFilterBy([] as string [])
              setBtnState({
                activeObject: null,
                objects: objectId,
              });
              
            }}
          >
            <i className="fas fa-filter"></i>{" "}
            {filterBy.length >= 1 ? "Clear Filter" : "Filter"}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {filterBy.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
