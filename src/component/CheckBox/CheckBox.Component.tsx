import "./checkBox.styles.css";

function CheckBox(props: any) {
  const {name} = props;
  return (
    <label className="checkbox-container">
      <input type="checkbox" className="checkbox" />
      <span className="checkmark"/>
      <span>{name}</span>
    </label>
  )
}

export default CheckBox