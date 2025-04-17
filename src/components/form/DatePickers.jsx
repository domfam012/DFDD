import React from 'react';
import { TextField } from '@radix-ui/themes';

const DatePickers = props => {
  return (
    <TextField.Root
      id={props.id}
      type="date"
      size="2"
      placeholder={props.placeholder ? props.placeholder : '선택해 주세요.'}
      className={`date-pickers ${props.readOnly && 'readOnly'}`}
      required
      disabled={props.disabled}
      {...props}
    />
  );
};

export { DatePickers };
