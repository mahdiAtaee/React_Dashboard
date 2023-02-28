import User, { useForceUpdate } from "./User";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableFooter from "./UsersTableFooter";
import { useUserContext, useUserDispatch } from "../../app/context";
import { GET_REQUEST } from "../../services/HttpClient";
import { useEffect, useState } from "react";
import { actionTypes } from "../../app/reducer";

const fetchUsers = async (page = 1, limit) => {
  return await GET_REQUEST(`users?_page=${page}&_limit=${limit}`);
};
const maxPage = async () => {
  return await GET_REQUEST("users").then((response) => response.length);
};
const fetchAllUsers = async () => {
  return await GET_REQUEST("users");
};

const UsersTable = () => {
  const dispatch = useUserDispatch();
  const { entities, status, query, searchFilter } = useUserContext();
  const [users, setUsers] = useState(entities);
  const [allUsers, setAllUsers] = useState([]);
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  const forceUpdate = useForceUpdate();

  const handleNextPage = () => {
    setPage(++page);
    fetchUsers(page, limit).then((response) => setUsers(response));
    forceUpdate();
  };

  const handlePrevPage = () => {
    setPage(--page);
    fetchUsers(page, limit).then((response) => setUsers(response));
    forceUpdate();
  };

  const handlePageClick = async (e, index) => {
    setPage(index);
    await fetchUsers(page, limit).then((response) => setUsers(response));
    forceUpdate();
  };

  useEffect(() => {
    fetchUsers().then((response) => {
      setUsers(response);
    });
    fetchAllUsers().then((response) => setAllUsers(response));
  }, []);

  const search = (data) => {
    return data.filter((item) =>
      searchFilter.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const usersElement = search(users).map((user) => (
    <User userID={user.id} key={user.id} />
  ));

  const allusers = users && users;
  const onMarkAllCompletedClick = (e) => {
    if (e.target.checked) {
      dispatch({
        type: actionTypes.COMPLETE_ALL,
        payload: { allusers },
      });
      return null;
    } else {
      dispatch({
        type: actionTypes.CLEAR_USER_SELECT,
        payload: { usersInputs: allusers },
      });
      return null;
    }
  };

  return (
    <div className="table_wrapper">
      <UsersTableHeader allUsers={allUsers}/>
      <table>
        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                name="checkAll"
                id="check_all"
                onClick={(e) => onMarkAllCompletedClick(e)}
              />
            </th>
            <th scope="col">نام</th>
            <th scope="col">نام خانوادگی</th>
            <th scope="col">شماره تماس</th>
            <th scope="col">استان</th>
            <th scope="col">شهر</th>
          </tr>
        </thead>
        <tbody>{usersElement}</tbody>
      </table>
      <UsersTableFooter
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={page}
        pagelimit={limit}
        maxPage={maxPage()}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

export default UsersTable;
