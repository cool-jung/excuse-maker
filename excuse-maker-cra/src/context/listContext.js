import React from "react";

export const ExcuseListContext = React.createContext(null);
export const useExcuseList = () => {
  return React.useContext(ExcuseListContext);
};
