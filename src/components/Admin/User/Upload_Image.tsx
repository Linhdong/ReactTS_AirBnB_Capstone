import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { http } from "../../../util/setting";
import PreviewImage from "../Location/PreviewImage";
type Props = {};

export default function Upload_Image({}: Props) {
  const [active, setActive] = useState<number>(0);
  const [submit, setSubmit] = useState(0);
  const [image, setImage] = useState<any>("");

  const formik = useFormik<{
    avatar: string | any;
  }>({
    initialValues: {
      avatar: "",
    },
    validationSchema: Yup.object({
      avatar: Yup.mixed().required("Required !"),
    }),
    onSubmit: async (values) => {
      console.log('Avatar: ', formik.values.avatar);
      setImage(values.avatar);
      //   try {
      //     let result = await http.post(
      //       `/vi-tri/upload-hinh-vitri?maViTri=${id}`,
      //       formik.values.hinhAnh
      //     );
      //     console.log(result.data.content);
      //     // alert("Update Location Successfully !");
      //   } catch (err) {
      //     console.log(err);
      //   }
    },
  });

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file as any);
    reader.onload = () => {
      if (reader.readyState === 2) {
        formik.setFieldValue("avatar", reader.result);
        setImage(reader.result);
      }
    };
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Value: ", event.target.value);
    setActive(Number(event.target.value));
  };

  const renderURL = () => {
    return (
      <>
        <div className="form-group my-2">
          <input
            type="text"
            className="form-control"
            id="avatar"
            aria-describedby="emailHelp"
            placeholder="Your picture"
            onChange={formik.handleChange}
          />
        </div>
      </>
    );
  };

  const renderFile = () => {
    return (
      <>
        <div className="form-group my-2">
          <input
            type="file"
            className="form-control"
            id="avatar"
            aria-describedby="emailHelp"
            placeholder="Your picture"
            accept=".jpeg, .png, .jpg"
            onChange={handleFile}
          />
        </div>
      </>
    );
  };

  const handleAvatar = () => {
    if (active === 0) {
      return <></>;
    } else if (active === 1) {
      return renderURL();
    } else {
      return renderFile();
    }
  };

  const handlePreviewImage = (img: any) => {
    if (img != "") {
      return (
        <>
          <div className="mt-2 d-flex justify-content-center">
            <img
              style={{ width: "100px", height: "100px" }}
              src={img}
              alt="...."
            />
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    setImage("");
  }, [active]);
  //   console.log("Image: ", image);

  return (
    <div>
      <div className="card my-1 border-0">
        <h4 className="form-label">Nguyễn Quốc Khải</h4>
        <select className="form-select" onChange={handleSelect}>
          <option value={0}>Open this select upload type</option>
          <option value={1}>Upload by URL</option>
          <option value={2}>Upload by File</option>
        </select>
        <form onSubmit={formik.handleSubmit}>
          {handleAvatar()}
          {active === 1 ? (
            <button
              className="btn btn-warning btn-sm rounded-4"
              style={{ width: "80px" }}
              onClick={() => {
                setSubmit(1);
              }}
            >
              Preview
            </button>
          ) : (
            " "
          )}
          {submit ? handlePreviewImage(image) : ""}
          <div className="d-flex justify-content-end mt-2">
            <button
              className="btn btn-outline-success rounded-4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}
