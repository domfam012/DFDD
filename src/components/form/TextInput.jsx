import React, { useState } from 'react';
import { Text, TextField, Tooltip, IconButton } from '@radix-ui/themes';
import classNames from 'classnames';
import { EyeNoneIcon, EyeOpenIcon, Cross2Icon } from '@radix-ui/react-icons';

const TextInput = props => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => {
    setValue(e.target.value);
    props.handleInput(e.target.value);
  };
  const handleReset = () => {
    setValue('');
  };

  const toggleVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <>
      {props.label && (
        <Text as="label" htmlFor={props.id}>
          {props.label}
        </Text>
      )}
      <TextField.Root
        size="3"
        id={props.id}
        type={props.type === 'password' && showPassword ? 'text' : props.type}
        value={value}
        onChange={handleChange}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        disabled={props.disabled}
        className={classNames({ 'is-error': props.error })}
      >
        <TextField.Slot side="right">
          {props.error ? (
            <i className="icon-error">
              <img src={'/images/icon/icon-error.svg'} alt="에러 아이콘" />
            </i>
          ) : value ? (
            <>
              {props.type === 'password' && (
                <Tooltip content={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}>
                  <IconButton
                    type="button"
                    variant="ghost"
                    size="1"
                    title="암호 확인하기"
                    onClick={toggleVisibility}
                  >
                    {showPassword ? <EyeOpenIcon /> : <EyeNoneIcon title="암호상태로 보기" />}
                  </IconButton>
                </Tooltip>
              )}

              <IconButton
                type="button"
                variant="ghost"
                size="1"
                title="지우기"
                onClick={handleReset}
              >
                <Cross2Icon />
              </IconButton>
            </>
          ) : null}
        </TextField.Slot>
      </TextField.Root>
      {props.error && <Text className="message-status">{props.errorMsg}</Text>}
    </>
  );
};
export { TextInput };
