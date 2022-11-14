import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { http } from "../../../util/setting";
import { CheckboxGroup } from "@mantine/core/lib/Checkbox/CheckboxGroup/CheckboxGroup";
import PreviewImage from "./PreviewImage";

type Props = {
  id: string;
};

let timeout: ReturnType<typeof setTimeout>;
export default function UploadPicure({ id }: Props) {
  const [active, setActive] = useState<string>("0");
  const [img, setImg] = useState<any>();
  const [preview, setPreview] = useState<any>({})
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Value: ", event.target.value);
    setActive(event.target.value);
  };

  const formik = useFormik<{
    hinhAnh: string;
  }>({
    initialValues: {
      hinhAnh: "",
    },
    validationSchema: Yup.object({
      hinhAnh: Yup.mixed().required("Required !")
    }),
    onSubmit: async () => {
      console.log(formik.values.hinhAnh)
      try {
        let result = await http.post(
          `/vi-tri/upload-hinh-vitri?maViTri=${id}`,
          formik.values.hinhAnh
        );
        console.log(result.data.content);
        // alert("Update Location Successfully !");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File = (event.target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file as any);
    reader.onload = () => {
      if(reader.readyState === 2){
        formik.setFieldValue("hinhAnh",reader.result);
        setPreview(reader.result);
      }
    }
  };

  const renderURL = () => {
    return (
      <>
        <div className="form-group my-1">
          <label className="form-label">Upload by Url</label>
          <input
            type="text"
            className="form-control"
            id="hinhAnh"
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
        <div className="form-group my-1">
          <label className="form-label">Upload by File</label>
          <input
            type="file"
            className="form-control"
            id="hinhAnh"
            aria-describedby="emailHelp"
            placeholder="Your picture"
            accept=".jpeg, .png, .jpg"
            onChange={handleFile}
          />
          {formik.errors.hinhAnh && (
            <p className="text-danger">{formik.errors.hinhAnh}</p>
          )}
        </div>
      </>
    );
  };

  const previewImage = () => {
    return(
      <div className="form-group">
        <label className="form-label">Preview Image</label>
        <div className="d-flex justify-content-md-center">
        {formik.values.hinhAnh && <img style={{width:'100px', height: '100px'}} src={preview} alt="...."/>}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="card border-0">
        <div className="form-group">
          <select className="form-select" onChange={handleSelect}>
            <option selected>Open this select upload type</option>
            <option value={0}>URL</option>
            <option value={1}>FILE</option>
          </select>
        </div>

        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            {active === "0" ? renderURL() : renderFile()}
            <div className="preview-image my-2">
            {active === "0" ? "" : previewImage()}
            </div>
            <div className="btnSubmit d-md-flex justify-content-md-end">
              <button
                className="btn btn-outline-warning btn-md mt-2 rounded-pill px-4"
                type="submit"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
