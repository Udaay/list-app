import { CustomCheckListProps } from "../../model/listModel";
import ListComponent from "../ListComponent/List.Component";
import "./CustomCheckList.styles.css";

function CustomCheckList(props: CustomCheckListProps) {
  const { checkListData, onSubmit } = props;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(checkListData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container" >
          <ListComponent listData = {checkListData} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CustomCheckList;
