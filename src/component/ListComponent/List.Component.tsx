import "./list.styles.css";
import { NestedList } from "../../model/listModel";
import CheckBox from "../CheckBox/CheckBox.Component";

function ListComponent(props: any) {
  const { listData } = props;
  return (
    <>
      {listData.map((itemData: NestedList) => (
        <details key={itemData.id}>
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
          <div className="child-details">
            {itemData.childrens.length > 0 ? (
              <ListComponent listData={itemData.childrens} />
            ) : null}
          </div>
        </details>
      ))}
    </>
  );
}

export default ListComponent;
