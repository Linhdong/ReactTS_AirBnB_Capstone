import { createColumnHelper } from "@tanstack/react-table";
import RoomManagement from "./RoomManagement";

export interface Room {
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

export const columnHelper = createColumnHelper<Room>();

export const defaultColumns = [
  columnHelper.display({
    id: "actions",
    cell: props => <RoomManagement />
  }),
];
