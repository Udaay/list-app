import { CheckBoxProps } from "../../model/listModel";
import "./checkBox.styles.css";

function CheckBox(props: CheckBoxProps) {
  const { name, ...restProps } = props;
  return (
    <label className="checkbox-container">
      <input {...restProps} type="checkbox" className="checkbox" />
      <span className="checkmark" />
      <span className="label-name">{name}</span>
    </label>
  );
}

export default CheckBox;
