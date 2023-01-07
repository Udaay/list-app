export interface ListItem {
  id: string;
  name: string;
  parentId: string | null;
}

 export interface NestedList extends ListItem {
   childrens: NestedList[];
 }
