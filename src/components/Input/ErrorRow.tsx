import React from "react";
import Row from "antd/es/row";
import styles from "./ErrorRow.module.scss";

interface Props {
  children: React.ReactNode;
}

const ErrorRow: React.FC<Props> = ({ children }) => {
  return <Row className={styles.container}>{children}</Row>;
};

export default ErrorRow;
