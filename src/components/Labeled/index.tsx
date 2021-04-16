import React from "react";
import Row, { RowProps } from "antd/es/row";
import Col from "antd/es/col";

export interface LabeledFieldProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  labelPosition?: "top" | "side";
  rowProps?: RowProps;
  sideLabelSpan?: number;
}

const Labeled: React.FC<LabeledFieldProps> = ({
  children,
  className,
  label,
  labelPosition = "top",
  rowProps,
  sideLabelSpan = 6,
}) => {
  if (labelPosition === "top") {
    return (
      <Col className={className}>
        <Row>{label}</Row>
        <Row>{children}</Row>
      </Col>
    );
  }

  return (
    <Row className={className} {...rowProps}>
      <Col span={sideLabelSpan}>{label}</Col>
      <Col span={24 - sideLabelSpan}>{children}</Col>
    </Row>
  );
};

export default Labeled;
