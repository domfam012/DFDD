import React from 'react';
import { Select } from '@radix-ui/themes';

const SelectBox = ({ value, onChange, options, size, className, ...props }) => {
  return (
    <Select.Root
      size={size}
      disabled={props.disabled}
      value={value} // 선택된 값
      onValueChange={onChange} // 선택 시 호출되는 함수
      {...props}
    >
      <Select.Trigger
        placeholder={props.placeholder}
        className={className && value ? `${className} selected` : className || (value ? 'selected' : '')}
        title={`검색어 구분 : ${value === '제목' ? '제목' : '내용'} 선택됨`}
      />
      <Select.Content position="popper" sideOffset="0">
        {options.map((option, index) => {
          // 옵션이 객체인지 문자열인지 검사
          const isObject = typeof option === 'object' && option !== null;
          const optionValue = isObject ? option.value : option;
          const optionLabel = isObject ? option.label : option;
          return (
            <Select.Item key={index} value={optionValue}>
              {optionLabel}
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
};

export { SelectBox };
