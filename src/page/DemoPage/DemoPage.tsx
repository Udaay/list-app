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
          .map((root) => ({ ...root, childrens: [] })) // Adding EmptyChild to Every RootNode.
        rootNodes.forEach((root) => convertData(root, data));
        console.log(rootNodes);
        setData(rootNodes);
      });
  }, []);

  const convertData = (root: NestedList, data: ListItem[]) => {
    data.forEach((item) => {
      if (item.parentId == root.id) {
        const child = { ...item, childrens: [] };

        //Getting Index at which current data will reside in childrens Array.
        const path = item.id.split("-");
        const insertIndAt = parseInt(path[path.length - 1]);

        root.childrens[insertIndAt] = child;
        convertData(child, data); // keep looking for the child of current Node.
      }
    });
  };

  return (
    <CustomCheckList />
  );
}

export default DemoPage;
