export interface ListItem {
  id: string;
  name: string;
  parentId: string | null;
}

export interface NestedList extends ListItem {
  childrens: NestedList[];
  checked: boolean;
  isChildChecked: boolean;
}

export interface CustomCheckListProps {
  checkListData: NestedList[];
  onSubmit: (submittedData: NestedList[]) => void;
}

export interface ListComponentProps {
  listData: NestedList[];
  handleCheckBoxClicked: (itemToModify: NestedList, checked: boolean) => void;
}

export interface CheckBoxProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
