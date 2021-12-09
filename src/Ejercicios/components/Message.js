import React from "react";

const Message = (props) => {
  let styles = {
    color: props.color,
  };
  return (
    <>
      <p style={styles}>{props.message}</p>
    </>
  );
};

export default Message;
