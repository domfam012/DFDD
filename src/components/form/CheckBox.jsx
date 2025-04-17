import React from 'react';
import { Checkbox } from '@radix-ui/themes';

const CheckBox = props => {
  return (
    <Checkbox
      size="1"
      id={props.id}
      defaultChecked={props.defaultChecked}
      onCheckedChange={props.onCheckedChange}
      checked={props.checked}
      disabled={props.disabled}
      {...props}
    />
  );
};

export { CheckBox };
