import React from "react";

function TextInput({ id, label, ...delegated }) {
  let generatedId = React.useId();
  let appliedId = id || generatedId;

  return (
    <>
      <label htmlFor={appliedId}>{label}</label>
      <input id={appliedId} {...delegated} />
    </>
  );
}

export default TextInput;
