import React from "react";
import { RowContainer } from "./ErrorRow.styles";

interface Props {
  children: React.ReactNode;
}

const ErrorRow: React.FC<Props> = ({ children }) => {
  return <RowContainer>{children}</RowContainer>;
};

export default ErrorRow;
