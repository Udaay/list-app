import { ListItem } from "../model/listModel";

const dummyData: ListItem[] = [
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
    id: "0",
    name: "Sports",
    parentId: null,
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
    id: "0-2",
    name: "Rugby", // International and Domestic
    parentId: "0",
  },
  {
    id: "0-0-0",
    name: "International",
    parentId: "0-0",
  },
  {
    id: "0-2-0",
    name: "Dum1",
    parentId: "0-2",
  },
  {
    id: "0-2-1",
    name: "Dum2",
    parentId: "0-2",
  },
  {
    id: "0-0-1",
    name: "Domestic",
    parentId: "0-0",
  },
  {
    id: "1-1",
    name: "Adventure",
    parentId: "1",
  },
  {
    id: "1-2",
    name: "Comedy",
    parentId: "1",
  },
  {
    id: "0-1-0",
    name: "state level",
    parentId: "0-1",
  },
  {
    id: "0-0-1-0",
    name: "IPL",
    parentId: "0-0-1",
  },
  {
    id: "0-0-1-1",
    name: "BBL",
    parentId: "0-0-1",
  },
  {
    id: "0-0-1-2",
    name: "Ranji Trophy",
    parentId: "0-0-1",
  },

  {
    id: "1",
    name: "Movies",
    parentId: null,
  },

  {
    id: "1-0",
    name: "Action",
    parentId: "1",
  },
  {
    id: "1-3",
    name: "Mystery",
    parentId: "1",
  },
  {
    id: "1-4",
    name: "Thriller",
    parentId: "1",
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
    id: "2-3",
    name: "Phone Accessories",
    parentId: "2",
  },
  {
    id: "2-0-0",
    name: "Mouse",
    parentId: "2-0",
  },
  {
    id: "2-0-2",
    name: "Printer",
    parentId: "2-0",
  },
  {
    id: "2-0-1",
    name: "KeyBoard",
    parentId: "2-0",
  },
  {
    id: "1-4-2",
    name: "Fall",
    parentId: "1-4",
  },
  {
    id: "1-4-0",
    name: "Hex",
    parentId: "1-4",
  },
  {
    id: "1-4-1",
    name: "One Way",
    parentId: "1-4",
  },
  {
    id: "0-0-1-0-0",
    name: "Mumbai Indians",
    parentId: "0-0-1-0",
  },
  {
    id: "0-0-1-0-2",
    name: "Rajasthan Royals",
    parentId: "0-0-1-0",
  },
  {
    id: "0-0-1-0-1",
    name: "Gujrat Titans",
    parentId: "0-0-1-0",
  },
];

export default dummyData;
