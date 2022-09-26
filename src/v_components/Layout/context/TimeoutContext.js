import React, { useState } from "react";
const TimeoutContext = React.createContext();

function TimeoutContextProvider(props) {
  const [fileExtension, setFileExtension] = useState(false);
  const [executeCode, setExecuteCode] = useState(false);
  return (
    <TimeoutContext.Provider
      value={{ fileExtension, setFileExtension, executeCode, setExecuteCode }}
    >
      {props.children}
    </TimeoutContext.Provider>
  );
}
export { TimeoutContext, TimeoutContextProvider };
