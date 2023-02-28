import Trash from "../../assets/img/trash.png";
import Magnifier from "../../assets/img/loupe.png";
import { actionTypes } from "../../app/reducer";
import { useUserDispatch } from "../../app/context";
import { useState } from "react";
import { CSVLink } from "react-csv";

const UsersTableHeader = ({ allUsers }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dispatch = useUserDispatch();

  const headers = [
    { label: "نام", key: "name" },
    { label: "نام خانوادگی", key: "lastName" },
    { label: "شماره تماس", key: "phoneNumber" },
    { label: "استان", key: "state" },
    { label: "شهر", key: "city" },
  ];

  const csvReport = {
    filename: "report.csv",
    headers,
    data: allUsers,
  };

  const handleShowModal = () => {
    dispatch({
      type: actionTypes.SHOW_MODAL,
      payload: true,
    });
  };
  const handleChange = (e) => {
    dispatch({
      type: actionTypes.CHANGE_QUERY,
      payload: { value: e.target.value },
    });
  };

  const handleOpenDropDown = (e) => {
    setShowDropDown(!showDropDown);
  };

  const handleChangeFilter = (e) => {
    dispatch({
      type: actionTypes.CHANGE_FILTER,
      payload: e.target.name,
    });
  };
  const handleDeleteUsers = async () => {
    await dispatch({
      type: actionTypes.DELETE_USERS,
    });
  };

  return (
    <div className="table_label">
      <div
        className="trash_button f-center c-pointer"
        onClick={handleDeleteUsers}
      >
        <img src={Trash} alt="" className="trash-img" />
        <span className="title">حذف</span>
      </div>
      <div className="search-add-wrapper f-center">
        <div className="search_filter mr_1">
          <div className="dropDown_outer" onClick={handleOpenDropDown}>
            <div className="dropDown_header f-center-between c-pointer">
              <span className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />{" "}
                </svg>
              </span>
              <div className="title">فیلتر جستجو</div>
            </div>
            <div
              className={
                showDropDown ? "dropDown_inner" : "dropDown_inner hidden"
              }
              onClick={(e) => e.stopPropagation()}
            >
              <div className="checkbox_wrapper f-center-between">
                <input
                  type="checkbox"
                  name="name"
                  id="name"
                  defaultChecked="true"
                  onChange={(e) => handleChangeFilter(e)}
                />
                <label htmlFor="name">نام</label>
              </div>
              <div className="checkbox_wrapper f-center-between">
                <input
                  type="checkbox"
                  name="lastName"
                  id="lastName"
                  onChange={(e) => handleChangeFilter(e)}
                />
                <label htmlFor="lastName">نام خانوادگی</label>
              </div>
              <div className="checkbox_wrapper f-center-between">
                <input
                  type="checkbox"
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={(e) => handleChangeFilter(e)}
                />
                <label htmlFor="phoneNumber">شماره تماس</label>
              </div>
              <div className="checkbox_wrapper f-center-between">
                <input
                  type="checkbox"
                  name="state"
                  id="state"
                  onChange={(e) => handleChangeFilter(e)}
                />
                <label htmlFor="state">استان</label>
              </div>
              <div className="checkbox_wrapper f-center-between">
                <input
                  type="checkbox"
                  name="city"
                  id="city"
                  onChange={(e) => handleChangeFilter(e)}
                />
                <label htmlFor="city">شهر</label>
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            onChange={(e) => handleChange(e)}
            placeholder="...جستجو"
          />
          <img src={Magnifier} className="magnifier" alt="#" />
        </div>
        <CSVLink {...csvReport} className="btn btn-warning">خروجی اکسل</CSVLink>
        <button className="btn btn-success add_user" onClick={handleShowModal}>
          اضافه کردن
        </button>
      </div>
    </div>
  );
};

export default UsersTableHeader;
