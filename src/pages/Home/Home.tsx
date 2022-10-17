import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";
import HomeLocationItem from "../../components/HomeLocationItem/HomeLocationItem";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getLocationsApi } from "../../redux/reducers/locationsReducer";

type Props = {};

export default function Home({}: Props) {
  const { arrLocations } = useSelector(
    (state: RootState) => state.locationsReducer
  );
  console.log(arrLocations);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationsApi());
  }, []);

  return (
    <>
      <Banner />
      <div className="nearest-locations-list">
        <div className="container">
          <h2>Khám phá những điểm đến gần đây</h2>
          <div className="nearest-locations__content row">
            {arrLocations?.map((location) => {
              return location.quocGia === "Việt Nam" ? (
                <div className="col-6 col-md-4 col-lg-3" key={location.id}>
                  <HomeLocationItem location={location} />
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
      <Carousel />
    </>
  );
}
