import React, { useEffect } from "react";
import { Table, Input } from "antd";
import "antd/dist/antd.css";
import type { ColumnsType, TableProps } from "antd/es/table";
import { AudioOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd/lib/radio";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { getAllRoomsApi, Room } from "../../../redux/reducers/roomReducer";
import { NavLink } from "react-router-dom";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value: string) => console.log(value);

type Props = {};

export default function RoomManagement({}: Props) {
  const { arrRooms } = useSelector((state: RootState) => state.roomReducer);

  const dispatch: AppDispatch = useDispatch();

  const columns: ColumnsType<Room> = [
    {
      title: "Mã phòng",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend"],
    },
    {
      title: "Tên phòng",
      dataIndex: "tenPhong",
      sorter: (a, b) => {
        let tenPhongA = a.tenPhong.toLowerCase().trim();
        let tenPhongB = b.tenPhong.toLowerCase().trim();

        return tenPhongA.localeCompare(tenPhongB);
      },
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, room) => (
        <img
          src={room.hinhAnh}
          alt={room.tenPhong}
          style={{ width: "250px" }}
        />
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text, room) =>
        room.moTa.length > 100 ? room.moTa.slice(0, 100) + "..." : room.moTa,
    },
    {
      title: "Giá tiền",
      dataIndex: "giaTien",
      render: (text, room) => <span>{`$${room.giaTien}`}</span>,
      sorter: (a, b) => a.giaTien - b.giaTien,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "",
      dataIndex: "",
      render: (text, room) => (
        <div className="d-flex">
          <NavLink to="#" className="me-2 text-danger">
            <DeleteOutlined />
          </NavLink>
          <NavLink to="#">
            <EditOutlined />
          </NavLink>
        </div>
      ),
    },
  ];

  const data = arrRooms;

  const onChange: TableProps<Room>["onChange"] = (
    pagination,
    sorter,
    extra
  ) => {
    console.log("params", pagination, sorter, extra);
  };

  useEffect(() => {
    dispatch(getAllRoomsApi());
  }, []);
  return (
    <>
      <h3>Quản lý thông tin phòng</h3>
      <Button>Thêm phòng</Button>
      <Search
        className="my-3"
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  );
}
