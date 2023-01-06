import { useEffect, useState } from "react";
import CustomCheckList from "../../component/CustomCheckList/CustomCheckList.Component";
import "./DemoPage.styles.css";
import dummyData from "../../data/dummyData";
import { ListItem } from "../../model/listModel";

function DemoPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.resolve(dummyData) // Trying to mimic the fetch promise
      .then((data) => convertData(data));
  }, []);

  const convertData = (data: ListItem[]) => {
    console.log(data)
    //Initially only organizing root Item
    const flatArr = (arr: any, list: ListItem) => {
      const { id, parentId } = list;
      if (parentId === null) {
        if (arr[id]) arr[id] = { ...arr[id], ...list };
        else arr[id] = { ...list }; // If parentId is null and no entry in arr
        return arr;
      }
      // const pathIndexs = parentId.split('-');
      // let {length} = pathIndexs;

      if (!arr[parentId]) {
        arr[parentId] = {};
      }

      if (!arr[parentId].childItems) arr[parentId].childItems = [];
      arr[parentId].childItems.push({ ...list });

      return arr;
    }
    const newData = data.reduce(flatArr, []);
    console.log(newData)
  };

  return <CustomCheckList />;
}

export default DemoPage;
