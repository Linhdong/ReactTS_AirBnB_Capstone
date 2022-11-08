import { Formik, useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { getAllRoomsApi, Room } from "../../../redux/reducers/roomReducer";
import * as Yup from "yup";
import { getLocationsApi } from "../../../redux/reducers/locationsReducer";

type Props = {
  handleCloseModal: () => void;
};

export default function RoomAddNewForm({ handleCloseModal }: Props) {
  const { arrRooms } = useSelector((state: RootState) => state.roomReducer);

  const { arrLocations } = useSelector(
    (state: RootState) => state.locationsReducer
  );

  // --------------- Xử lý tìm vị trí cho phòng --------------
  // state cho input tìm vị trí
  const [locationSearchTerm, setLocationSearchTerm] = useState<string>("");
  const [locationId, setLocationId] = useState<number>(0);
  console.log(locationId);
  // func handle onChange cho input tìm vị trí
  const handleSearchLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationSearchTerm(e.target.value);
  };
  // ------------------------------

  let getArrRoomId = () => arrRooms?.map((room) => room.id);

  const [selectedImg, setSelectedImg] = useState<Blob | MediaSource>();

  const roomImgSrc = selectedImg && URL.createObjectURL(selectedImg);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImg(e.target.files[0]);
    }
  };

  // xoá link ảnh khỏi bộ nhớ tạm mỗi khi component unmounted
  useEffect(() => {
    return () => {
      roomImgSrc && URL.revokeObjectURL(roomImgSrc);
    };
  }, [roomImgSrc]);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoomsApi());
    dispatch(getLocationsApi());
  }, []);

  return (
    <Formik
      initialValues={{
        id: 0,
        tenPhong: "",
        khach: 0,
        phongNgu: 0,
        giuong: 0,
        phongTam: 0,
        moTa: "",
        giaTien: 0,
        mayGiat: false,
        banLa: false,
        tivi: false,
        dieuHoa: false,
        wifi: false,
        bep: false,
        doXe: false,
        hoBoi: false,
        banUi: false,
        maViTri: locationId,
        hinhAnh: roomImgSrc,
      }}
      validationSchema={Yup.object({
        tenPhong: Yup.string()
          .required("Không được bỏ trống trường này!")
          .min(15, "Tên phòng phải chứa hơn 15 kí tự!")
          .max(150, "Tên phòng không được dài hơn 80 kí tự!"),
        id: Yup.number()
          .required("Không được bỏ trống trường này!")
          .notOneOf(getArrRoomId(), "Mã phòng đã tồn tại!"),
        // hinhAnh: Yup.string().required("Vui lòng thêm hình ảnh cho phòng!"),
        maViTri: Yup.number().not([0], "Không được bỏ trống trường này!"),
      })}
      onSubmit={(values) => {
        values.hinhAnh = roomImgSrc;
        values.maViTri = locationId;
        console.log(values);
      }}
    >
      {({ handleSubmit, values, handleChange, handleBlur, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className="container-sm">
            <div className="room-title">
              <h3 className="mb-0">
                <input
                  type="text"
                  className="form-control"
                  name="tenPhong"
                  onChange={handleChange}
                  placeholder="Nhập tên phòng"
                  onBlur={handleBlur}
                />
              </h3>
              {errors.tenPhong && (
                <span className="text-danger">{errors.tenPhong}</span>
              )}
            </div>
            <div className="room-img mt-3">
              {selectedImg ? (
                <LazyLoadImage
                  src={roomImgSrc}
                  alt={values.tenPhong}
                  effect="blur"
                />
              ) : (
                <h4 className="m-0">Hình ảnh</h4>
              )}
              {errors.hinhAnh && (
                <span className="text-danger d-block">{errors.hinhAnh}</span>
              )}
              <input
                className="btn btn-sm btn-outline-dark mt-2"
                type="button"
                value="Thêm ảnh phòng"
                onClick={() => document.getElementById("hinhAnh")?.click()}
              />
              <input
                type="file"
                accept=".jpg, .png"
                onChange={handleUploadImage}
                id="hinhAnh"
                name="hinhAnh"
                // value={roomImgSrc}
                // className="d-none"
              />
            </div>
            <div className="row mt-3 justify-content-between">
              <div className="col-6">
                <div className="form-group mb-3">
                  <label htmlFor="tenViTri">Vị trí</label>
                  <input
                    type="text"
                    className="form-control w-75"
                    id="tenViTri"
                    name="tenViTri"
                    value={locationSearchTerm}
                    onChange={handleSearchLocation}
                  />
                  <input
                    type="number"
                    value={locationId}
                    // readOnly
                    id="maviTri"
                    name="maViTri"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.maViTri && (
                    <span className="text-danger">{errors.maViTri}</span>
                  )}
                  <div className="locations-list">
                    <ul>
                      {arrLocations
                        ?.filter((location) => {
                          const searchTerm = locationSearchTerm.toLowerCase();
                          const locationName =
                            location.tenViTri.toLowerCase() +
                            location.tinhThanh.toLowerCase();

                          return (
                            searchTerm &&
                            (locationName.includes(searchTerm) ||
                              locationName.startsWith(searchTerm))
                          );
                        })
                        ?.slice(0, 5)
                        ?.map((location) => {
                          let locationName =
                            location.tenViTri +
                            ", " +
                            location.tinhThanh +
                            ", " +
                            location.quocGia;
                          return (
                            <li
                              onClick={() => {
                                setLocationSearchTerm(locationName);
                                setLocationId(location.id);
                              }}
                            >
                              {locationName}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="id">Mã phòng</label>
                  <input
                    type="number"
                    className="form-control w-75"
                    name="id"
                    id="id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.id && (
                    <span className="text-danger mt-2">{errors.id}</span>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="giaTien">Giá tiền</label>
                  <input
                    type="number"
                    className="form-control w-75"
                    placeholder="Đơn vị: USD"
                    id="giaTien"
                    name="giaTien"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-6">
                <h4 className="mt-3">Tiện nghi</h4>
                <div className="room-amenities row mt-2">
                  {/* {getAmenities(values).map((amenity, index) => (
                    <div className="col-6" key={index}>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={`${amenity.key}`}
                          name={`${amenity.key}`}
                          checked={amenity.value ? true : false}
                          onChange={handleChange}
                        />
                        <label htmlFor="mayGiat">
                          {amenitiesNames[`${amenity.key}`]}
                        </label>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
              <h4 className="mt-3">Số lượng tối đa</h4>
              <div className="room-maximum">
                <div className="row mt-2">
                  <div className="col-6">
                    <div className="form-group row align-items-center">
                      <div className="col-3">
                        <label htmlFor="khach">Khách</label>
                      </div>
                      <div className="col-7">
                        <input
                          id="khach"
                          type="number"
                          className="form-control ms-2 w-50"
                          value={values.khach}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row align-items-center mt-2">
                      <div className="col-3">
                        <label htmlFor="phongTam" className="text-nowrap">
                          Phòng tắm
                        </label>
                      </div>
                      <div className="col-7">
                        <input
                          id="phongTam"
                          type="number"
                          className="form-control ms-2 w-50"
                          value={values.phongTam}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group row align-items-center">
                      <div className="col-3">
                        <label htmlFor="phongNgu" className="text-nowrap">
                          Phòng ngủ
                        </label>
                      </div>
                      <div className="col-7">
                        <input
                          id="phongNgu"
                          type="number"
                          className="form-control ms-2 w-50"
                          value={values.phongNgu}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row align-items-center mt-2">
                      <div className="col-3">
                        <label htmlFor="giuong" className="text-nowrap">
                          Giường
                        </label>
                      </div>
                      <div className="col-7">
                        <input
                          id="giuong"
                          type="number"
                          className="form-control ms-2 w-50"
                          value={values.giuong}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="mt-3">
                <label htmlFor="moTa">Mô tả</label>
                <textarea
                  id="moTa"
                  className="form-control mt-2"
                  style={{ height: "180px" }}
                  value={values.moTa}
                  onChange={handleChange}
                ></textarea>
              </h4>
            </div>
          </div>
          <hr />
          <div className="form-btns d-flex justify-content-end gap-2">
            <button
              className="btn btn-secondary"
              onClick={handleCloseModal}
              type="button"
            >
              Close
            </button>
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
