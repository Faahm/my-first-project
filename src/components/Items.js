import React from "react";

const Items = (props) => {
  return (
    <>
      {props.items
        .filter((item) => !props.isChecked || item.stock > 0)
        .filter((item) =>
          item.name.toLowerCase().includes(props.query.toLowerCase())
        )
        .map((item) => (
          <tr
            key={item.id} // Note: You might want to assign unique keys to items if you have them
            onClick={() => alert(`Clicked: ${item.name} - ${item.price}`)}
          >
            <td>{item.name}</td>
            <td>{props.includePrice && `$${item.price}`}</td>
            <td style={{ textAlign: "center" }}>{item.stock}</td>
          </tr>
        ))}
    </>
  );
};

export default Items;
