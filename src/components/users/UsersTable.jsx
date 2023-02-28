import User, { useForceUpdate } from "./User";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableFooter from "./UsersTableFooter";
import { useUserContext, useUserDispatch } from "../../app/context";
import { GET_REQUEST } from "../../services/HttpClient";
import { useEffect, useState } from "react";
import { actionTypes } from "../../app/reducer";

export const fetchUsers = async () => {
  return await GET_REQUEST("users");
};

const UsersTable = () => {
  const dispatch = useUserDispatch();
  const { entities, status, query, searchFilter } = useUserContext();
  const [users, setUsers] = useState(entities);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (status !== "success") {
      fetchUsers().then((response) => {
        setUsers(response);
      });
    }
  }, [status]);

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
      <UsersTableHeader />
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
      <UsersTableFooter />
    </div>
  );
};

export default UsersTable;
