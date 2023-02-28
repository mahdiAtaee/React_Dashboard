import { useEffect, useState } from "react";
import { useUserContext, useUserDispatch } from "../app/context";
import { actionTypes } from "../app/reducer";
import { POST_REQUEST } from "../services/HttpClient";
import useFormFields from "./useFormFields";

const Modal = () => {
  const dispatch = useUserDispatch();
  const { showModal, status } = useUserContext();
  const [addUserResult, setAddUserResult] = useState();
  const handleShowModal = () => {
    dispatch({
      type: actionTypes.SHOW_MODAL,
      payload: false,
    });
  };

  let { fields, handleChange } = useFormFields({
    name: "",
    lastName: "",
    phoneNumber: "",
    state: "",
    city: "",
    personalID: "",
  });

  const handleAddUser = async () => {
    dispatch({
      type: actionTypes.GET_USERS_REQUEST,
    });
    const result = await POST_REQUEST("users", fields);
    setAddUserResult(result);
    fields = {
      name: "",
      lastName: "",
      phoneNumber: "",
      state: "",
      city: "",
      personalID: "",
    };
    handleShowModal();
  };

  useEffect(() => {
    if (addUserResult !== undefined) {
      console.log("where are you now?");
      dispatch({
        type: actionTypes.GET_USERS_SUCCESS,
        payload: addUserResult,
      });
    }
  }, [addUserResult, dispatch]);

  return (
    <>
      <div
        className={!showModal ? "overlay hidden" : "overlay"}
        onClick={handleShowModal}
      ></div>
      <div className={!showModal ? "modal_wrapper hidden" : "modal_wrapper"}>
        <div className="modal_header f-center-between">
          <h3>اضافه کردن کاربر جدید</h3>
          <span className="close_btn c-pointer" onClick={handleShowModal}>
            X
          </span>
        </div>
        <div className="modal_content">
          <form action="" method="post">
            <div className="input-group">
              <label htmlFor="name">نام</label>
              <input
                type="text"
                name="name"
                id="name"
                value={fields.name}
                onChange={handleChange}
                required
                placeholder="نام کاربر را وارد کنید..."
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">نام خانوادگی</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={fields.lastName}
                onChange={handleChange}
                required
                placeholder="نام خانوادگی کاربر راوارد کنید..."
              />
            </div>
            <div className="input-group">
              <label htmlFor="phoneNumber">شماره تماس</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={fields.phoneNumber}
                onChange={handleChange}
                required
                placeholder="شماره تماس کاربر را وارد کنید..."
              />
            </div>
            <div className="input-group">
              <label htmlFor="state">استان</label>
              <input
                type="text"
                name="state"
                id="state"
                value={fields.state}
                onChange={handleChange}
                required
                placeholder="استان محل سکونت کاربر را وارد کنید..."
              />
            </div>
            <div className="input-group">
              <label htmlFor="city">شهر</label>
              <input
                type="text"
                name="city"
                id="city"
                value={fields.city}
                onChange={handleChange}
                required
                placeholder="شهر محل سکونت کاربر را وارد کنید..."
              />
            </div>
            <div className="input-group">
              <label htmlFor="personalID">کد پرسنلی</label>
              <input
                type="text"
                name="personalID"
                id="personalID"
                value={fields.personalID}
                onChange={handleChange}
                required
                placeholder="کد پرسنلی کاربر را وارد کنید..."
              />
            </div>
          </form>
        </div>
        <div className="modal_footer f-center-start">
          <button
            className="btn btn-danger cancel mr_1"
            onClick={handleShowModal}
          >
            لغو
          </button>
          <button className="btn btn-success add" onClick={handleAddUser}>
            افزودن
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
