// react libraries
import React from "react";

// styles
import "./TextArea.scss";

const TextArea = ({ placeholder, handleTextAreaChange, error }) => {
  return (
    <div className="text-area">
      <textarea
        className={`${error && "error"}`}
        placeholder={placeholder}
        onChange={handleTextAreaChange}
      />
      {error && (
        <div className="text-area__error">
          * character length must be more than 10
        </div>
      )}
    </div>
  );
};

export default TextArea;
