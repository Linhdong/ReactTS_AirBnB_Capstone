import { useCallback, useEffect, useRef, useState } from "react";
import {
  deleteRoomApi,
  getAllRoomsApi,
  Room,
} from "../../../redux/reducers/roomReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Modal } from "react-bootstrap";
import {
  getLocationsApi,
  Location,
} from "../../../redux/reducers/locationsReducer";
import SortButton from "../../../components/SortButton/SortButton";
import _ from "lodash";
import RoomAdminForm from "./RoomAdminForm";

// type for sort table
export type SortKeys = keyof Room;

export type SortOrder = "asc" | "desc" | null;
// ----------------------

type Props = {};

export default function RoomManagement({}: Props) {
  const { arrRooms, room } = useSelector(
    (state: RootState) => state.roomReducer
  );

  const { arrLocations } = useSelector(
    (state: RootState) => state.locationsReducer
  );

  const [openModal, setOpenModal] = useState(false);

  const selectedRoom = useRef<null | Room>(null);

  const renderRoomLocation = (maViTri: number) => {
    if (arrLocations.length > 0) {
      let index = arrLocations?.findIndex(
        (location: Location) => location.id === maViTri
      );
      let location = arrLocations[index];
      return (
        location?.tenViTri +
        ", " +
        location?.tinhThanh +
        ", " +
        location?.quocGia
      );
    }
  };

  // ------------------ table pagination --------------
  const [paginatedRooms, setPaginatedRooms] = useState([] as Room[]);

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const pageCount = arrRooms ? Math.ceil(arrRooms.length / pageSize) : 0;

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const paginatedRooms = _(arrRooms).slice(startIndex).take(pageSize).value();
    setPaginatedRooms([...paginatedRooms]);
  };

  const setPaginatedAction = () => {
    if (arrRooms.length > 0) {
      setPaginatedRooms(_(arrRooms).slice(0).take(pageSize).value());
    }
  };
  // -------------------------------------

  // ----------------- sort table function ------------------------
  const [sortKey, setSortKey] = useState<SortKeys>("id");

  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const handleSort = ({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Room[];
    sortKey: SortKeys;
    reverse: boolean;
  }) => {
    if (paginatedRooms.length > 0) {
      if (!sortKey || !sortOrder) return tableData;

      const sortedData = [...paginatedRooms].sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      });

      if (reverse) {
        return sortedData.reverse();
      }

      return sortedData;
    }
  };

  const sortedData = useCallback(
    () =>
      handleSort({
        tableData: paginatedRooms,
        sortKey,
        reverse: sortOrder === "desc",
      }),
    [paginatedRooms, sortKey, sortOrder]
  );

  const changeSort = (key: SortKeys) => {
    if (!sortOrder) {
      setSortOrder("asc");
    }
    if (sortOrder) {
      setSortOrder(sortOrder === "asc" ? "desc" : null);
    }
    setSortKey(key);
  };
  // ------------------------------------

  const handleEdit = (room: Room) => {
    setOpenModal(true);
    selectedRoom.current = room;
  };

  const onClickAddNew = () => {
    setOpenModal(true);
    selectedRoom.current = null;
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const renderRoomAdminForm = useCallback(() => {
    return (
      <RoomAdminForm
        room={selectedRoom.current ? selectedRoom.current : null}
        handleCloseModal={handleCloseModal}
      />
    );
  }, [selectedRoom.current]);

  const dispatch: AppDispatch = useDispatch();

  const handleDeleteRoom = (roomId: number) => {
    dispatch(deleteRoomApi(roomId));
  };

  useEffect(() => {
    dispatch(getAllRoomsApi());
    dispatch(getLocationsApi());
  }, []);

  useEffect(() => {
    setPaginatedAction();
  }, [arrRooms.length]);

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="admin-room">
      <h3>Quản lý thông tin phòng</h3>
      <button className="btn btn-outline-secondary" onClick={onClickAddNew}>
        <i className="fa fa-plus me-2"></i>
        Thêm phòng
      </button>
      <div className="admin__searchBar input-group mt-2">
        <input
          type="text"
          className="form-control"
          placeholder="Start your search"
          aria-label="Start your search"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick={() => changeSort("id")}>
              <div className="d-flex">
                <span>Mã phòng</span>
                <SortButton
                  colKey="id"
                  {...{
                    sortKey,
                    sortOrder,
                  }}
                />
              </div>
            </th>
            <th onClick={() => changeSort("tenPhong")}>
              <div className="d-flex">
                <span>Tên phòng</span>
                <SortButton
                  colKey="tenPhong"
                  {...{
                    sortKey,
                    sortOrder,
                  }}
                />
              </div>
            </th>
            <th>Hình ảnh</th>
            <th onClick={() => changeSort("maViTri")}>
              <div className="d-flex">
                <span>Vị trí</span>
                <SortButton
                  colKey="maViTri"
                  {...{
                    sortKey,
                    sortOrder,
                  }}
                />
              </div>
            </th>
            <th>Mô tả</th>
            <th onClick={() => changeSort("giaTien")}>
              <div className="d-flex">
                <span>Giá tiền</span>
                <SortButton
                  colKey="giaTien"
                  {...{
                    sortKey,
                    sortOrder,
                  }}
                />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedRooms.length > 0 &&
            sortedData()?.map((room) => (
              <tr key={room.id}>
                <td>{room.id}</td>
                <td>{room.tenPhong}</td>
                <td>
                  <LazyLoadImage
                    src={room.hinhAnh}
                    alt={room.tenPhong}
                    effect="blur"
                    style={{ width: "200px" }}
                  />
                </td>
                <td>
                  {arrLocations.length > 0 && renderRoomLocation(room.maViTri)}
                </td>
                <td>
                  {room.moTa.length > 100
                    ? room.moTa.slice(0, 100) + "..."
                    : room.moTa}
                </td>
                <td>${room.giaTien}</td>
                <td>
                  <div className="d-flex">
                    <div className="btnEdit me-2">
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => {
                          handleEdit(room);
                        }}
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                    </div>
                    <div className="btnDelete">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDeleteRoom(room.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* table pagination */}
      <nav className="d-flex justify-content-end">
        <ul className="pagination">
          <li className="page-item">
            <button
              className={currentPage - 1 <= 0 ? "d-none" : "page-link"}
              onClick={() => handlePagination(1)}
            >
              {"<<"}
            </button>
          </li>
          <li className="page-item">
            <button
              className={currentPage - 1 <= 0 ? "d-none" : "page-link"}
              onClick={() =>
                handlePagination(
                  currentPage - 1 <= 0 ? currentPage : currentPage - 1
                )
              }
            >
              {"<"}
            </button>
          </li>
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
              style={{ cursor: "pointer" }}
              onClick={() => handlePagination(page)}
            >
              <button className="page-link">{page}</button>
            </li>
          ))}
          <li className="page-item">
            <button
              className={
                pages.length - currentPage <= 0 ? "d-none" : "page-link"
              }
              onClick={() =>
                handlePagination(
                  currentPage + 1 > pageCount ? currentPage : currentPage + 1
                )
              }
            >
              {">"}
            </button>
          </li>
          <li className="page-item">
            <button
              className={
                pages.length - currentPage <= 0 ? "d-none" : "page-link"
              }
              onClick={() => handlePagination(pages.slice(-1)[0])}
            >
              {">>"}
            </button>
          </li>
        </ul>
      </nav>

      <Modal show={openModal} size="lg" className="modal-dialog-scrollable">
        <Modal.Header>
          <Modal.Title>
            {selectedRoom.current ? "Cập nhật" : "Thêm phòng mới"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderRoomAdminForm()}</Modal.Body>
      </Modal>
    </div>
  );
}
