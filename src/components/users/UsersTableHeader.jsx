import Trash from "../../assets/img/trash.png";
import Magnifier from "../../assets/img/loupe.png";
const UsersTableHeader = () => {
  return (
    <div className="table_label">
      <div className="trash_button f-center c-pointer">
        <img src={Trash} alt="" className="trash-img" />
        <span className="title">حذف</span>
      </div>
      <div className="search-add-wrapper f-center">
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="...جستجو"
          />
          <img src={Magnifier} className="magnifier" alt="#" />
        </div>
        <button className="btn btn-success add_user">اضافه کردن</button>
      </div>
    </div>
  );
};

export default UsersTableHeader;
