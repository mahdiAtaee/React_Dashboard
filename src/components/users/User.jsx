import { useCallback, useEffect, useState } from "react";
import { useUserContext, useUserDispatch } from "../../app/context";
import { actionTypes } from "../../app/reducer";
import { GET_REQUEST } from "../../services/HttpClient";

export function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}

const GetUserWithID = async (id) => {
  return await GET_REQUEST("users", id);
};

const User = ({ userID }) => {
  const dispatch = useUserDispatch();
  const { status } = useUserContext();
  const [user, setUser] = useState();
  const forceUpdate = useForceUpdate();

  const fetchUser = () => {
    dispatch({
      type: actionTypes.GET_USERS_REQUEST,
    });
    GetUserWithID(userID).then((response) => {
      setUser(response[0]);
      if (response) {
        dispatch({
          type: actionTypes.GET_USERS_SUCCESS,
          payload: response[0],
        });
      }
    });
  };

  // useCallback(fetchUser(), [dispatch, userID, status]);
  console.log(status);
  useEffect(() => {
    if (
      status === "USER_DELETED" ||
      status === "checkAllUser" ||
      status === "clearUsersSelect"
    ) {
      forceUpdate();
      fetchUser();
      dispatch({
        type: actionTypes.SUCCESS_WORK,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, forceUpdate, status]);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userID]);

  const handleChecked = (e) => {
    dispatch({
      type: actionTypes.CHECKED_ITEM,
      payload: {
        id: e.currentTarget.id,
        isChecked: e.target.checked,
      },
    });
  };

  return status !== "success" ? (
    <div className="loader">loading ...</div>
  ) : (
    user && (
      <tr>
        <td>
          <input
            type="checkbox"
            name="check"
            id={user.id}
            defaultChecked={user.checked}
            onClick={(e) => handleChecked(e)}
          />
        </td>
        <td>{user.name}</td>
        <td>{user.lastName}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.state}</td>
        <td>{user.city}</td>
      </tr>
    )
  );
};

export default User;
