import {
  DELETE_REQUEST,
  GET_REQUEST,
  PATCH_REQUEST,
} from "../services/HttpClient";

export const actionTypes = {
  GET_USERS_REQUEST: "GET_USERS_REQUEST",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_ERROR: "GET_USERS_ERROR",
  SHOW_MODAL: "SHOW_MODAL",
  CHANGE_QUERY: "CHANGE_QUERY",
  CHANGE_FILTER: "CHANGE_FILTER",
  EMPTY_ENTITY: "EMPTY_ENTITY",
  COMPLETE_ALL: "COMPLETE_ALL",
  CLEAR_USER_SELECT: "CLEAR_USER_SELECT",
  CHECKED_ITEM: "CHECKED_ITEM",
  DELETE_USER: "DELETE_USER",
  DELETE_USERS: "DELETE_USERS",
  SUCCESS_WORK: "SUCCESS_WORK",
  IS_CHECKED_USER: "IS_CHECKED_USER",
};
export const initialState = {
  status: "idle",
  entities: [
    {
      id: 1,
      name: "مهدی",
      lastName: "عطایی",
      phoneNumber: "09301234567",
      state: "تهران",
      city: "پردیس",
      checked: false,
    },
  ],
  showModal: false,
  query: "",
  searchFilter: ["name"],
};

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case actionTypes.GET_USERS_SUCCESS:
      state.entities.push(action.payload);
      return {
        ...state,
        status: "success",
      };
    case actionTypes.GET_USERS_ERROR:
      return {
        ...state,
        status: "error",
      };
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case actionTypes.CHANGE_QUERY:
      const { value } = action.payload;
      return {
        ...state,
        query: value,
      };
    case actionTypes.CHANGE_FILTER:
      const filters = action.payload;
      state.searchFilter.push(filters);
      return {
        ...state,
      };
    case actionTypes.EMPTY_ENTITY:
      return {
        ...state,
        entities: [],
      };
    case actionTypes.COMPLETE_ALL:
      const { allusers } = action.payload;
      allusers.map((user) => PATCH_REQUEST(`users/${user.id}`, true));
      return {
        ...state,
        status: "checkAllUser",
      };
    case actionTypes.CLEAR_USER_SELECT:
      const { usersInputs } = action.payload;
      usersInputs.map((user) => PATCH_REQUEST(`users/${user.id}`, false));
      return {
        ...state,
        status: "clearUsersSelect",
      };
    case actionTypes.CHECKED_ITEM:
      const { id, isChecked } = action.payload;
      PATCH_REQUEST(`users/${id}`, isChecked);
      return {
        ...state,
      };
    case actionTypes.DELETE_USER:
      const { userID } = action.payload;
      DELETE_REQUEST("users", userID);
      return {
        ...state,
      };
    case actionTypes.DELETE_USERS:
      const users = state.entities.filter((entity) => entity.checked);
      users.map((user) => DELETE_REQUEST("users", user.id));
      return {
        ...state,
        status: "USER_DELETED",
      };
    case actionTypes.SUCCESS_WORK:
      return {
        ...state,
        status: "success",
      };

    default:
      return state;
  }
}

export function GetUsers(actionType, payload) {}
