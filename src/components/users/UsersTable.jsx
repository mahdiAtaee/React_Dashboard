import User from "./User";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableFooter from "./UsersTableFooter";

const UsersTable = () => {
  return (
    <div className="table_wrapper">
      <UsersTableHeader />
      <table>
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" name="checkAll" id="check_all" />
            </th>
            <th scope="col">نام</th>
            <th scope="col">نام خانوادگی</th>
            <th scope="col">شماره تماس</th>
            <th scope="col">استان</th>
            <th scope="col">شهر</th>
          </tr>
        </thead>
        <tbody>
          <User userID={1} />
          <User userID={1} />
          <User userID={1} />
        </tbody>
      </table>
      <UsersTableFooter />
    </div>
  );
};

export default UsersTable;
