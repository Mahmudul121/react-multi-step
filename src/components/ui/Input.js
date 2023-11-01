import React from "react";
import Form from "react-bootstrap/Form";

const Input = ({ fieldType, ...props }) => {
  let inputElement = null;
  switch (fieldType) {
    case "textField":
      inputElement = (
        <div className="auth-material-textfield">
          <input
            className={"login-input " + (props.className ?? "")}
            {...props}
          />
          <label>{props.label}</label>
          {props.error ? <p className="global-error">{props.error}</p> : null}
        </div>
      );
      break;
    case "textAreaField":
      inputElement = (
        <div className="auth-material-textfield">
          <textarea
            className={"login-input " + (props.className ?? "")}
            {...props}
          />
          <label>{props.label}</label>
          {props.error ? <p className="global-error">{props.error}</p> : null}
        </div>
      );
      break;
    case "checkbox":
      inputElement = (
        <>
          <Form.Check inline type={fieldType} {...props} />
        </>
      );
      break;
    default:
      inputElement = <input {...props} />;
      break;
  }
  return inputElement;
};

export default Input;
