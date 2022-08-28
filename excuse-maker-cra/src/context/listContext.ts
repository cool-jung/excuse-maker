import React from "react";

export type ExcuseListPropsItem = {
  id : number;
  body: string;
}
type ExcuseListProps = {
  time : ExcuseListPropsItem[];
  schedule : ExcuseListPropsItem[];
  setExcuseList: React.Dispatch<React.SetStateAction<{time:ExcuseListPropsItem[], schedule:ExcuseListPropsItem[]}>>
}
export const ExcuseListContext = React.createContext<ExcuseListProps | null>(null);
export const useExcuseList = () => {
  const context = React.useContext(ExcuseListContext);
  if (!context) {
    throw new Error(`에러`);
  }
  return context;
};
