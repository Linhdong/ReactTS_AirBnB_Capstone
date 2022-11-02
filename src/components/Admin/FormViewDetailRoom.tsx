import { Formik } from "formik";
import { Room } from "../../redux/reducers/roomReducer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useEffect } from "react";
import { getLocationByIdApi } from "../../redux/reducers/locationsReducer";

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

type Props = {
  room?: Room | any;
};

export default function FormViewDetailRoom({ room }: Props) {
  const { location } = useSelector(
    (state: RootState) => state.locationsReducer
  );

  const getAmenities = (values: any) => {
    for (const amenity of amenities) {
      amenity.value = values[amenity.key as keyof typeof room];
    }
    return [...amenities];
  };

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationByIdApi(room.maViTri));
  }, [room.maViTri]);

  return (
    <Formik
      initialValues={room}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, values, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <div className="container-sm">
            <div className="room-title">
              <h3>
                <input
                  type="text"
                  value={values.tenPhong}
                  className="mb-2 form-control"
                  name="tenPhong"
                  onChange={handleChange}
                />
              </h3>
            </div>
            <div className="room-img">
              <LazyLoadImage
                src={values?.hinhAnh}
                alt={values.tenPhong}
                effect="blur"
              />
              <button className="btn btn-outline-dark mt-2" type="button">
                Tải ảnh lên
                <i className="fa fa-arrow-up ms-2"></i>
              </button>
            </div>
            <div className="row mt-3 justify-content-between">
              <div className="col-6">
                <div className="form-group mb-3">
                  <label htmlFor="tenViTri">Vị trí</label>
                  <input
                    type="text"
                    className="form-control w-75"
                    value={`${location.tenViTri} - ${location.tinhThanh}`}
                    id="tenViTri"
                    name="tenViTri"
                    disabled
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="id">Mã phòng</label>
                  <input
                    type="text"
                    className="form-control w-75"
                    value={values.id}
                    name="id"
                    id="id"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="giaTien">Giá tiền</label>
                  <input
                    type="text"
                    className="form-control w-75"
                    placeholder="Đơn vị: USD"
                    value={`$${values.giaTien}`}
                    id="giaTien"
                    name="giaTien"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-6">
                <h4 className="mt-3">Tiện nghi</h4>
                <div className="room-amenities row mt-2">
                  {getAmenities(values).map((amenity, index) => (
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
                  ))}
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
        </form>
      )}
    </Formik>
  );
}
