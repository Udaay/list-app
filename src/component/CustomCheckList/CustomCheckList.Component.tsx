import { CustomCheckListProps, NestedList } from "../../model/listModel";
import ListComponent from "../ListComponent/List.Component";
import "./CustomCheckList.styles.css";

function CustomCheckList(props: CustomCheckListProps) {
  const { checkListData, onSubmit, onCheck } = props;

  /**
   * This method update the data according to onChange of checkbox
   * @param {NestedList} itemToModify , Target item which was checked/un-checked by user.
   * @param {boolean} checked ,
   */
  const handleCheckBoxClicked = (
    itemToModify: NestedList,
    checked: boolean
  ) => {
      const pathIndexs = itemToModify.id.split('-');
      const updatedData = structuredClone(checkListData) as NestedList[];

      let currNode = updatedData;
      let currNodeChilds : NestedList[] = [];
      
      while(pathIndexs.length){
        const currInd = parseInt(pathIndexs.shift() as string);
        if(pathIndexs.length === 0){ // Indicates we have reached target Element and will change state accordingly. 
          currNode[currInd].checked = checked;
          currNodeChilds = currNode[currInd].childrens;
          break;
        }
        currNode = currNode[currInd].childrens;
      }

      updateAllChildren(currNodeChilds, checked);
      onCheck(updatedData);
  };

  /**
   * A Recursive method to update the checked state of all children of currentNode.
   * @param {NestedList[]} nodes ,
   * @param {boolean} checked ,
   * @returns 
   */
  const updateAllChildren = (nodes: NestedList[], checked: boolean)=> {
    if(!nodes.length) return;

    nodes.forEach((node) => {
      node.checked = checked;
      updateAllChildren(node.childrens, checked)
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit();
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
