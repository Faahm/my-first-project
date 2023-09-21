import React from "react";

const Items = (props) => {
  console.log(props.items);
  return (
    <>
      {props.items
        .filter((item) => (item.isChecked ? item.stock > 0 : item))
        .filter((item) =>
          item.name.toLowerCase().includes(props.query.toLowerCase())
        )
        .map((item) => (
          <tr
            key={item.id}
            onClick={() => alert(`Clicked: ${item.name} - ${item.price}`)}
          >
            <td>{item.name}</td>
            <td>{props.includePrice && `$${item.price}`}</td>
            <td>{item.stock}</td>
          </tr>
        ))}
    </>
  );
};

export default Items;
