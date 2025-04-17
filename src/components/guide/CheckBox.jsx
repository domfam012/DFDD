import React, { useState } from 'react';
import { CheckBox } from '../form';

export default function GuideCheckBox(props) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <p>체크 상태 : {String(checked)}</p>
      <CheckBox id="checkbox" checked={checked} onCheckedChange={setChecked} />
    </>
  );
}
