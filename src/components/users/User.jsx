const User = ({ userID }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" name="check" id="select_user" />
      </td>
      <td>مهدی</td>
      <td>عطایی</td>
      <td>09121234567</td>
      <td>تهران</td>
      <td>پردیس</td>
    </tr>
  );
};

export default User;
