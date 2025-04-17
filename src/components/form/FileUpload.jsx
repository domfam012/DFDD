import React from 'react';
import { Flex, Text, TextField } from '@radix-ui/themes';

const FileUpload = ({ onFileChange = () => {}, label, id, accept, multiple = true, rowIndex, message, disabled = false }) => {
  const handleFileSelect = e => {
    if (multiple) {
      const files = Array.from(e.target.files);
      if (files.length > 0) {
        if (!rowIndex) {
          onFileChange(files);
        } else {
          onFileChange(files, rowIndex);
        }
      }
    } else {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <Flex align="center" className="file-upload">
      <Flex align="center" gap="var(--space-2)">
        <Text as="label" htmlFor={id} style={{ cursor: 'pointer' }}>
          {label}
        </Text>
        <Text className="body3 font-error">* 파일 등록 조건 ({message || '협의 필요'})</Text>
      </Flex>
      <TextField.Root type="file" id={id} onChange={handleFileSelect} accept={accept} multiple={multiple} disabled={disabled} />
    </Flex>
  );
};

export { FileUpload };
