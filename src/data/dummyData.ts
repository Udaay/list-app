import { ListItem } from "../model/listModel";

const dummyData : ListItem[] = [
  {
    id: "0",
    name: "Sports",
    parentId: null,
  },

  {
    id: "0-0",
    name: "Cricket", // International and Domestic
    parentId: "0",
  },
  {
    id: "0-1",
    name: "Soccer", // International and Domestic
    parentId: "0",
  },
  {
    id: "0-2",
    name: "Rugby", // International and Domestic
    parentId: "0",
  },



  {
    id: "1",
    name: "Movies",
    parentId: null,
  },

  {
    id: "1-0",
    name: "Action",
    parentId: "1"
  },
  {
    id: "1-1",
    name: "Adventure",
    parentId: "1"
  },
  {
    id: "1-2",
    name: "Comedy",
    parentId: "1"
  },
  {
    id: "1-3",
    name: "Mystery",
    parentId: "1"
  },
  {
    id: "1-4",
    name: "Thriller",
    parentId: "1"
  },


  {
    id: "2",
    name: "Electronics",
    parentId: null,
  },
  
  {
    id: "2-0",
    name: "Computer Peripherals",
    parentId: "2",
  },
  {
    id: "2-1",
    name: "Gaming",
    parentId: "2",
  },
  {
    id: "2-2",
    name: "Mobile Accessories",
    parentId: "2",
  },
  {
    id: "2-3",
    name: "Phone Accessories",
    parentId: "2",
  },



];

export default dummyData;