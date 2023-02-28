import axios from "axios";
const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://localhost:9000";
axiosClient.defaults.headers = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
  },
};
const options = {
  headers: { "content-type": "application/json" },
};
export const GET_REQUEST = async (url, id) => {
  return await axiosClient
    .get(`/${url}`, { params: { id } }, { crossdomain: true })
    .then((response) => response.data);
};
export const POST_REQUEST = async (url, data) => {
  return await axiosClient
    .post(`/${url}`, data, options)
    .then((response) => response.data);
};
export const PATCH_REQUEST = async (url, data) => {
  return await axiosClient
    .patch(
      `/${url}`,
      {
        checked: data,
      },
      options
    )
    .then((response) => response.data);
};

export const DELETE_REQUEST = async (url, deleteID) => {
  return await axiosClient
    .delete(`/${url}/${deleteID}`)
    .then((response) => response.data);
};
