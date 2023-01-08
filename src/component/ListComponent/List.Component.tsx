import "./list.styles.css";
import { NestedList } from "../../model/listModel";
import CheckBox from "../CheckBox/CheckBox.Component";

function ListComponent(props: any) {
  const { listData } = props;
  return (
    <>
      {listData.map((itemData: NestedList) => (
        <details
          key={itemData.id}
          className={`${itemData.childrens.length === 0 ? "leaf-node" : "has-child"}`}
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
            <CheckBox name={itemData.name} />
          </summary>
            {itemData.childrens.length > 0 ? (
              <div className="child-details">
                <ListComponent listData={itemData.childrens} />
              </div>
            ) : null}
        </details>
      ))}
    </>
  );
}

export default ListComponent;
