import React from "react";

export default function ContactItem({ labelText, labelType, labelName }) {
  return (
    <p>
      <label>
        {labelText}
        <input type={labelType} name={labelName} />
      </label>
    </p>
  );
}
