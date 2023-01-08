import "./list.styles.css";
import { ListComponentProps, NestedList } from "../../model/listModel";
import CheckBox from "../CheckBox/CheckBox.Component";

function ListComponent(props: ListComponentProps) {
  const { listData, handleCheckBoxClicked } = props;

  const onCheckBoxClicked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetId, checked } = e.target;
    const target = listData.find(({ id }) => id === targetId) as NestedList;
    handleCheckBoxClicked(target, checked);
  };

  return (
    <>
      {listData.map((itemData: NestedList) => (
        <details
          key={itemData.id}
          className={`${
            itemData.childrens.length === 0 ? "leaf-node" : "has-child"
          }`}
        >
          <summary>
            <div
              className={`expandButton ${
                itemData.childrens.length === 0 ? "hide-button" : ""
              }`}
            >
              <div className="vertical-line" />
              <div className="horizontal-line" />
            </div>
            <CheckBox
              onChange={onCheckBoxClicked}
              name={itemData.name}
              value={itemData.id}
            />
          </summary>
          {itemData.childrens.length > 0 ? (
            <div className="child-details">
              <ListComponent
                handleCheckBoxClicked={handleCheckBoxClicked}
                listData={itemData.childrens}
              />
            </div>
          ) : null}
        </details>
      ))}
    </>
  );
}

export default ListComponent;
