import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { AppDispatch, RootState } from "./../../../redux/configStore";
import Pagination from "../../../components/Pagination/Pagination";
import Add_User from "../../../components/Admin/User/Add_User";
import Edit_User from "../../../components/Admin/User/Edit_User";
import {
  deleteUserAction,
  editUserByIDAction,
  getUserPaginationAction,
  searchUserAction,
  User,
} from "../../../redux/reducers/userReducer";
import { Modal } from "react-bootstrap";
import {
  setModalAction,
  setEditAction,
  setDeleteAction,
} from "../../../redux/reducers/modalReducer";
import Info_User from "../../../components/Admin/User/Infor_User";
import Modaltest from "../../../HOC/Modaltest";
import Delete_User from "../../../components/Admin/User/Delete_User";
import Upload_Image from "../../../components/Admin/User/Upload_Image";

type Props = {};
const logo = require("./../../../assets/img/airbnb-logo.png");
let timeout: ReturnType<typeof setTimeout>;

export default function UserManagement({}: Props) {
  const { arrUsers, totalRow, statusAction } = useSelector(
    (state: RootState) => state.userReducer
  );
  const [username, setUserName] = useState("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const [idUser, setIDUser] = useState<number>(1);
  const dispatch: AppDispatch = useDispatch();

  /**
   * currentPage: trang hiện tại đang được trỏ tới
   */
  const [currentPage, setCurrentPage] = useState<number>(1);
  /**
   * postsPerPage: là số danh sách sản phẩm được hiển thị trên page
   */
  const [postsPerPage, setPostPerPage] = useState<number>(15);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    console.log("UserName: ", value.toLocaleLowerCase());
    setUserName(value);
  };

  const getUserbyApi = () => {
    const userAction = getUserPaginationAction(currentPage, postsPerPage);
    dispatch(userAction);
  };

  const handleSearchUser = () => {
    const searchAction = searchUserAction(username);
    dispatch(searchAction);
  };

  useEffect(() => {
    timeout = setTimeout(() => {
      getUserbyApi();
    }, 500);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
        // setReload(false);
      }
    };
  }, [currentPage]);

  useEffect(() => {
    timeout = setTimeout(() => {
      getUserbyApi();
    }, 500);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [statusAction]);

  useEffect(() => {
    timeout = setTimeout(() => {
      if(username != ''){
        handleSearchUser();
      }else{
        getUserbyApi()
      }
    }, 1000);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [username]);

  const handleDelete = (id: number) => {
    const actionDeleteComponent = setDeleteAction({
      Component: Delete_User,
      title: "Delete User Information",
      ID: id,
    });
    dispatch(actionDeleteComponent);
  };

  const handleEdit = (id: number) => {
    const actionEditReduce = editUserByIDAction(id);
    const actionEditComponent = setEditAction({
      Component: Edit_User,
      title: "Edit Personal Information",
      ID: id,
    });
    dispatch(actionEditComponent);
    dispatch(actionEditReduce);
  };

  const handleAdd = () => {
    const actionAddComponent = setModalAction({
      Component: Add_User,
      title: "Add New User",
    });
    dispatch(actionAddComponent);
  };

  const handleInfor = (id: number) => {
    const actionInfor = editUserByIDAction(id);
    const actionInfoComponent = setModalAction({
      Component: Info_User,
      title: "Personal Information",
    });
    dispatch(actionInfoComponent);
    dispatch(actionInfor);
  };

  const handleUploadAvatar = (id:number) => {
    const actionUploadComponent = setModalAction({
      Component: Upload_Image,
      title: 'Upload User Avatar'
    })
    dispatch(actionUploadComponent);
  }

  const renderUser = () => {
    return arrUsers?.map((user: any, index: number) => {
      return (
        <tr key={index}>
          <td>{user?.id}</td>
          <td>{user?.name}</td>
          <td>{user?.email}</td>
          <td>
            {user?.avatar !== "" ? (
              <img
                src={user?.avatar}
                alt="...."
                style={{ height: "50px", width: "50px" }}
              />
            ) : (
              <button
                className="btn btn-outline-secondary btn-sm rounded-5"
                data-bs-toggle="modal"
                data-bs-target="#modalId"
                style={{paddingLeft:'20px', paddingRight:'20px'}}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  handleUploadAvatar(user?.id);
                }}
              >
                <i className="fas fa-upload"></i>
              </button>
            )}
          </td>
          <td>{user?.phone}</td>
          <td>
            {user?.role === "ADMIN" ? (
              <span className="badge rounded-pill bg-success text-white">
                Admin
              </span>
            ) : (
              <span className="badge rounded-pill bg-info text-white">
                User
              </span>
            )}
          </td>
          <td>
            <button
              className="btn btn-outline-dark btn-sm rounded-5 mx-1"
              data-bs-toggle="modal"
              data-bs-target="#modalId"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                handleInfor(user?.id);
              }}
            >
              <i className="fas fa-info-circle"></i>
            </button>
            <button
              className="btn btn-outline-warning btn-sm rounded-5 mx-1"
              data-bs-toggle="modal"
              data-bs-target="#modalId"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                handleEdit(user?.id);
              }}
            >
              <i className="far fa-edit"></i>
            </button>
            <button
              className="btn btn-outline-danger btn-sm rounded-5 mx-1"
              data-bs-toggle="modal"
              data-bs-target="#modalId"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                handleDelete(user?.id);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <Modaltest />
      <h3 className="tilte my-3 ">Users Management</h3>
      <div className="addAdminPage mb-3" style={{ cursor: "pointer" }}>
        <h5
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          onClick={handleAdd}
        >
          Add administrators Page
        </h5>
      </div>
      <div className="row">
        <form className="search col-lg-4" /*onSubmit={handleSunmit}*/>
          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="Users Name"
              onChange={handleChange}
              value={username}
            />
            <button className="btn btn-outline-danger">Search</button>
          </div>
        </form>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Avatar</th>
                <th scope="col">Phone</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{renderUser()}</tbody>
          </table>
        </div>
        <div className="pagination d-flex justify-content-center">
          <Pagination
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            totalRow={totalRow}
          />
        </div>
      </div>
    </div>
  );
}
