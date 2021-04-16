import React, { ReactNode } from "react";
import Col from "antd/es/col";
import Row from "antd/es/row";
import Select from "antd/es/select";
import { SelectProps, SelectValue } from "antd/es/select";
import Labeled, { LabeledFieldProps } from "../Labeled";
import ErrorRow from "./ErrorRow";

interface Props<T extends SelectValue = SelectValue>
  extends SelectProps<T>,
    Omit<LabeledFieldProps, "children"> {
  error?: ReactNode;
}

class SelectField<T extends SelectValue = SelectValue> extends React.PureComponent<Props<T>> {
  render() {
    const { error, label, labelPosition, sideLabelSpan, ...props } = this.props;
    return (
      <Labeled label={label} labelPosition={labelPosition} sideLabelSpan={sideLabelSpan}>
        <Col span={24}>
          <Row>
            <Select {...props} />
          </Row>
          {error && <ErrorRow>{error}</ErrorRow>}
        </Col>
      </Labeled>
    );
  }
}

export default SelectField;
