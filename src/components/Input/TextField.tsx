import React, {
  ChangeEvent,
  forwardRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import Row from "antd/es/row";
import Col from "antd/es/col";
import Input, { InputProps } from "antd/lib/input/Input";
import Labeled, { LabeledFieldProps } from "../Labeled";
import ErrorRow from "./ErrorRow";

interface Props extends Omit<InputProps, "onChange">, Omit<LabeledFieldProps, "children"> {
  className?: string;
  error?: ReactNode;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = forwardRef<TextFieldComponent, Props>(
  (
    { className, error, label, labelPosition, onChange, rowProps, sideLabelSpan, ...props },
    ref
  ) => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.target.value, event),
      [onChange]
    );

    const inputRef = useRef<Input>(null);
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
    }));

    return (
      <Labeled
        className={className}
        label={label}
        labelPosition={labelPosition}
        rowProps={rowProps}
        sideLabelSpan={sideLabelSpan}
      >
        <Col span={24}>
          <Row>
            <Input ref={inputRef} onChange={handleChange} {...props} />
          </Row>
          {error && <ErrorRow>{error}</ErrorRow>}
        </Col>
      </Labeled>
    );
  }
);

export interface TextFieldComponent {
  focus: () => void;
  blur(): void;
}

export default TextField;
