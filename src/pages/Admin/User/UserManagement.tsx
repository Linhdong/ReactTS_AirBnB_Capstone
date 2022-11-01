import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { AppDispatch, RootState } from "./../../../redux/configStore";
import Pagination from "../../../components/Pagination/Pagination";
import { getUserPaginationAction } from "../../../redux/reducers/userReducer";

type Props = {};
const logo = require("./../../../assets/img/airbnb-logo.png");
let timeout:ReturnType<typeof setTimeout>; 

export default function UserManagement({}: Props) {
  const { arrUsers } = useSelector((state: RootState) => state.userReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const [username, setUserName] = useState("");
  const pageIndex = useRef("1");
  const pageSize = useRef("1");
  const keyword = useRef("");
  const dispatch: AppDispatch = useDispatch();
  // const [keyword, setKeyWord] = useState<string>("");
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
    setUserName(value);
  };

  const handleSunmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    pageIndex.current = String(currentPage);
    pageSize.current = String(postsPerPage);
    keyword.current = String(username);
    setSearchParams({
      pageIndex: pageIndex.current,
      pageSize: pageSize.current,
      keyword: keyword.current,
    });
    setUserName("");
  };

  const getParamsOnUrl = () => {
    if (searchParams.get("keyword") === null) {
      const action = getUserPaginationAction(
        searchParams.get("pageIndex"),
        searchParams.get("pageSize"),
        null
      );
      dispatch(action);
    } else {
      const action = getUserPaginationAction(
        searchParams.get("pageIndex"),
        searchParams.get("pageSize"),
        searchParams.get("keyword")
      );
      dispatch(action);
    }
  };

  useEffect(() => {
    pageIndex.current = String(currentPage);
    pageSize.current = String(postsPerPage);
    setSearchParams({
      pageIndex: pageIndex.current,
      pageSize: pageSize.current,
    });
  }, [currentPage]);

  useEffect(() => {
    timeout = setTimeout(() => {
      getParamsOnUrl();
    },1000);
    return () => {
      if(timeout !== null){
        clearTimeout(timeout)
      }
    };
  }, [pageIndex.current, keyword.current, username]);

  console.log('arrUsers: ', arrUsers);

  return (
    <div>
      <h3 className="tilte my-3 ">Users Management</h3>
      <div className="row">
        <form className="search col-lg-4" onSubmit={handleSunmit}>
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
            {/* <caption>List of users</caption> */}
            <thead>
              <tr>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Avatar</th>
                <th scope="col">Phone</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th scope="row">1</th> */}
                <td>Nguyễn Hoàng My</td>
                <td>hoangMy@gmail.com</td>
                <td>
                  <img src={logo} className="w-50" alt="...." />
                </td>
                <td>0917111474</td>
                <td>
                  <span className="badge rounded-pill bg-success text-white">
                    User
                  </span>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm rounded-5 mx-1">
                    <i className="fas fa-user-edit"></i>
                  </button>
                  <button className="btn btn-danger btn-sm rounded-5">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <Pagination
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
