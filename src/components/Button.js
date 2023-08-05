import React from "react";

function Button(props) {
  console.log({props})
  return (
    <>
      <button>
        <a href={props.path}>{props.title}</a>
      </button>
    </>
  );
}

export default Button;
