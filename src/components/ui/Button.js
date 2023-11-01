import React from "react";
import Button from "react-bootstrap/Button";

const ButtonField = ({ type, name, pageLink, ...props }) => {
  let buttonElement = null;
  switch (type) {
    case "submit":
      buttonElement = (
        <Button as="input" type="submit" value={name} {...props} />
      );
      break;
    default:
      buttonElement = <Button {...props}>{name}</Button>;
      break;
  }
  return buttonElement;
};

export default ButtonField;
