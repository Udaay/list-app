import { useState } from "react";
import { CustomCheckListProps, NestedList } from "../../model/listModel";
import ListComponent from "../ListComponent/List.Component";
import "./CustomCheckList.styles.css";

function CustomCheckList(props: CustomCheckListProps) {
  const { checkListData, onSubmit } = props;
  const [checkedItems, setCheckedItems] = useState<NestedList[]>([]);

  const handleCheckBoxClicked = (
    itemToModify: NestedList,
    checked: boolean
  ) => {
    if (checked) {
      setCheckedItems((prev) => [...prev, { ...itemToModify, checked: true }]);
    } else {
      setCheckedItems((prev) =>
        prev.filter((node) => node.id !== itemToModify.id)
      );
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(checkedItems);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <ListComponent
          handleCheckBoxClicked={handleCheckBoxClicked}
          listData={checkListData}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CustomCheckList;
