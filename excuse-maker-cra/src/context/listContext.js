import React from "react";

export const ExcuseListContext = React.createContext(null);
export const useExcuseList = () => {
  const context = React.useContext(ExcuseListContext);
  if (!context) {
    throw new Error(`에러`);
  }
  return context;
};
