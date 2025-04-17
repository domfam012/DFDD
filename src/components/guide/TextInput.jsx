import React, { useState } from 'react';
import { TextInput } from '../form';

export default function GuideTextInput() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return (
    <>
      <TextInput
        id="loginId"
        value={id}
        handleInput={setId}
        label="아이디"
        placeholder="Please input your ID!"
        type="text"
        autoComplete="username"
      />
      <TextInput
        id="loginPassword"
        value={pw}
        handleInput={setPw}
        label="비밀번호"
        placeholder="Please input your password!"
        type="password"
        autoComplete="current-password"
      />
    </>
  );
}
