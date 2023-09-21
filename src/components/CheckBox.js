import React from "react";

const CheckBox = ({ checked, onChange }) => {
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>Only show products in stock</span>
    </div>
  );
};

export default CheckBox;
