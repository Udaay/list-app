import { useEffect, useState } from "react";
import CustomCheckList from "../../component/CustomCheckList/CustomCheckList.Component";
import "./DemoPage.styles.css";
import dummyData from "../../data/dummyData";
import { ListItem, NestedList } from "../../model/listModel";

function DemoPage() {
  const [data, setData] = useState<NestedList[]>([]);

  useEffect(() => {
    Promise.resolve(dummyData) // Trying to mimic the fetch promise
      .then((data) => {
        const rootNodes = data
          .filter(({ parentId }) => parentId === null) // Getting Root Node first.
          .map((root) => ({
            ...root,
            childrens: [],
            checked: false
          })); // Adding EmptyChild to Every RootNode.
        rootNodes.forEach((root) => convertData(root, data));
        console.log(rootNodes);
        setData(rootNodes);
      });
  }, []);

  /**
   * A Recursive method to connect child nodes to it's parent node, by taking itemData from data.
   * @param {NestedList} root, Root node to which it's children will get added. 
   * @param {ListItem[]} data, A flat array from will select the node.
   */
  const convertData = (root: NestedList, data: ListItem[]) => {
    data.forEach((item) => {
      if (item.parentId == root.id) {
        const child = {
          ...item,
          childrens: [],
          checked: false
        };

        //Getting Index at which current data will reside in childrens Array.
        const path = item.id.split("-");
        const insertIndAt = parseInt(path[path.length - 1]);

        root.childrens[insertIndAt] = child;
        //called again with child as data;
        convertData(child, data); // keep looking for the child of current Node.
      }
    });
  };

  /**
   * This method is called when on CLick on Submit button.
   */
  const handleSubmit = () => {
    console.info("Output =>" , data);
  };

  /**
   * This method update the data onChange of item is checked/un-checked.
   * @param {NestedList[]}updatedData, 
   */
  const onCheck = (updatedData: NestedList[]) => {
    setData(updatedData)
  }

  return <CustomCheckList onCheck={onCheck} checkListData={data} onSubmit={handleSubmit} />;
}

export default DemoPage;
