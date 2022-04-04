import React from "react";

const Input = ({
  type = "text",
  label = "label",
  value = "",
  name = "name",
  onChange = () => null,
  onClickShow = () => null,
  show,
}) => {
  return (
    <div className="input">
      <label name={name}>{label}</label>
      <br />
      <input name={name} type={type} onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
